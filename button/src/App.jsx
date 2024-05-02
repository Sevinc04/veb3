import { useEffect, useState } from 'react'
import './App.css'
import CustomButton from './CustomButton'


function App() {
  let [text, setText] = useState('SHOW MODAL')
  let [warnMessage, setWarnMessage] = useState('THIS IS WARN MESSAGE')
  let [hint, setHint] = useState('THIS BUTTON SHOW MODAL')
  let [modalActive, setModalActive] = useState(false)

  return (
    <div className='containerr'>
      <button 

      className={`${modalActive && 'button-clicked'}`} 
      onClick={() => setModalActive(!modalActive)}>
        {text}
        <p>{hint}</p>
      </button>

      {modalActive && <CustomButton warnMessage={warnMessage} />}
    </div>
  )
}

export default App