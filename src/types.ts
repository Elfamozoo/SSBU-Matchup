export type Vod = {
    id: string;
    uploadDate: string;
    videoDescription: string;
    tournament: string;
    round: string;
    player1: Player;
    player2: Player;
    player1characters: Character[];
    player2characters: Character[];
    channel: Channel[];
}

export type Character = {
    id: string;
    name: string;
    aliases: string;
}

export type Player = {
    name: string
}

export type Channel = {
    id: string;
    name: string;
}
