import Button from '@/ui/components/atoms/button'
import FilterButton from '@/ui/components/atoms/filter-button'

export class FilterButtons {
  element: HTMLElement
  isLiveFilter: FilterButton
  isSexFilter: FilterButton
  tvFilter: FilterButton
  initFilter: Button

  constructor(public id: string) {
    this.element = document.querySelector('#filter')
    this.setId(id)
    this.setPage()
  }

  setId(id: string) {
    this.element.id = id
  }

  setPage() {
    this.isLiveFilter = new FilterButton('생존인물만', 'isLive', this.id)
    this.isSexFilter = new FilterButton('여자', 'gender', this.id)
    this.tvFilter = new FilterButton('tvSeries 없음', 'hasTvSeries', this.id)
    this.initFilter = new Button('filterInitButton', '초기화', '타입', this.id)
  }

  setInactiveAll() {
    this.isLiveFilter.isActive = false
    this.isSexFilter.isActive = false
    this.tvFilter.isActive = false
    this.element
      .querySelectorAll('.filter-button')
      .forEach((item) => item.classList.remove('active'))
  }

  handleClick(callback: any) {
    this.element.addEventListener('click', (e: any) => {
      if (e.target.id) {
        callback('init')
        return
      }
      const id = e.target.dataset.toggleId
      const isActive = e.target.classList.contains('active')
      if (id) callback(id, isActive)
    })
  }
}

export default FilterButtons
