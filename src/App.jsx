import './css/App.css';
import Accordian from './components/Accordian';
import ColorGenerator from './components/ColorGenerator';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';

function App() {

  return (
    <div>
      <ImageSlider 
        url={"https://picsum.photos/v2/list"} 
        page={"1"} 
        limit={"4"} 
      />
    </div>
  )
}

export default App
