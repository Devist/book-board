require('./../../assets/index.css')

// import TimeLimitBoard from '../../components/molecules/time-limit-board/TimeLimitBoard'
// import ScoreBoard from '../../components/molecules/score-board/ScoreBoard'
// import GameConsole from '../../components/organisms/game/GameConsole'
// import Button from '../../components/atoms/button/Button'

// import WordApi from '../../api/WordApi'

// import Router from '../../router/router'

const ROOT_ELEMENT_ID = 'playApp'
const STATUS_BOARD_ID = 'statusBoard'
const GAME_BOARD_ID = 'gameBoard'
const INIT_BUTTON_AREA_ID = 'initButtonArea'

export class Main {
  constructor() {
    this.setPage()
    WordApi.fetch().then((wordData) => {
      document.getElementById(ROOT_ELEMENT_ID).classList.remove('loader')

      this.setInterface()
      this.startGame(wordData)
    })
  }

  setPage() {
    this.timeLimitBoard = new TimeLimitBoard('timeLimitBoard', STATUS_BOARD_ID)
    this.scoreBoard = new ScoreBoard('scoreBoard', STATUS_BOARD_ID)
    this.gameConsole = new GameConsole('gameConsole', GAME_BOARD_ID)
    this.initButton = new Button(
      'startButton',
      '초기화',
      'square',
      INIT_BUTTON_AREA_ID
    )
  }

  setInterface() {
    this.initButton.handleClick(() => {
      location.href = '/'
    })
  }

  startGame(wordData) {
    let wordIndex = 0
    let score = wordData.length
    let totalTime = 0

    this.scoreBoard.setScoreText(score)
    this.timeLimitBoard.startTimer(wordData[wordIndex].second)
    this.gameConsole.setQuiz(wordData[wordIndex].text)

    // 제한 시간이 되었을 떄
    this.timeLimitBoard.handleTimeOut(() => {
      wordIndex = wordIndex + 1
      score = score - 1
      this.scoreBoard.setScoreText(score)
      if (score === 0) {
        this.endGame(totalTime, score)
        return
      }
      this.timeLimitBoard.startTimer(wordData[wordIndex].second)
      this.gameConsole.setQuiz(wordData[wordIndex].text)
    })

    this.gameConsole.handleAnswer((isAnswer) => {
      if (isAnswer) {
        wordIndex = wordIndex + 1
        if (wordIndex >= wordData.length) {
          this.endGame(totalTime, score)
          return
        }
        totalTime += this.timeLimitBoard.getTimeTaken()
        this.timeLimitBoard.startTimer(wordData[wordIndex].second)
        this.gameConsole.setQuiz(wordData[wordIndex].text)
      }
    })
  }

  endGame(totalTime, score) {
    const metaData = {
      totalTime,
      score,
    }
    Router.router('Result', metaData)
  }
}

new Main()
