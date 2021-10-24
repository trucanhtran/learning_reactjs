import logo from './logo.svg';
import './App.css';

const PostItem = (props) => {
  return (
    <div className="post-item">
      <img src = {props.img}
      alt = "2 cách làm pizza hải sản phô mai bằng lò nướng và nồi chiên không dầu"
      />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default PostItem;
