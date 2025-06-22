import posts from '../data/posts.json';
import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';

function FeaturedPost() {
  const post = posts[0]; // first post

  return (
    <article style={styles.container}>
      <Link to={`/post/${post.id}`} style={styles.link}>
        <div style={styles.layout}>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              style={styles.image}
            />
          )}
          <div style={styles.textArea}>
            <h2 style={styles.title}>{post.title}</h2>
            <p style={styles.excerpt}>{post.content[0]}</p>
            <p style={styles.readMore}><strong>Read more →</strong></p>
          </div>
        </div>
      </Link>
    </article>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
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
  title: {
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


export default FeaturedPost;
