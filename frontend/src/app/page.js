export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>RCIC Practice OS</h1>
      <p>Frontend is running.</p>
      <p>
        Health check proxy: <a href="/api/health/">/api/health/</a>
      </p>
    </main>
  );
}
