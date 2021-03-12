import { ICharacterData } from '@/entities/character/character.types'
export class CharacterCard {
  divElement: HTMLElement

  constructor(parentId: string, public data: ICharacterData) {
    this.divElement = document.createElement('DIV')
    this.setStyle()
    this.render(parentId)
  }

  private setStyle(): void {
    this.divElement.classList.add('card')
  }
  private render(parentId: string): void {
    document.getElementById(parentId).append(this.divElement)
    this.divElement.innerHTML = `
        <div class="left">
            <div>name: ${this.data.name} / alias: ${this.data.aliases}</div>
            <div>title: ${this.data.title}</div>
            <div class="series">
                <div>books: ${this.data.books.length}</div>
                <div>tvSeries: ${this.data.tvSeries.length}</div>
            </div>
        </div>
        <div class="right">
            <button class="rounded">삭제</button>
        </div>
      `
  }

  // 이벤트 위임으로 처리
  handleClick(callback: any) {
    this.divElement.addEventListener('click', () => {
      callback()
    })
  }
}

export default CharacterCard
