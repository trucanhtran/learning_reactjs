import logo from './logo.svg';
import './App.css';
import PostItem from './PostItem';

const App = () => {
  return (
    <div id="wrapper">
      <PostItem
        title="2 cách làm pizza hải sản phô mai bằng lò nướng và nồi chiên không dầu"
        img = "https://cdn.tgdd.vn/2020/09/CookProduct/1200bzhspm-1200x676.jpg"
        description="Pizza hải sản phô mai là sự kết hợp hài hoà giữa vị tươi ngon của hải sản và vị thơm béo từ phô mai tạo nên vị ngon khó cưỡng, chắc chắn sẽ khiến bạn thích mê.
        Cùng vào bếp với Điện máy XANH và xem ngay 2 cách làm món nướng đơn giản này nhé!"
      />
      <PostItem
        title="Đậu hũ (đậu phụ) chiên"
        img = "https://cdn.tgdd.vn/2021/06/CookRecipe/Avatar/dau-hu-chien-bot-bang-noi-chien-khong-dau-thumbnail.jpg"
        description="Đậu hũ chiên nổi bật với hương vị mềm mại bên trong, bên ngoài vàng giòn, ăn vào lạ miệng bùi bùi, béo béo.
        Chiếc nồi chiên không dầu có thể giúp bạn thực hiện được những món đậu hũ chiên thơm ngon hơn, giòn hơn mà không sợ bị vỡ nát."
      />
    </div>
  )
}

export default App;
