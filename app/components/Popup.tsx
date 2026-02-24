"use client";

type Props = {
  onClose: () => void;
};

export default function Popup({ onClose }: Props) {
  return (
    <div style={overlay}>
      <div style={modal}>
        <h2>Dynamic Popup </h2>
        <p>This component was loaded only when you clicked the button.</p>

        <button style={btn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal: React.CSSProperties = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  width: "320px",
  textAlign: "center",
};

const btn: React.CSSProperties = {
  marginTop: "15px",
  padding: "8px 16px",
  background: "black",
  color: "white",
  borderRadius: "8px",
};