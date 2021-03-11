require('@/ui/assets/index.css')

import { ICharacterData } from '@/entities'
import { CharactersService } from '@/services'
import FilterButtons from '@/ui/components/molecules/filter-buttons'
import CharacterCard from '../../components/organisms/character-card'

const FILTER_ID = 'filter'
const LIST_ID = 'list'
export class Main {
  private characterService: CharactersService
  filters: any
  items: ICharacterData[]
  pagination: { page: number; pageSize: number }

  constructor() {
    this.characterService = new CharactersService()
    this.pagination = {
      page: 2,
      pageSize: 10,
    }
    this.characterService
      .getAll(this.pagination)
      .then((result: ICharacterData[]) => {
        this.items = result
        this.setPage()
      })
  }

  setPage() {
    this.filters = new FilterButtons(FILTER_ID)
    for (let i: number = 0; i < this.pagination.pageSize; i++) {
      console.log(this.items[i])
      this.filters = new CharacterCard(LIST_ID, this.items[i])
    }
  }
}

new Main()
