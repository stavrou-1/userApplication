export interface PostPlayers {
    state?: Array<string>;
    _id: String;
    team: String;
    __v?: Number;
    history: String;
    city: String;
    stateAbbr: String;
    arena: String;
    players: Array<PlayersStructure>
}

export interface PlayersStructure {
    name: String;
    position: String;
    teamNum: Number
}