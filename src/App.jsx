import './css/App.css';
import Accordian from './components/Accordian';
import ColorGenerator from './components/ColorGenerator';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import LoadMoreData from './components/LoadMoreData';
import TreeMenu from './components/TreeMenu';
import menus from './data/TreeMenu.js';
import QRCodeGenerator from './components/QRCodeGenerator.jsx';
import LightDarkMode from './components/LightDarkMode.jsx';
import ScrollIndicator from './components/ScrollIndicator.jsx';

function App() {

  return (
    <div>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1} />
    </div>
  )
}

export default App
