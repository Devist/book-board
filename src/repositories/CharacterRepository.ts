import { CharacterAPI } from '@/network/api/CharacterAPI'
import { APIClient } from '@/network/APIClient'
import BaseRepository from './BaseRepository'

export default class CharacterRepository implements BaseRepository {
  constructor() {}

  async fetchItems(params: IPaginationRequest<void>) {
    return await APIClient.shared.request(
      new CharacterAPI.GetCharacters(params)
    )
  }
}
