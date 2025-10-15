// components/Card.js
import React from "react";

const Card = ({ icon, title, desc }) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="logo">
          <span className="circle circle5">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="svg"
            >
            <text
                x="15"
                y="20"
                fill="white"
                fontSize="38"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
            >
                A
            </text>
            </svg>
          </span>
        </div>

        <div className="glass"></div>

        <div className="content">
          <span className="title">
            <i className={`${icon} mr-2`}></i>
            {title}
          </span>
          <span className="text">{desc}</span>
        </div>

        <div className="bottom">
          <div className="social-buttons-container">
            {/* <button className="social-button social-button1">
              <i className="fab fa-instagram"></i>
            </button>
            <button className="social-button social-button2">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="social-button social-button3">
              <i className="fab fa-facebook-f"></i>
            </button> */}
          </div>
          {/* <div className="view-more">
            <button className="view-more-button">View more</button>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
