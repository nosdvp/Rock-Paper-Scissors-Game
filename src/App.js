import { use, useState } from 'react';
import './App.css';
import rules from './img/image-rules.svg'
import rulesModern from './img/image-rules-bonus.svg'
import paper from './img/icon-paper.svg'
import scissors from './img/icon-scissors.svg'
import rock from './img/icon-rock.svg'
import lizard from './img/icon-lizard.svg'
import spock from './img/icon-spock.svg'

function App() {

  const [openModalRulesStandard, setOpenModalRulesStandard] = useState(false)
  const [openModalRulesModern, setOpenModalRulesModern] = useState(false)
  const [modalBeforeGoToMenu, setModalBeforeGoToMenu] = useState(false)

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


  const [userItemModern, setUserItemModern] = useState('')
  const [userIMGModern, setUserIMGModern] = useState()
  const [CPUIMGModern, setCPUIMGModern] = useState()
  const [visibleUserItemModern, setVisibleUserItemModern] = useState()
  const [visibleCPUItemModern, setVisibleCPUItemModern] = useState()
  const [userScoreModern, setUserScoreModern] = useState()
  const [tiesModern, setTiesModern] = useState()
  const [CPUScoreModern, setCPUScoreModern] = useState()

  const playGameStandard = (userItem) => {
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

  const playGameModern = (userItemModern) => {
    setUserItemModern(userItemModern)

    if(userItemModern === 'paper'){
      setUserIMGModern(paper)
    }else if(userItemModern === 'scissors'){
      setUserIMGModern(scissors)
    }else if(userItemModern === 'rock'){
      setUserIMGModern(rock)
    }else if(userItemModern === 'lizard'){
      setUserIMGModern(lizard)
    }else if(userItemModern === 'spock'){
      setUserIMGModern(spock)
    }

    const userClassesModern = {
      paper: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_userPaperModerm',
      scissors: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_userScissorsModern',
      rock: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_userRockModern',
      lizard: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_userPaperModern',
      spock: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_userScissorsModern',
    }

    const cpuClassesModern = {
      paper: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_CPUItemBlockModern',
      scissors: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_CPUItemBlockModern',
      rock: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_CPUItemBlockModern',
      lizard: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_CPUItemBlockModern',
      spock: 'wrapper__headerGameModern_blockResultModern_userItemBlockModern_CPUItemBlockModern',
    }

    setVisibleUserItemModern(userClassesModern[userItemModern])

    const itemForGameModern = ['paper', 'scissors', 'rock', 'lizard', 'spock']
    const CPUChoiseItem = itemForGameModern[Math.floor(Math.random() * itemForGameModern.length)]

    setVisibleCPUItemModern(cpuClassesModern[CPUChoiseItem])

    if(CPUChoiseItem === 'paper'){
      setCPUIMGModern(paper)
    }else if(CPUChoiseItem === 'scissors'){
      setCPUIMGModern(scissors)
    }else if(CPUChoiseItem === 'rock'){
      setCPUIMGModern(rock)
    }else if(CPUChoiseItem === 'lizard'){
      setCPUIMGModern(lizard)
    }else if(CPUChoiseItem === 'spock'){
      setCPUIMGModern(spock)
    }

    if(userItemModern === 'paper' && CPUChoiseItem === 'rock'){
      setUserScoreModern(prev => prev + 1)
    }else if(userItemModern === 'rock' && CPUChoiseItem === 'lizard'){
      setUserScoreModern(prev => prev + 1)
    }else if(userItemModern === 'lizard' && CPUChoiseItem === 'spock'){
      setUserScoreModern(prev => prev + 1)
    }else if(userItemModern === 'spock' && CPUChoiseItem === 'scissors'){
      setUserScoreModern(prev => prev + 1)
    }else if(userItemModern === 'scissors' && CPUChoiseItem === 'paper'){
      setUserScoreModern(prev => prev + 1)
    }else if(userItemModern === CPUChoiseItem){
      setTiesModern(prev => prev + 1)
    }else if(userItemModern === 'rock' && CPUChoiseItem === 'paper'){
      setCPUScoreModern(prev => prev + 1)
    }else if(userItemModern === 'lizard' && CPUChoiseItem === 'rock'){
      setCPUScoreModern(prev => prev + 1)
    }else if(userItemModern === 'spock' && CPUChoiseItem === 'lizard'){
      setCPUScoreModern(prev => prev + 1)
    }else if(userItemModern === 'scissors' && CPUChoiseItem === 'spock'){
      setCPUScoreModern(prev => prev + 1)
    }else if(userItemModern === 'paper' && CPUChoiseItem === 'scissors'){
      setCPUScoreModern(prev => prev + 1)
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
                onClick={() => playGameStandard('paper')}
              >
                <img src={paper}/>
              </button>
              <button 
                className='wrapper__headerGameStandard_choiseBlock_secondItem' 
                onClick={() => playGameStandard('scissors')}
                >
                  <img src={scissors}/>
              </button>
              <button 
                className='wrapper__headerGameStandard_choiseBlock_thirdItem' 
                onClick={() => playGameStandard('rock')}
              >
                <img src={rock}/>
              </button>
            </div>
          ) : (
              <>
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
              </>
          )}
        </>
      ) : menu === false && mode === 'modern' ? (
        <>
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
              <p>You Win: {userScoreModern}</p>
              <p>Ties: {tiesModern}</p>
              <p>CPU Win: {CPUScoreModern}</p>
            </div>
          </div>

          {userItemModern === '' ? (
            <div className='wrapper__headerGameModern_choiseBlockModern'>

              <button 
                className='wrapper__headerGameModern_choiseBlockModern_firstItemModern' 
                onClick={() => playGameModern('scissors')}
              >
                <img src={scissors}/>
              </button>

              <button 
                className='wrapper__headerGameModern_choiseBlockModern_secondItemModern' 
                onClick={() => playGameModern('spock')}
                >
                  <img src={spock}/>
              </button>

              <button 
                className='wrapper__headerGameModern_choiseBlockModern_thirdItemModern' 
                onClick={() => playGameModern('paper')}
              >
                <img src={paper}/>
              </button>

              <button 
                className='wrapper__headerGameModern_choiseBlockModern_fourthItemModern' 
                onClick={() => playGameModern('lizard')}
              >
                <img src={lizard}/>
              </button>

              <button 
                className='wrapper__headerGameModern_choiseBlockModern_fifthItemModern' 
                onClick={() => playGameModern('rock')}
              >
                <img src={rock}/>
              </button>

            </div>
          ) : (
            <div className='wrapper__headerGameModern_blockResultModern'>
              <div className='wrapper__headerGameModern_blockResultModern_userItemBlockModern'>
                <p>YOU PICKED</p>
                <div className={visibleUserItemModern}>
                  <img src={userIMGModern}/>
                </div>
              </div>
              <div className='wrapper__headerGameModern_blockResultModern_CPUItemBlockModern'>
                <p>THE HOUSE PICKED</p>
                  <div className={visibleCPUItemModern}>
                    <img src={CPUIMGModern}/>
                  </div>
                </div>
                <button className='restart' onClick={() => setUserItem('')}>Restart</button>
              </div>
          )}
        </>
      ) : null}

      {modalBeforeGoToMenu === true && (
        <div className='modalGoHome'>
          <div className='modalGoHome__block'>
            <p>DO YOU WANT SAVE CURRENT RESULT?</p>
              <div className='modalGoHome__block_navBlock'>
                <button onClick={() => {
                  setMenu(true)
                  setModalBeforeGoToMenu(false)
                }}>YES</button>
                <button onClick={() => {
                  setMenu(true)
                  setUserScore(0)
                  setTies(0)
                  setCPUScore(0)
                  setModalBeforeGoToMenu(false)
                }}>NO</button>
              </div>
            </div>
          </div>
        )}

      {menu === false && (
        <>
          <button className='wrapper__backToMenu' onClick={() => setModalBeforeGoToMenu(true)}>HOME</button>
          <button className='wrapper__rules' onClick={() => {
            if(mode === 'standard'){
              setOpenModalRulesStandard(true)
            }else if(mode === 'modern'){
              setOpenModalRulesModern(true)
            }
          }}>RULES</button>
        </>
      )}

      {openModalRulesStandard === true && (
        <div className='wrapper__modal'>
          <div className='wrapper__modal_rulesBlock'>
            <div className='wrapper__modal_rulesBlock_titleBlock'>
              <p className='wrapper__modal_rulesBlock_titleBlock_title'>RULES STANDARD</p>
              <p className='wrapper__modal_rulesBlock_titleBlock_close' onClick={() => setOpenModalRulesStandard(false)}>X</p>
            </div>

            <div className='wrapper__modal_rulesBlock_rulesBox'>
              <img src={rules}/>
            </div>
          </div>
        </div>
      )}

      {openModalRulesModern === true && (
        <div className='wrapper__modal'>
          <div className='wrapper__modal_rulesBlock'>
            <div className='wrapper__modal_rulesBlock_titleBlock'>
              <p className='wrapper__modal_rulesBlock_titleBlock_title'>RULES MODERN</p>
              <p className='wrapper__modal_rulesBlock_titleBlock_close' onClick={() => setOpenModalRulesModern(false)}>X</p>
            </div>

            <div className='wrapper__modal_rulesBlock_rulesBox'>
              <img className='wrapper__modal_rulesBlock_rulesBox_imgModern' src={rulesModern}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;