export interface ICreateUser {
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IAuthUser {
  id: number,
  username: string,
  vocation: string,
  level: number,
}