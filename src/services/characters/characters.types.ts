import { ICharacterData } from '@/entities'

export interface ICharactersService {
  getAll(pagination: IPaginationRequest<void>): Promise<ICharacterData[]>
  deleteOne(name: string): void
}

export interface IArticlesServiceMock {
  getAll: jest.Mock<ICharacterData[]>
  deleteOne: jest.Mock<string>
}
