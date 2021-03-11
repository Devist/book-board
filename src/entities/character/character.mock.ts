import { ICharacterData, ICharacter, Gender } from './character.types'
import { Character } from './character'

export const mockCharactersData = (): ICharacterData[] => [
  {
    url: 'https://www.anapioficeandfire.com/api/characters/1',
    name: '지원자',
    gender: Gender.Male,
    curture: 'Braavosi',
    born: '1989-05-15',
    died: '2199-05-15',
    title: ['과제테스트 통과'],
    aliases: ['프론트엔드 개발자', '솔로'],
    father: '오용근',
    mother: '김순옥',
    spouse: '',
    allegiances: [''],
    books: [],
    povBooks: ['Javascript', '호랑이책'],
    tvSeries: [''],
    playedBy: [''],
  },
  {
    url: 'https://www.anapioficeandfire.com/api/characters/1',
    name: '오동환',
    gender: Gender.Male,
    curture: 'Braavosi',
    born: '1989-05-15',
    died: '2199-05-15',
    title: ['과제테스트 통과'],
    aliases: ['프론트엔드 개발자', '솔로'],
    father: '오용근',
    mother: '김순옥',
    spouse: '',
    allegiances: [''],
    books: ['Javascript', '호랑이책'],
    povBooks: ['Javascript', '호랑이책'],
    tvSeries: ['빈센조', '빌어먹을세상따위'],
    playedBy: [''],
  },
]

export const mockCharacters = (
  data: ICharacterData[] = mockCharactersData()
): ICharacter[] => data.map((item) => new Character(item))
