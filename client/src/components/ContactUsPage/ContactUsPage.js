import React, { useState } from "react";
import "./ContactUsPage.css";

export default function AboutPage() {
  return (
    <div className="main-container">
      <div className="text-container">
        <h1 className="text-title">
          This is the{" "}
          <text className="tok-text" style={{ fontSize: "3.5rem" }}>
            Contact Us
          </text>{" "}
          Page
        </h1>
        <p className="text-subtitle">
          Unfortunately, it's still a work in progress.
        </p>
        <p style={{ marginTop: "3rem" }} className="text-body">
          So, please come back later for the full experience!
        </p>
      </div>
    </div>
  );
}
