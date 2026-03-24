import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ClinX Academy — Business of Healthcare for Physicians, NPs & PAs";
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
            marginBottom: 28,
            fontFamily: "serif",
          }}
        >
          ClinX Academy
        </div>

        {/* Specific tagline */}
        <div
          style={{
            color: "#C45C3E",
            fontSize: 34,
            fontWeight: 400,
            fontFamily: "sans-serif",
            marginBottom: 20,
          }}
        >
          Business of Healthcare for Physicians, NPs &amp; PAs
        </div>

        {/* Domain */}
        <div
          style={{
            color: "#EBE8E2",
            fontSize: 24,
            opacity: 0.5,
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
