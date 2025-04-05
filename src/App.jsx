import './css/App.css';
import Accordian from './components/Accordian';
import ColorGenerator from './components/ColorGenerator';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import LoadMoreData from './components/LoadMoreData';
import TreeMenu from './components/TreeMenu';
import menus from './data/TreeMenu.js';

function App() {

  return (
    <div>
      <TreeMenu menus={menus} />
    </div>
  )
}

export default App
