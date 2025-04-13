import '../css/FeatureFlag.css';
import { useContext } from 'react';
import Accordian from './Accordian';
import LightDarkMode from './LightDarkMode';
import TicTacToe from './TicTacToe';
import ColorGenerator from './ColorGenerator';
import TreeMenu from './TreeMenu';
import menus from '../data/TreeMenu';
import { FeatureFlagContext } from '../contexts/FeatureFlagContext';

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
            component : <TreeMenu menus={menus} />
        },
    ]

    function checkEnabledFlags(currentKey) {
        return enabledFlags[currentKey];
    }

    if (loading) return <h1>Loading data ! Please wait</h1>

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map((componentItem) => 
                    checkEnabledFlags(componentItem.key) ? componentItem.component : null
                )
            }
        </div>
    )
}

export default FeatureFlag;