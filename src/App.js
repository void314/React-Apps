import React, { useState } from 'react';
import './App.scss';
import Modal from './components/ui/Modal';

function App() {

  const [modal, showModal] = useState(false)

  return (
    <div className="App">
      <button onClick={() => showModal(true)} className="modal-btn">Открыть</button>

      <Modal open={modal} showModal={showModal}>
        <h1>Text modal</h1>
      </Modal>

    </div>
  );
}

export default App;