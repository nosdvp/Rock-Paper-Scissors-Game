import { useState } from 'react';
import './App.css';
import rules from './img/image-rules.svg'
import paper from './img/icon-paper.svg'
import scissors from './img/icon-scissors.svg'
import rock from './img/icon-rock.svg'

function App() {

  const [openModalRules, setOpenModalRules] = useState(false)
  const [menu, setMenu] = useState(true)
  const [mode, setMode] = useState('')
  const [count, setCount] = useState(0)
  const [userItem, setUserItem] = useState('')

  return (
    <div className='wrapper'>

      {menu === true ? (
        <>
          <div className='wrapper__headerMenu'>
            <p>ROCK</p>
            <p>PAPER</p>
            <p>SCISSORS</p>
          </div>

          <div className='wrapper__modeForPlay'>
            <button onClick={() => {
              setMode('standard')
              setMenu(false)
            }}>STANDARD MODE</button>
            <button onClick={() => {
              setMode('modern')
              setMenu(false)
            }}>MODERN MODE</button>
          </div>
        </>
      ) : menu === false && mode === 'standard' ? (
        <>
          <div className='wrapper__headerGameStandard'>
            <div className='wrapper__headerGameStandard_title'>
              <p>ROCK</p>
              <p>PAPER</p>
              <p>SCISSORS</p>
            </div>
            <div className='wrapper__headerGameStandard_score'>
              <p>SCORE</p>
              <p>{count}</p>
            </div>
          </div>

          <div className='wrapper__headerGameStandard_choiseBlock'>
            <button 
              className='wrapper__headerGameStandard_choiseBlock_firstItem' 
              onClick={() => setUserItem('paper')}
            >
              <img src={paper}/>
            </button>
            <button 
              className='wrapper__headerGameStandard_choiseBlock_secondItem' 
              onClick={() => setUserItem('scissors')}
              >
                <img src={scissors}/>
            </button>
            <button 
              className='wrapper__headerGameStandard_choiseBlock_thirdItem' 
              onClick={() => setUserItem('rock')}
            >
              <img src={rock}/>
            </button>
          </div>
        </>
      ) : menu === false && mode === 'modern' ? (
        <div className='wrapper__headerGameModern'>
            <div className='wrapper__headerGameModern_title'>
              <p>ROCK</p>
              <p>PAPER</p>
              <p>SCISSORS</p>
              <p>LIZARD</p>
              <p>SPOCK</p>
            </div>
            <div className='wrapper__headerGameModern_score'>
              <p>SCORE</p>
              <p>{count}</p>
            </div>
          </div>
      ) : null}


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
