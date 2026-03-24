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
          fontFamily: "serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            color: "#C45C3E",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 24,
            fontFamily: "sans-serif",
          }}
        >
          ClinX Academy
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#F5F3EF",
            fontSize: 64,
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: 32,
            maxWidth: 900,
          }}
        >
          From the Exam Room to the Boardroom
        </div>

        {/* Subtext */}
        <div
          style={{
            color: "#EBE8E2",
            fontSize: 26,
            opacity: 0.7,
            maxWidth: 780,
            fontFamily: "sans-serif",
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          The business of healthcare — taught by clinicians, for clinicians.
        </div>

        {/* Bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 100,
            right: 100,
            height: 1,
            background: "rgba(235,232,226,0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 100,
            color: "#EBE8E2",
            opacity: 0.4,
            fontSize: 16,
            fontFamily: "sans-serif",
          }}
        >
          clinxacademy.com
        </div>
      </div>
    ),
    { ...size }
  );
}
