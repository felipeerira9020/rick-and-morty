import {Character} from '../types/type';

interface GetCharacters {
    characters: Character[];
    pages: number;
}

export const getCharacters = async (name:string, page: number): Promise<GetCharacters> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
    const {results, info} = await response.json();
    return {
        characters: results,
        pages: info.pages
    }
   
};

interface GetCharacter {
    character: Character;
}

export const getCharacter = async (id: number): Promise<GetCharacter> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await response.json();
    return {
        character
    }
}
