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
import TabTest from './components/TabTest.jsx';
import ModalTest from './components/ModalTest.jsx';
import GithubProfileFinder from './components/GithubProfileFinder.jsx';
import SearchAutocomplete from './components/SearchAutocomplete.jsx';
import TicTacToe from './components/TicTacToe.jsx';
import FeatureFlag from './components/FeatureFlag';
import FeatureFlagGlobalState from './contexts/FeatureFlagContext.jsx';
import UseFetchTest from './components/UseFetchTest.jsx';
import UseOutsideClickTest from './components/UseOutsideClickTest.jsx';
import UseWindowResizeTest from './components/UseWindowResizeTest.jsx';

function App() {

  return (
    <div>
      <UseWindowResizeTest />
    </div>
  )
}

export default App
