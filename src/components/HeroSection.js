import React from "react";

const HeroSection = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center bg-dark text-white"
      style={{ minHeight: "100vh", padding: "2rem" }}
    >
      <h2 className="text-warning mb-2" style={{ fontSize: "1.5rem" }}>
        Hey 👋 I'm
      </h2>
      <h1 className="fw-bold mb-2" style={{ fontSize: "3rem" }}>
       Rida Ayesha
      </h1>
      <p className="text-secondary m-0">A passionate</p>
      <p className="text-danger fw-bold fst-italic mb-3" style={{ fontSize: "1.5rem" }}>
        Frontend Developer
      </p>
      <p className="text-secondary mb-4" style={{ maxWidth: "600px" }}>
        specialized in building stunning pixel-perfect interactive websites/applications.
      </p>

      <div className="mb-4">
        <img
          src="https://i.imgur.com/3YQZlT2.jpg"
          alt="Profile"
          className="rounded"
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
            filter: "grayscale(100%)",
            border: "2px solid #555",
          }}
        />
      </div>

      <a
        href="#"
        className="btn btn-primary btn-lg d-flex align-items-center gap-2"
        style={{
          background: "linear-gradient(to right, #8b5cf6, #ec4899)",
          border: "none",
          borderRadius: "50px",
        }}
      >
        Resume ⭳
      </a>
    </div>
  );
};

export default HeroSection;
