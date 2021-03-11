import { ICharacterData } from '@/entities'
import CharacterRepository from '@/repositories/CharacterRepository'
import { ICharactersService } from './characters.types'

export class CharactersService implements ICharactersService {
  private repository: CharacterRepository
  constructor() {
    this.repository = new CharacterRepository()
  }

  async getAll(
    pagination: IPaginationRequest<void>
  ): Promise<ICharacterData[]> {
    return await this.repository.fetchItems(pagination)
  }

  deleteOne() {}
}
