export type Vod = {
    id: string;
    uploadDate: string;
    videoDescription: string;
    tournament: string;
    round: string;
    player1: string;
    player2: string;
    player1Characters: string;
    player2Characters: string;
}

export type Character = {
    id: string;
    name: string;
    aliases: string;
}
