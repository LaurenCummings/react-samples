function Modal({ id, header, body, footer, onClose }) {
    return (
        <div id={id || 'Modal'} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={onClose} className="close-modal-icon">&times;</span>
                    <h2>{header ? header : 'Header'}</h2>
                </div>
                <div className="modal-body">
                    {body ? (body) : (
                        <div>
                            <p>This is our Modal Body</p>
                        </div>
                    )}
                </div>
                <div className="modal-footer">
                    <h2>{footer ? footer : 'Footer'}</h2>
                </div>
            </div>
        </div>
    )
}

export default Modal;