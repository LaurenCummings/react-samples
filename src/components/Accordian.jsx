import '../css/Accordian.css';
import { useState } from 'react';
import data from '../data/Accordian';

const Accordian = () => {
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);
    }

    return (
        <div className="wrapper">
            <button>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                        data.map(dataItem => 
                            <div key={dataItem.id} className="item">
                                <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id ?
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>
                                    : null
                                }
                            </div>
                        ) : 
                        <div>No data found</div>
                }
            </div>
        </div>
    )
}

export default Accordian;