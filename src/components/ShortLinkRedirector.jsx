import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Toast from "./Toast";

const BITZIPP_API = "https://bitzipp.sumitksr.xyz/api/get";
const BITZIPP_BASE = "https://bitzipp.sumitksr.xyz";

const ShortLinkRedirector = () => {
  const { key } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading"); // "loading" | "not_found" | "error"
  const [toast, setToast] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      try {
        const res = await fetch(`${BITZIPP_API}/${key}`);

        if (cancelled) return;

        if (res.ok) {
          // Key exists → redirect to bitzipp.sumitksr.xyz/<key>
          window.location.href = `${BITZIPP_BASE}/${key}`;
        } else {
          // Key doesn't exist → go back to home and show toast
          setStatus("not_found");
          navigate("/", { replace: true });
          setToast(`"/${key}" doesn't exist on bitzipp`);
        }
      } catch (err) {
        if (cancelled) return;
        // Network / CORS error — treat as not found and show error toast
        setStatus("error");
        navigate("/", { replace: true });
        setToast(`Could not resolve "/${key}" — please try again later`);
      }
    };

    check();
    return () => {
      cancelled = true;
    };
  }, [key, navigate]);

  return (
    <>
      {/* Full-screen loading overlay while resolving */}
      {status === "loading" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#04020f",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9000,
            gap: "24px",
          }}
        >
          {/* Animated logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "3px solid rgba(124,58,237,0.2)",
              borderTop: "3px solid #7c3aed",
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              color: "#a89fd8",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            Resolving{" "}
            <span style={{ color: "#d4af37", fontFamily: "monospace" }}>
              /{key}
            </span>
            …
          </motion.p>
        </div>
      )}

      {/* Toast notification rendered at root level */}
      {toast && (
        <Toast message={toast} onClose={() => setToast(null)} />
      )}
    </>
  );
};

export default ShortLinkRedirector;
