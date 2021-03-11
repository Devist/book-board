import { ICharacterData } from '@/entities/character/character.types'
export class CharacterCard {
  divElement: HTMLElement

  constructor(parentId: string, public data: ICharacterData) {
    this.divElement = document.createElement('DIV')
    this.render(parentId)
  }

  render(parentId: string) {
    document.getElementById(parentId).append(this.divElement)
    this.divElement.innerText = `${this.data.name}`
  }

  setPage() {}

  // 이벤트 위임으로 처리
  handleClick(callback: any) {
    this.divElement.addEventListener('click', () => {
      callback()
    })
  }
}

export default CharacterCard
