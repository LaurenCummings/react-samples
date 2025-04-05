import '../css/TreeMenu.css';
import MenuItem from '../components/MenuItem';

function MenuList({list = []}) {
    return (
        <ul className="menu-list">
            {
                list && list.length 
                    ? list.map((listItem) => <MenuItem item={listItem} />)
                    : null
            }

        </ul>
    )
}

export default MenuList;