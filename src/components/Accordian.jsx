import '../css/Accordian.css';
import { useState } from 'react';
import data from '../data/Accordian';

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);
    }

    function handleMultiSelection(currentId) {
        let multipleCopy = [...multiple];
        const findIndexOfCurrentId = multipleCopy.indexOf(currentId);

        if(findIndexOfCurrentId === -1) multipleCopy.push(currentId);
        else multipleCopy.splice(findIndexOfCurrentId, 1);

        setMultiple(multipleCopy);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                Enable Multi Selection
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                        data.map(dataItem => 
                            <div key={dataItem.id} className="item">
                                <div 
                                    onClick={
                                        enableMultiSelection 
                                            ? () => handleMultiSelection(dataItem.id) 
                                            : () => handleSingleSelection(dataItem.id)
                                    } 
                                    className="title"
                                >
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {enableMultiSelection 
                                    ? multiple.indexOf(dataItem.id) !== -1 &&
                                        <div className="content">{dataItem.answer}</div> 
                                    : selected === dataItem.id && 
                                        <div className="content">{dataItem.answer}</div>
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