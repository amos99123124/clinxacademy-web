import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ClinX Academy — Unlock Your Non-Clinical Career";
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
        {/* Company name */}
        <div
          style={{
            color: "#F5F3EF",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 24,
            fontFamily: "serif",
          }}
        >
          ClinX Academy
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#F5F3EF",
            fontSize: 48,
            fontWeight: 400,
            fontFamily: "sans-serif",
            marginBottom: 24,
          }}
        >
          Unlock Your Non-Clinical Career
        </div>

        {/* Domain */}
        <div
          style={{
            color: "#C45C3E",
            fontSize: 32,
            fontWeight: 600,
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
