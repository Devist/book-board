import { ICharacterData } from '@/entities'
import { AxiosResponse } from 'axios'
import { HTTPMethod } from '../APIClient'
import { APIRequest } from '../APIRequest'

export namespace CharacterAPI {
  // 캐릭터 리스트 가져오기
  export class GetCharacters implements APIRequest<IList<ICharacterData>> {
    response: IList<ICharacterData> | undefined
    path = '/api/characters'
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor(public params: IPaginationRequest<void>) {}
  }

  // 특정 캐릭터 가져오기
  // export class GetCharacter implements APIRequest<IProduct> {}
}
