import '../css/TreeMenu.css';

function MenuList({list = []}) {
    return (
        <div className="menu-list">
            {
                list && list.length ?
                list.map(listItem => <MenuItem item={listItem} />)
                : null
            }

        </div>
    )
}

export default MenuList;