import { ICharacter, ICharacterData, Gender } from './character.types'

export class Character implements ICharacter {
  readonly url: string
  readonly name: string
  readonly gender: Gender
  readonly curture: string
  readonly born: string
  readonly died: string
  readonly title: string[]
  readonly aliases: string[]
  readonly father: string
  readonly mother: string
  readonly spouse: string
  readonly allegiances: string[]
  readonly books: string[]
  readonly povBooks: string[]
  readonly tvSeries: string[]
  readonly playedBy: string[]
  readonly numberOfBooks: number
  readonly numberOfTvs: number

  constructor(data: ICharacterData) {
    this.url = data.url
    this.name = data.name
    this.gender = data.gender
    this.curture = data.curture
    this.born = data.born
    this.died = data.died
    this.title = data.title
    this.aliases = data.aliases
    this.father = data.father
    this.mother = data.mother
    this.spouse = data.spouse
    this.allegiances = data.allegiances
    this.books = data.books
    this.povBooks = data.povBooks
    this.tvSeries = data.tvSeries
    this.playedBy = data.playedBy

    // additional character data
    this.numberOfBooks = this.getNumbers(data.books)
    this.numberOfTvs = this.getNumbers(data.tvSeries)
  }

  private getNumbers(object: string[]) {
    if (object.length === 0) return 0

    const arr = object.filter((contents) => contents.length > 0)
    return arr.length
  }
}
