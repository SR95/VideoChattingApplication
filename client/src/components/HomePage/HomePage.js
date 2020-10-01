import React, { useState } from "react";
import "./HomePage.css";
import feelingTokativeImg from "../../assets/FeelingTokative.jpg";

export default function HomePage() {
  return (
    <div className="main-container">
      <div className="text-container">
        <h1 className="text-title">
          Feeling{" "}
          <text className="tok-text" style={{ fontSize: "3.5rem" }}>
            Tok
          </text>
          ative?
        </h1>
        <p className="text-subtitle">You'll get no complaints from us!</p>
        <p className="text-body">
          <text className="sign-up-hyperlink">Sign Up</text> now, and start{" "}
          <text className="tok-text">Tok</text>ing today.
        </p>
      </div>
      <div className="image-container">
        <img
          alt="woman-chatting"
          style={{ width: "80%", height: "65%", opacity: 0.75 }}
          src={feelingTokativeImg}
        />
      </div>
    </div>
  );
}
