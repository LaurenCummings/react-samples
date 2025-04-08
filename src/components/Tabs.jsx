import { useState } from 'react';

function Tabs({tabsContent, onChange}) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return(
        <div className="tabs-wrapper">
            <div className="tabs-heading">
                {
                    tabsContent.map((tabItem) => {
                        <div key={tabItem.label}>
                            <span className="label">{tabItem.label}</span>
                        </div>
                    })
                }
            </div>
            <div className="tabs-content">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}

export default Tabs;