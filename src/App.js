import { use, useState } from 'react';
import './App.css';
import rules from './img/image-rules.svg'
import paper from './img/icon-paper.svg'
import scissors from './img/icon-scissors.svg'
import rock from './img/icon-rock.svg'

function App() {

  const [openModalRules, setOpenModalRules] = useState(false)
  const [menu, setMenu] = useState(true)
  const [mode, setMode] = useState('')
  const [userScore, setUserScore] = useState(0)
  const [ties, setTies] = useState(0)
  const [CPUScore, setCPUScore] = useState(0)
  const [userItem, setUserItem] = useState('')
  const [visibleUserItem, setVisibleUserItem] = useState('')
  const [IMG, setIMG] = useState()
  const [CPUItem, setCPUItem] = useState('')
  const [visibleCPUItem, setVisibleCPUItem] = useState()
  const [CPUImg, setCPUImg] = useState()

  const playGame = (userItem) => {
    setUserItem(userItem)

    if(userItem === 'paper'){
      setIMG(paper)
    }else if(userItem === 'scissors'){
      setIMG(scissors)
    }else if(userItem === 'rock'){
      setIMG(rock)
    }

    const userClasses = {
      paper: 'wrapper__headerGameStandard_blockResult_userItemBlock_userPaper',
      scissors: 'wrapper__headerGameStandard_blockResult_userItemBlock_userScissors',
      rock: 'wrapper__headerGameStandard_blockResult_userItemBlock_userRock'
    }

    const cpuClasses = {
      paper: 'wrapper__headerGameStandard_blockResult_CPUItemBlock_CPUPaper',
      scissors: 'wrapper__headerGameStandard_blockResult_CPUItemBlock_CPUScissors',
      rock: 'wrapper__headerGameStandard_blockResult_CPUItemBlock_CPURock'
    }

    setVisibleUserItem(userClasses[userItem])

    const itemForGame = ['paper', 'scissors', 'rock']
    const CPUChoiseItem = itemForGame[Math.floor(Math.random() * itemForGame.length)]
    setCPUItem(CPUChoiseItem)

    setVisibleCPUItem(cpuClasses[CPUChoiseItem])

    if(CPUChoiseItem === 'paper'){
      setCPUImg(paper)
    }else if(CPUChoiseItem === 'scissors'){
      setCPUImg(scissors)
    }else if(CPUChoiseItem === 'rock'){
      setCPUImg(rock)
    }

    if(userItem === 'paper' && CPUChoiseItem === 'rock'){
      setUserScore(prev => prev + 1)
    }else if(userItem === 'rock' && CPUChoiseItem === 'scissors'){
      setUserScore(prev => prev + 1)
    }else if(userItem === 'scissors' && CPUChoiseItem === 'paper'){
      setUserScore(prev => prev + 1)
    }else if(userItem === CPUChoiseItem){
      setTies(prev => prev + 1)
    }else if(userItem === 'paper' && CPUChoiseItem === 'scissors'){
      setCPUScore(prev => prev + 1)
    }else if(userItem === 'rock' && CPUChoiseItem === 'paper'){
      setCPUScore(prev => prev + 1)
    }else if(userItem === 'scissors' && CPUChoiseItem === 'rock'){
      setCPUScore(prev => prev + 1)
  }
}

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
              <p>You Win: {userScore}</p>
              <p>Ties: {ties}</p>
              <p>CPU Win: {CPUScore}</p>
            </div>
          </div>

          {userItem === '' ? (
            <div className='wrapper__headerGameStandard_choiseBlock'>
            <button 
              className='wrapper__headerGameStandard_choiseBlock_firstItem' 
              onClick={() => playGame('paper')}
            >
              <img src={paper}/>
            </button>
            <button 
              className='wrapper__headerGameStandard_choiseBlock_secondItem' 
              onClick={() => playGame('scissors')}
              >
                <img src={scissors}/>
            </button>
            <button 
              className='wrapper__headerGameStandard_choiseBlock_thirdItem' 
              onClick={() => playGame('rock')}
            >
              <img src={rock}/>
            </button>
          </div>
          ) : (
              <div className='wrapper__headerGameStandard_blockResult'>

                <div className='wrapper__headerGameStandard_blockResult_userItemBlock'>
                  <p>YOU PICKED</p>
                  <div className={visibleUserItem}>
                    <img src={IMG}/>
                  </div>
                </div>

                <div className='wrapper__headerGameStandard_blockResult_CPUItemBlock'>
                  <p>THE HOUSE PICKED</p>
                  <div className={visibleCPUItem}>
                    <img src={CPUImg}/>
                  </div>
                </div>

                
                <button className='restart' onClick={() => setUserItem('')}>Restart</button>
              </div>
          )}
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
              <p>You Win: {userScore}</p>
              <p>Ties: {ties}</p>
              <p>CPU Win: {CPUScore}</p>
            </div>
          </div>
      ) : null}

      <button className='wrapper__backToMenu' onClick={() => {
        setMenu(true)
        setUserScore(0)
        setTies(0)
        setCPUScore(0)
      }}>HOME</button>
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
