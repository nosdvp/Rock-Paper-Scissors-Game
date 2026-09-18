import { useState } from 'react';
import './App.css';
import rules from './img/image-rules.svg'

function App() {

  const [openModalRules, setOpenModalRules] = useState(false)
  const [menu, setMenu] = useState(false)

  return (
    <div className='wrapper'>

      {menu === true ? (
        <>
          <div className='wrapper__headerMenu'>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>
        </>
      ) : (
        <>
          <div className='wrapper__headerGame'>
            <div className='wrapper__headerGame_title'>
              <p>ROCK</p>
              <p>PAPER</p>
              <p>SCISSORS</p>
            </div>
            <div className='wrapper__headerGame_score'>
              <p>SCORE</p>
              <p>12</p>
            </div>
          </div>
        </>
      )}


      <button className='wrapper__rules' onClick={() => setOpenModalRules(true)}>RULES</button>

      {openModalRules === true && (
        <div className='wrapper__modal'>
          <div className='wrapper__modal_rulesBlock'>
            <div className='wrapper__modal_rulesBlock_titleBlock'>
              <p className='wrapper__modal_rulesBlock_titleBlock_title'>RULES</p>
              <p className='wrapper__modal_rulesBlock_titleBlock_close' onClick={() => setOpenModalRules(false)}>X</p>
            </div>

            <div className='wrapper__modal_rulesBlock_rulesBox'>
              <img src={rules}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
