"use client";

import { useState } from "react";
import dynamic from "next/dynamic";


const Popup = dynamic(() => import("./Popup"), {
  ssr: false,
});

export default function PopupButton() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 18px",
          background: "purple",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Open Popup
      </button>

      {open && <Popup onClose={() => setOpen(false)} />}
    </div>
  );
}