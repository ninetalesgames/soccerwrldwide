import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import posts from '../data/posts.json';
import type { CSSProperties } from 'react';

function Searchbar() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const results = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.content.some(p => p.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 5);

  return (
    <div
      style={styles.container}
      onFocus={() => setFocused(true)}
      onBlur={() => setTimeout(() => setFocused(false), 150)}
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            navigate(`/search?q=${encodeURIComponent(query)}`);
          }
        }}
        style={styles.input}
      />
      {focused && query && results.length > 0 && (
        <ul style={styles.dropdown}>
          {results.map(post => (
            <li key={post.id} style={styles.resultItem}>
              <a
                href={`/post/${post.id}`}
                style={styles.item}
                onMouseDown={() => navigate(`/post/${post.id}`)}
              >
                <img src={post.image} alt={post.title} style={styles.thumb} />
                <span>{post.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: 'relative'
  },
  input: {
    padding: '6px 10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200px'
  },
  dropdown: {
    position: 'absolute',
    top: '110%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    listStyle: 'none',
    padding: '8px 0',
    margin: 0,
    zIndex: 1000
  },
  resultItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '14px',
    width: '100%'
  },
  thumb: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginRight: '12px',
    flexShrink: 0
  }
};

export default Searchbar;
