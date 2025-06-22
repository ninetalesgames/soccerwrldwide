import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import FeaturedPost from '../components/FeaturedPost';
import SidebarPostList from '../components/SidebarPostList';

function HomeLayout() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="home-layout">
        <section className="featured-area">
          <FeaturedPost />
        </section>
        <aside className="sidebar-area">
          <SidebarPostList />
        </aside>
      </main>
    </>
  );
}

const css = `
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  background-image: url('/background1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: Georgia, serif;
}

.home-layout {
  display: flex;
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 16px;
  gap: 24px;
}

/* This will affect both left and right panels */
.featured-area, .sidebar-area {
  background-color: rgba(255, 255, 255, 0.7); /* 85% white */
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0,0,0,0.05);
}

.featured-area {
  flex: 2;
}

.sidebar-area {
  flex: 1;
}
`;



export default HomeLayout;
