import '../css/FeatureFlag.css';
import Accordian from './Accordian';
import LightDarkMode from './LightDarkMode';
import TicTacToe from './TicTacToe';
import ColorGenerator from './ColorGenerator';
import TreeMenu from './TreeMenu';

function FeatureFlag() {

    const componentsToRender = [
        {
            key : 'showLightAndDarkMode',
            component : <LightDarkMode />
        },
        {
            key : 'showTicTacToeBoard',
            component : <TicTacToe />
        },
        {
            key : 'showRandomColorGenerator',
            component : <ColorGenerator />
        },
        {
            key : 'showAccordian',
            component : <Accordian />
        },
        {
            key : 'showTreeView',
            component : <TreeMenu />
        },
    ]

    return (
        <div>
            <h1>Feature Flags</h1>
        </div>
    )
}

export default FeatureFlag;