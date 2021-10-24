import logo from './logo.svg';
import './App.css';

const PostItem = ({img, title, description}) => {
  return (
    <div className="PostItem">
      <img src={img} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default PostItem;
