export interface ICharacterData {
  readonly url: string
  readonly name: string // 중복되지 않는다고 가정
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
}

export enum Gender {
  Female = '여성',
  Male = '남성',
}

export interface ICharacter extends ICharacterData {
  readonly numberOfBooks: number
  readonly numberOfTvs: number
}
