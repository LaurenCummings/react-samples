import '../css/TreeMenu.css';
import MenuList from '../components/MenuList';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function MenuItem({item}) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(currentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [currentLabel] : !displayCurrentChildren[currentLabel],
        })
    }

    return (
        <li className="menu-item">
            <div className="menu-item-label">
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length
                        ? <span onClick={() => handleToggleChildren(item.label)}>
                            {
                                displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />
                            }
                            </span>
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