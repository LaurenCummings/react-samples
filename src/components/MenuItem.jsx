import '../css/TreeMenu.css';
import MenuList from '../components/MenuList';
import { useState } from 'react';

function MenuItem({item}) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(currentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [currentLabel] : !displayCurrentChildren[currentLabel],
        })
    }

    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length
                        ? <span onClick={() => handleToggleChildren(item.label)}>+</span>
                        : null
                }
            </div>

            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]
                    ? <MenuList list={item.children} />
                    : null
            }
        </li>
    )
}

export default MenuItem;