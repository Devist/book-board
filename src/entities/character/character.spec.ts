import { Character } from './character'
import { mockCharactersData } from './character.mock'

describe('>>> Character', () => {
  describe('>> constructor', () => {
    it('numberOfBooks의 값은 tvSeries 배열의 길이이다.', () => {
      const entity1 = new Character(mockCharactersData()[0])
      expect(entity1.numberOfBooks).toBe(0)

      const entity2 = new Character(mockCharactersData()[1])
      expect(entity2.numberOfBooks).toBe(2)
    })

    it('numberOfTvs의 값은 tvSeries 배열의 길이이다.', () => {
      const entity1 = new Character(mockCharactersData()[0])
      expect(entity1.numberOfTvs).toBe(0)

      const entity2 = new Character(mockCharactersData()[1])
      expect(entity2.numberOfTvs).toBe(2)
    })
  })
})
