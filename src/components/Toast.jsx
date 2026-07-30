import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, onClose, duration = 4000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 400); // wait for exit animation
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.92 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            position: "fixed",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            background: "rgba(9, 5, 32, 0.96)",
            border: "1px solid rgba(239, 68, 68, 0.45)",
            borderRadius: "14px",
            padding: "14px 22px",
            boxShadow:
              "0 8px 40px rgba(239,68,68,0.18), 0 0 0 1px rgba(239,68,68,0.1), 0 2px 8px rgba(4,2,15,0.8)",
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            maxWidth: "420px",
            width: "calc(100vw - 48px)",
          }}
        >
          {/* Error icon */}
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239,68,68,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "14px" }}>✕</span>
          </div>

          <div style={{ flex: 1 }}>
            <p
              style={{
                color: "#f8fafc",
                fontSize: "14px",
                fontWeight: 600,
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Short link not found
            </p>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "12.5px",
                margin: "2px 0 0",
                lineHeight: 1.4,
              }}
            >
              {message}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={() => {
              setVisible(false);
              setTimeout(onClose, 400);
            }}
            style={{
              background: "none",
              border: "none",
              color: "#64748b",
              cursor: "pointer",
              padding: "4px",
              borderRadius: "6px",
              fontSize: "16px",
              lineHeight: 1,
              flexShrink: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#f8fafc")}
            onMouseLeave={(e) => (e.target.style.color = "#64748b")}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
