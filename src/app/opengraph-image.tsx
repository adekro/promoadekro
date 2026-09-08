import { ImageResponse } from "next/og";

export const alt = "Adekro - Software su misura e gestionali per PMI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#102a43",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ color: "#7dd3c7", display: "flex", fontSize: 38, fontWeight: 700 }}>ADEKRO</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1, marginTop: 30 }}>
          Software su misura per PMI
        </div>
        <div style={{ color: "#d9e2ec", display: "flex", fontSize: 34, marginTop: 32 }}>
          Gestionali, web app, automazioni e integrazioni API
        </div>
      </div>
    ),
    size,
  );
}
