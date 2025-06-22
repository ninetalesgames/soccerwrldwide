import { useLocation } from 'react-router-dom';
import posts from '../data/posts.json';
import Navbar from '../components/Navbar';
import type { CSSProperties } from 'react';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';

  const results = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.content.some(p => p.toLowerCase().includes(query))
  );

  return (
    <>
      <Navbar />
      <div style={styles.background} />
      <div style={styles.container}>
        <h1 style={styles.title}>Search results for “{query}”</h1>
        {results.map(post => (
          <a key={post.id} href={`/post/${post.id}`} style={styles.card}>
            <img src={post.image} alt={post.title} style={styles.image} />
            <div style={styles.text}>
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.snippet}>{post.content[0]}</p>
            </div>
          </a>
        ))}
        {results.length === 0 && <p>No articles found.</p>}
      </div>
    </>
  );
}

const styles: { [key: string]: CSSProperties } = {
  background: {
    backgroundImage: "url('/background2.png')",
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    opacity: 0.15,
    zIndex: -1
  },
  container: {
    maxWidth: '1000px',
    margin: '32px auto',
    padding: '20px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '12px',
    fontFamily: 'Georgia, serif'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem'
  },
  card: {
    display: 'flex',
    gap: '20px',
    textDecoration: 'none',
    color: 'inherit',
    marginBottom: '24px',
    alignItems: 'flex-start'
  },
  image: {
    width: '160px',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '8px',
    flexShrink: 0
  },
  text: {
    flex: 1
  },
  postTitle: {
    fontSize: '1.5rem',
    marginBottom: '8px'
  },
  snippet: {
    fontSize: '1rem',
    lineHeight: 1.5
  }
};

export default SearchResults;
