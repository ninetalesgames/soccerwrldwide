import Navbar from '../components/Navbar';
import rawAboutData from '../data/about.json';
import type { CSSProperties } from 'react';

type AboutChapter = {
  title: string;
  body: string;
  image?: string;
};

const aboutData: AboutChapter[] = rawAboutData;

function About() {
  return (
    <>
      <Navbar />
      <div style={styles.background} />
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>About Me</h1>
        {aboutData.map((chapter: AboutChapter, index: number) => (
          <section key={index} style={styles.chapter}>
            {chapter.image && (
              <img
                src={chapter.image}
                alt={chapter.title}
                style={styles.image}
              />
            )}
            <h2 style={styles.chapterTitle}>{chapter.title}</h2>
{chapter.body.split('\n\n').map((para, i) => (
  <p key={i} style={styles.paragraph}>{para}</p>
))}
          </section>
        ))}
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
    maxWidth: '800px',
    margin: '32px auto',
    padding: '2rem',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '12px',
    fontFamily: 'Georgia, serif',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)'
  },
  mainTitle: {
    fontSize: '2.5rem',
    marginBottom: '2rem'
  },
  chapter: {
    marginBottom: '3rem'
  },
  image: {
    width: '100%',
    maxHeight: '350px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem'
  },
  chapterTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem'
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: 1.7,
    textAlign: 'justify'
  }
};

export default About;
