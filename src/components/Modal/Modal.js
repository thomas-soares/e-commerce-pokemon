import { useState } from 'react';

import './style.css';

function Modal() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="Modal">
            <p>Obrigado!!!</p>
            <p>Você ganhou de volta</p>
            <p>$ xxxx,xx</p>
            
            
            <button onClick={() => setModalOpen(false)}>
                Remover modal
            </button>
        </div>
    );
}

export default Modal;