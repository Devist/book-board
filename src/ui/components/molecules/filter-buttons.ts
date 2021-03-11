// import TimeLimitBoard from '../../components/molecules/time-limit-board/TimeLimitBoard'
// import ScoreBoard from '../../components/molecules/score-board/ScoreBoard'
// import GameConsole from '../../components/organisms/game/GameConsole'

import Button from '@/ui/components/atoms/button'
import FilterButton from '@/ui/components/atoms/filter-button'

export class FilterButtons {
  divElement: HTMLElement
  isLiveFilter: FilterButton
  isSexFilter: FilterButton
  initFilter: Button

  constructor(public id: string) {
    this.divElement = document.createElement('DIV')
    this.setId(id)
    this.setPage()
  }

  setId(id: string) {
    this.divElement.id = id
  }

  setPage() {
    this.isLiveFilter = new FilterButton('생존인물만', this.id)
    this.isSexFilter = new FilterButton('여자', this.id)
    this.isLiveFilter = new FilterButton('tvSeries 없음', this.id)
    this.initFilter = new Button('filterInitButton', '초기화', '타입', this.id)
  }

  // 이벤트 위임으로 처리
  handleClick(callback: any) {
    this.divElement.addEventListener('click', () => {
      callback()
    })
  }
}

export default FilterButtons
