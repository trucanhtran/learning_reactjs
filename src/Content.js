import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

const tabs = ['posts', 'comments', 'albums']

const Content = () => {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)
  console.log(type)

  useEffect(() => {
    console.log('title changed')
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      })
  },[type])

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY >= 200){
        setShowGoToTop(true)
      }
      else
      {
        setShowGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    console.log("Add event listener")

    //cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      console.log("remove event listener")
    }
  }, [])

  return (
    <div className="Content">
      {tabs.map(tab => (
        <button
          key={tab}
          style={type === tab? {
            color: '#fff',
            backgroundColor: '#333'

          } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title || post.name}
          </li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20
          }}
        >
          Go To Top
        </button>
      )}
    </div>
  );
}

export default Content;
