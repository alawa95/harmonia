export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '80px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#4F46E5' }}>🎶 Harmonia</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Bienvenue sur la plateforme des musiciens professionnels.
      </p>
      <a href="/marketplace" style={{
        marginTop: '20px',
        display: 'inline-block',
        background: '#4F46E5',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        Voir la Marketplace
      </a>
    </div>
  );
}
// Update for Vercel redeploy - 31/07/2025