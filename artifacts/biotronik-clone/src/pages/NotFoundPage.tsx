import { Link } from "wouter";

export default function NotFoundPage() {
  return (
    <main style={{ paddingTop: "72px", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "80px", fontWeight: "700", color: "#d73604", marginBottom: "0", lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: "28px", fontWeight: "300", color: "#00234c", margin: "16px 0 24px" }}>Page Not Found</h2>
        <div style={{ width: "40px", height: "3px", background: "#d73604", margin: "0 auto 24px" }} />
        <p style={{ fontSize: "16px", color: "#596a76", maxWidth: "480px", margin: "0 auto 40px", lineHeight: "1.7" }}>
          The page you are looking for may have been moved or no longer exists. Please use the navigation to find what you are looking for.
        </p>
        <Link href="/en-us" style={{
          display: "inline-block", background: "#00234c", color: "#fff",
          padding: "14px 36px", fontSize: "14px", fontWeight: "600", textTransform: "uppercase"
        }}>Back to Home</Link>
      </div>
    </main>
  );
}
