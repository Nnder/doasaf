export interface INews {
  uid?: 'string'
  header: 'string'
  text: 'string'
  imgs: any[]
  createdAt: { seconds: number, miliseconds: number}
}