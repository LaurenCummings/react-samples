import '../css/TreeMenu.css';

function MenuItem({item}) {
    return (
        <li>
            <p>{item.label}</p>
        </li>
    )
}

export default MenuItem;