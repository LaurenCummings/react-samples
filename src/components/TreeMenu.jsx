import '../css/TreeMenu.css';
import MenuList from '../components/MenuList';

function TreeMenu({menus = []}) {
    return (
        <div className="tree-menu">
            <MenuList list={menus} />
        </div>
    )
}

export default TreeMenu;