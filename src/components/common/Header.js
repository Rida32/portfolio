import React from "react";

const Header = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-4 py-2"
      style={{
        backgroundColor: "#0f172a",
        borderBottom: "1px solid #1e1e1e",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      
      <div
        className="d-flex align-items-center px-3 py-1"
        style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: "40px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 8px rgba(204, 112, 255, 0.4)",
          gap: "20px",
        }}
      >
        {["Home", "Work", "Service", "Projects", "Blog"].map((item) => (
          <span
            key={item}
            style={{
              color: "#ccc",
              fontWeight: "500",
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
            className="px-1"
          >
            {item}
          </span>
        ))}

        {/* Gradient Button */}
        <a
          href="#"
          style={{
            background: "linear-gradient(to right, #a855f7, #ec4899)",
            padding: "6px 16px",
            color: "#fff",
            fontWeight: "500",
            fontSize: "0.95rem",
            borderRadius: "20px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          Request a{" "}
          <span role="img" aria-label="call">
            📞
          </span>
        </a>
      </div>

      {/* Ctrl+K Shortcut Box */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "4px 10px",
          borderRadius: "6px",
          color: "#ccc",
          fontSize: "0.85rem",
        }}
      >
        ctrl+k
      </div>
    </div>
  );
};

export default Header;
