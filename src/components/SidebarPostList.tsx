import posts from '../data/posts.json';
import { Link } from 'react-router-dom';

function SidebarPostList() {
  const recentPosts = posts.slice(1); // exclude first featured post

  return (
    <div className="sidebar-posts">
      <h3>Recent Posts</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {recentPosts.map((post) => (
          <li key={post.id} style={{ display: 'flex', marginBottom: '12px' }}>
            {post.image && (
             <img
  src={`${import.meta.env.BASE_URL}${post.image}`}
  alt={post.title}
  style={{
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    marginRight: '12px',
    borderRadius: '4px'
  }}
/>

            )}
            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: '#333' }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarPostList;
