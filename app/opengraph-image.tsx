import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ClinX Academy — The Executive Accelerator for Clinicians";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#1C2331",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
        }}
      >
        {/* Big headline */}
        <div
          style={{
            color: "#F5F3EF",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 40,
            fontFamily: "serif",
          }}
        >
          ClinX Academy
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#C45C3E",
            fontSize: 36,
            fontWeight: 400,
            fontFamily: "sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          From the Exam Room to the Boardroom
        </div>
      </div>
    ),
    { ...size }
  );
}
