import '../css/FeatureFlag.css';
import { useContext } from 'react';
import Accordian from './Accordian';
import LightDarkMode from './LightDarkMode';
import TicTacToe from './TicTacToe';
import ColorGenerator from './ColorGenerator';
import TreeMenu from './TreeMenu';

function FeatureFlag() {

    const {loading, enabledFlags} = useContext(FeatureFlagContext)

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

    if (loading) return <h1>Loading data ! Please wait</h1>

    return (
        <div>
            <h1>Feature Flags</h1>
        </div>
    )
}

export default FeatureFlag;