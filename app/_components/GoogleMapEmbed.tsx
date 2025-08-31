import React from "react";

type GoogleMapEmbedProps = {
  /** e.g., "Beerta Xamar, Mogadishu, Somalia" */
  query?: string;
  /** If you prefer coordinates, provide both lat and lng */
  lat?: number;
  lng?: number;
  /** 1–21; 15 is a good default for places */
  zoom?: number;
  /** Optional aria-label/title for accessibility */
  title?: string;
  /** Optional inline style override for the outer wrapper */
  style?: React.CSSProperties;
};

export default function GoogleMapEmbed({
  query,
  lat,
  lng,
  zoom = 15,
  title = "Location map",
  style,
}: GoogleMapEmbedProps) {
  // Build the embed URL (no API key required for basic embeds)
  let src: string | null = null;

  if (typeof lat === "number" && typeof lng === "number") {
    src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  } else if (query) {
    src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;
  }

  // Nice responsive container with 16:9 aspect ratio
  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%", // 16:9
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(0,0,0,.08)",
    ...style,
  };

  const iframeStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    border: 0,
  };

  if (!src) {
    return (
      <div style={wrapperStyle}>
        <div
          style={{
            ...iframeStyle,
            display: "grid",
            placeItems: "center",
            background: "#f6f7f9",
            color: "#667085",
            fontSize: 14,
          }}
        >
          Provide either a <b>query</b> or both <b>lat</b> and <b>lng</b>.
        </div>
      </div>
    );
  }

  return (
    <div style={wrapperStyle} aria-label={title}>
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={iframeStyle}
        allowFullScreen
      />
    </div>
  );
}
