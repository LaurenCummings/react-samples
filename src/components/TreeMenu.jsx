import '../css/TreeMenu.css';

function TreeMenu({menus = []}) {
    return (
        <div className="tree-menu">
            <MenuList list={menus} />
        </div>
    )
}

export default TreeMenu;