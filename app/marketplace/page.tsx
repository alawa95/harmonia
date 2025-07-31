export default function Marketplace() {
  return (
    <div style={{ textAlign: 'center', padding: '80px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#4F46E5' }}>🛍️ Marketplace</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px' }}>
        Bientôt disponible : instruments, plugins et samples pour musiciens pros.
      </p>
      <a href="/" style={{
        display: 'inline-block',
        background: '#4F46E5',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        textDecoration: 'none'
      }}>
        ← Retour à l'accueil
      </a>
    </div>
  );
}