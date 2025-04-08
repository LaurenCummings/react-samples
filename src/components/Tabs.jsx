import { useState } from 'react';

function Tabs({tabsContent}) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(currentIndex) {
        setCurrentTabIndex(currentIndex);
        onChange(currentIndex);
    }

    return(
        <div className="tabs-wrapper">
            <div className="tabs-heading">
                {
                    tabsContent.map((tabItem, index) => (
                        <div 
                            className={`tab-item ${currentTabIndex === index ? 'active' : ''}`} 
                            onClick={() => handleOnClick(index)} 
                            key={tabItem.label}
                        >
                            <span className="label">{tabItem.label}</span>
                        </div>
                    ))
                }
            </div>
            <div className="tabs-content">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}

export default Tabs;