import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Types (mirrors the client) ───────────────────────────────────────────────

interface Field {
    id: string;
    label: string;
    type: string;
    required?: boolean;
}

interface Section {
    title: string;
    fields: Field[];
}

interface Payload {
    title: string;
    sections: Section[];
    answers: Record<string, string | string[]>;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatValue(val: string | string[] | undefined): string {
    if (!val) return "—";
    if (Array.isArray(val)) return val.length > 0 ? val.join(", ") : "—";
    return val.trim() || "—";
}

function buildHtml(payload: Payload): string {
    const sectionBlocks = payload.sections
        .map((section) => {
            const rows = section.fields
                .map((field) => {
                    const val = formatValue(payload.answers[field.id]);
                    return `
            <tr>
              <td style="padding:10px 14px;border-bottom:1px solid #f0ede8;width:38%;vertical-align:top;">
                <span style="font-size:12px;color:#7a6040;font-weight:600;">${field.label}</span>
              </td>
              <td style="padding:10px 14px;border-bottom:1px solid #f0ede8;vertical-align:top;">
                <span style="font-size:13px;color:#2d2d2d;">${val}</span>
              </td>
            </tr>`;
                })
                .join("");

            return `
        <div style="margin-bottom:28px;">
          <div style="background:linear-gradient(to right,#7a5a1d,#d1a94c);height:3px;border-radius:3px;margin-bottom:0;"></div>
          <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:0 0 8px 8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
            <thead>
              <tr>
                <th colspan="2" style="padding:12px 14px;background:#fdf9f3;text-align:left;font-size:13px;font-weight:700;color:#b98b2f;letter-spacing:0.04em;border-bottom:1px solid #f0ede8;">
                  ${section.title}
                </th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>`;
        })
        .join("");

    return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f1ec;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:640px;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#7a5a1d,#d1a94c);border-radius:12px 12px 0 0;padding:28px 32px;text-align:center;">
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.75);">New Submission</p>
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#fff;">${payload.title}</h1>
          <p style="margin:8px 0 0;font-size:12px;color:rgba(255,255,255,0.65);">
            Received ${new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            at ${new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#f4f1ec;padding:24px 0;">
          ${sectionBlocks}
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#fff;border-radius:0 0 12px 12px;padding:20px 32px;text-align:center;border-top:1px solid #f0ede8;">
          <p style="margin:0;font-size:11px;color:#aaa;">
            This email was sent automatically by the Autisync questionnaire system.<br>
            Reply directly to the client's email address provided in the Contact section.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildText(payload: Payload): string {
    const lines: string[] = [`NEW QUESTIONNAIRE SUBMISSION\n${"=".repeat(40)}`, `Form: ${payload.title}`, `Date: ${new Date().toISOString()}\n`];
    payload.sections.forEach((section) => {
        lines.push(`\n── ${section.title.toUpperCase()} ──`);
        section.fields.forEach((field) => {
            lines.push(`${field.label}: ${formatValue(payload.answers[field.id])}`);
        });
    });
    return lines.join("\n");
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
    let payload: Payload;

    try {
        payload = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    if (!payload.title || !payload.sections || !payload.answers) {
        return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Derive a reply-to from the contact_email field if present
    const replyTo = typeof payload.answers["contact_email"] === "string"
        ? payload.answers["contact_email"]
        : undefined;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Autisync Questionnaires" <${process.env.SMTP_USER}>`,
            to: "info@autisync.com",
            ...(replyTo ? { replyTo } : {}),
            subject: `📋 New submission: ${payload.title}`,
            text: buildText(payload),
            html: buildHtml(payload),
        });

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (err) {
        console.error("[questionnaire] sendMail error:", err);
        return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
    }
}