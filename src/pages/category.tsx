import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts.json';
import Navbar from '../components/Navbar';
import type { CSSProperties } from 'react';

function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
if (!categoryId) return null;

const filteredPosts = posts.filter(p =>
  Array.isArray(p.category)
    ? p.category.includes(categoryId)
    : p.category === categoryId
);


  return (
    <>
      <Navbar />
      <div style={styles.background} />
      <div style={styles.container}>
        <h1 style={styles.title}>
          {categoryId?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
        </h1>
        {filteredPosts.map(post => (
          <article key={post.id} style={styles.post}>
            <Link to={`/post/${post.id}`} style={styles.link}>
              <div style={styles.layout}>
                <img src={post.image} alt={post.title} style={styles.image} />
                <div style={styles.textArea}>
                  <h2 style={styles.postTitle}>{post.title}</h2>
                  <p style={styles.excerpt}>{post.content[0]}</p>
                  <p style={styles.readMore}><strong>Read more →</strong></p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

const styles: { [key: string]: CSSProperties } = {
  background: {
    backgroundImage: "url('/background2.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    opacity: 0.15,
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
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
  post: {
    marginBottom: '2rem'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  layout: {
    display: 'flex',
    gap: '24px',
    alignItems: 'stretch',
    minHeight: 350
  },
  image: {
    width: 350,
    height: 350,
    objectFit: 'cover' as const,
    borderRadius: 8,
    flexShrink: 0
  },
  textArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between'
  },
  postTitle: {
    fontSize: '1.75rem',
    marginBottom: '0.5rem'
  },
  excerpt: {
    fontSize: '1.1rem',
    lineHeight: 1.5,
    marginBottom: '1rem',
    display: '-webkit-box',
    WebkitLineClamp: 6,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  readMore: {
    color: '#000'
  }
};

export default Category;
