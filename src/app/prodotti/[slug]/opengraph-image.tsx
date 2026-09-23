import { ImageResponse } from "next/og";
import { getProductBySlug, products } from "@/lib/products";

export const alt = "Adekro - Prodotto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const name = product?.name ?? "Adekro";
  const category = product?.category ?? "Software su misura per PMI";

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
        <div
          style={{
            color: "#7dd3c7",
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Adekro / {category}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 30,
          }}
        >
          {name}
        </div>
        <div style={{ color: "#d9e2ec", display: "flex", fontSize: 32, marginTop: 32 }}>
          Un gestionale pensato per il tuo modo di lavorare.
        </div>
      </div>
    ),
    size,
  );
}
