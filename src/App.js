import reviewIcon from './review-icon.svg';
import './App.css';

function App() {
    const data = {
      img: reviewIcon,
      title: "Иван Иванов",
      time: "01/01/2021",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, magna felis vestibulum metus aptent velit, tempor posuere natoque habitasse phasellus "
    }
  return (
    <div className="review">
      <div className="reviewWrapper">
        <img src={reviewIcon} className="reviewImg" alt="logo" />
        <div className="reviewWrap">
        <h3 className="reviewSubtitle">{data.title} <time className="reviewTime">{data.time} </time></h3>
        <pre className="reviewText"> {data.text} </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
