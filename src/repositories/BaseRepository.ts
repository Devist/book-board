type BaseRepository = {
  fetchItem?: (id: number) => Promise<any>
  fetchItems?: (params?: any) => Promise<any>
  saveItem?: (params: any) => void
  saveItems?: (params: any) => void
  clearItem?: () => void
  clearItems?: () => void
  getItem?: () => any
  getItems?: () => any
}

export default BaseRepository
