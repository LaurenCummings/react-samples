import './css/App.css';
import Accordian from './components/Accordian';
import ColorGenerator from './components/ColorGenerator';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import LoadMoreData from './components/LoadMoreData';
import TreeMenu from './components/TreeMenu';
import menus from './data/TreeMenu.js';
import QRCodeGenerator from './components/QRCodeGenerator.jsx';

function App() {

  return (
    <div>
      <QRCodeGenerator />
    </div>
  )
}

export default App
