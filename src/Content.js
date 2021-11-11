import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

const Content = () => {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      })
  },[])

  return (
    <div className="Content">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
