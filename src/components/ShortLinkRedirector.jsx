import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Toast from "./Toast";

const BITZIPP_API = "https://bitzipp.sumitksr.xyz/api/url";
const BITZIPP_BASE = "https://bitzipp.sumitksr.xyz";

const ShortLinkRedirector = () => {
  const { key } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading"); // "loading" | "not_found" | "error"

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      try {
        const res = await fetch(`${BITZIPP_API}/${key}`);

        if (cancelled) return;

        if (res.ok) {
          // Key exists → parse the JSON to get the actual destination URL
          const data = await res.json();
          const destination = data?.url || `${BITZIPP_BASE}/${key}`;
          window.location.href = destination;
        } else {
          // Key doesn't exist → save toast in sessionStorage then navigate home
          // (component will unmount on navigate, so state won't survive)
          if (!cancelled) {
            sessionStorage.setItem("bitzipp_toast", `"/${key}" doesn't exist`);
            navigate("/", { replace: true });
          }
        }
      } catch (err) {
        if (cancelled) return;
        // Network / CORS error
        sessionStorage.setItem(
          "bitzipp_toast",
          `Could not resolve "/${key}" — please try again later`
        );
        navigate("/", { replace: true });
      }
    };

    check();
    return () => {
      cancelled = true;
    };
  }, [key, navigate]);

  return (
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
      {/* Spinner */}
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
  );
};

export default ShortLinkRedirector;
