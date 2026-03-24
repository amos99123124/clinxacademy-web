"use client";
import { useRef, useState } from "react";

export default function KajabiForm({ src }: { src: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(320);

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{margin:0;padding:0}</style></head><body><script src="${src}"><\/script></body></html>`;

  const handleLoad = () => {
    const body = iframeRef.current?.contentDocument?.body;
    if (body && body.scrollHeight > 0) setHeight(body.scrollHeight + 24);
  };

  return (
    <iframe
      ref={iframeRef}
      srcDoc={html}
      onLoad={handleLoad}
      style={{ width: "100%", height: `${height}px`, border: "none", display: "block" }}
      scrolling="no"
    />
  );
}
