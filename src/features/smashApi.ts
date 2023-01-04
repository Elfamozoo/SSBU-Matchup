const {
    VITE_SMASHBROS_API_VOD_URL: API_VOD,
    VITE_SMASHBROS_API_LIST_CHARACTERS: API_CHARA_LIST
} = import.meta.env;

const searchParams = new URLSearchParams(API_VOD);

export const fetchVodByCharactersId = async (id1: string, id2?: string) => {
    const searchParams = new URLSearchParams();
    searchParams.append("character1", id1)
    if (id2) searchParams.append("character2", id2)
    return fetch(`${API_VOD}?${searchParams.toString()}`)
        .then(res => res.json())
        .then(data => data.items)
}

export const fetchCharacters = async () => {
    return fetch(API_CHARA_LIST)
        .then(res => res.json())
        .then(data => data)
}
