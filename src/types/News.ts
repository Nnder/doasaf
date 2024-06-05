export type DateTime = { seconds: number, miliseconds: number}

export interface INews<T> {
  uid: string
  header: string
  text: string
  imgs: string[]
  createdAt: T
}