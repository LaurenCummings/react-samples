import './css/App.css';
import Accordian from './components/Accordian';
import ColorGenerator from './components/ColorGenerator';
import StarRating from './components/StarRating';

function App() {

  return (
    <div>
      <StarRating numOfStars={10} />
    </div>
  )
}

export default App
