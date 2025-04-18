import '../css/Tabs.css';
import Tabs from './Tabs';

function RandomComponent() {
    return (
        <h1>Some random content</h1>
    )
}

function TabTest() {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for Tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is content for Tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        },
    ]

    return (
        <Tabs tabsContent={tabs} />
    )
}

export default TabTest;