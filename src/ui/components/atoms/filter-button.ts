/**
 * ### 필터 버튼 컴포넌트
 */
export class FilterButton {
  buttonElement: HTMLElement
  isActive: boolean

  constructor(text: string, parentId: string) {
    this.buttonElement = document.createElement('BUTTON')
    this.isActive = false
    this.setText(text)
    this.setStyle()
    this.render(parentId)
  }

  render(parentId: string) {
    document.getElementById(parentId).append(this.buttonElement)
    this.buttonElement.addEventListener('click', () => {
      this.isActive = !this.isActive
      if (this.isActive) this.buttonElement.classList.add('active')
      else this.buttonElement.classList.remove('active')
    })
  }

  setText(text: string) {
    this.buttonElement.innerHTML = text
  }

  setStyle() {
    this.buttonElement.classList.add('filter-button')
  }
}

export default FilterButton
