export class Team {
  constructor(
      public id: number,
      public team: string,
      public city: string,
      public stateAbbr: string,
      public arena: string,
      public history?: string
  ){}
}
