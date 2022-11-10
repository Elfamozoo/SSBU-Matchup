const {
    VITE_SMASHBROS_API_VOD_URL: API_VOD,
    VITE_SMASHBROS_API_LIST_CHARACTERS: API_CHARA_LIST
} = import.meta.env;

export const fetchVodByCharactersId = async (id1: string, id2?: string) => {
    return fetch(API_VOD + new URLSearchParams({
        character1: id1,
        ...(id2 ? {character2: id2} : {}),
    }))
        .then(res => (res.json()))
        .then(data => data.items)
}

export const fetchCharacters = async () => {
    return fetch(API_CHARA_LIST)
    .then(res => (res.json()))
    .then(data => data)
}

export const fetchVodByCharactersIdAlt = async (id1: string, id2?: string) => {
    const response = await fetch(API_VOD + new URLSearchParams({
        character1: id1,
        ...(id2 ? {character2: id2} : {}),
    }))
    const responseJson = await response.json()

    return responseJson.items
}
