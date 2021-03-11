/**
 * ### 필터 버튼 컴포넌트
 */
export class FilterButton {
  /**
   * 객체로 생성될 때,
   * - id와 parentId 가 있을 경우 element 생성 후 화면에 렌더링하고,
   * - id와 parentId 가 없을 경우 element만 생성
   * 합니다.
   * @param {string} id       해당 컴포넌트의 HTML ID
   * @param {string} text     버튼 텍스트
   * @param {string} type     버튼 모양 타입 - square | round
   * @param {string} parentId 해당 컴포넌트가 삽입될 부모 HTML ID
   */
  constructor(id, text, type, parentId) {
    this.bxuttonElement = document.createElement('BUTTON')
    this.setId(id)
    this.setText(text)
    this.setStyle(type)
    this.render(parentId)
  }

  render(parentId) {
    document.getElementById(parentId).append(this.buttonElement)
  }

  setId(id) {
    this.buttonElement.id = id
  }

  setText(text) {
    this.buttonElement.innerHTML = text
  }

  setStyle(type) {
    this.buttonElement.classList.add('bg-primary-500')
    this.buttonElement.classList.add('hover:bg-primary-700')
    this.buttonElement.classList.add('text-primary')
    this.buttonElement.classList.add('py-2')
    this.buttonElement.classList.add('px-4')
    this.buttonElement.classList.add('w-full')
    this.buttonElement.classList.add('focus:outline-none')

    type === 'square'
      ? this.buttonElement.classList.add('rounded')
      : this.buttonElement.classList.add('rounded-full')
  }

  /**
   * 버튼이 클릭되었을 때어떤 버튼이 클릭되었는지 콜백으로 알려줍니다.
   * @param {callback}
   */
  handleClick(callback) {
    this.buttonElement.addEventListener('click', () => {
      callback()
    })
  }
}

export default Button
