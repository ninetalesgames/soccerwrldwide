import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts.json';
import Navbar from '../components/Navbar';
import type { CSSProperties } from 'react';

function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <p>Post not found.</p>;

  return (
    <>
      <Navbar />
      <div style={styles.background} />

      <div className="post-page" style={styles.page}>
<a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} style={styles.backLink}>
  ← Go Back
</a>
        <h1 style={styles.title}>{post.title}</h1>
        <p style={styles.date}><em>{post.date}</em></p>

        <div style={styles.contentWithImage}>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              style={styles.floatedImage}
            />
          )}

          {post.content.map((block, i) => {
            if (block.startsWith('/') && block.endsWith('.png')) {
              return <img key={i} src={block} alt="Post visual" style={styles.inlineImage} />;
            }

            const emojiRegex = /^[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u;

            if (
              emojiRegex.test(block) ||
              block.startsWith('Post-Match Thoughts') ||
              block.startsWith('Opinion Pieces') ||
              block.startsWith('Transfers')
            ) {
              return <p key={i} style={styles.subheading}><strong>{block}</strong></p>;
            }

            return <p key={i} style={styles.paragraph}>{block}</p>;
          })}
        </div>
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
  page: {
    maxWidth: '800px',
    margin: '32px auto',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '12px',
    padding: '2rem',
    fontFamily: 'Georgia, serif',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)'
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '1rem',
    color: '#0077cc',
    textDecoration: 'none',
    fontSize: '0.95rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  date: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '1.5rem'
  },
  contentWithImage: {
    display: 'block',
    overflow: 'hidden'
  },
  floatedImage: {
    width: '400px',
    height: '400px',
    objectFit: 'cover' as const,
    float: 'right' as const,
    marginLeft: '20px',
    marginBottom: '20px',
    borderRadius: '8px'
  },
  inlineImage: {
    width: '100%',
    borderRadius: '8px',
    margin: '1.5rem 0'
  },
  subheading: {
    fontSize: '1.2rem',
    marginTop: '2rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#333'
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '1.25rem',
    textAlign: 'justify' as const
  }
};

export default Post;
