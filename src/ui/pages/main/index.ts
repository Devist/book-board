import { CharactersService } from '@/services'

export class Main {
  private characterService: CharactersService

  constructor() {
    this.characterService = new CharactersService()
    const pagination = {
      page: 1,
      pageSize: 10,
    }
    this.characterService
      .getAll(pagination)
      .then((result) => console.log(result))
    console.log('hello')
  }
}

new Main()
