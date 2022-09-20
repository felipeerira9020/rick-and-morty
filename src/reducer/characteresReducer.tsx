import { Character, Episode } from "../types/type";
import { CharactersActions } from "../actions/actions";

type CharacterState = {
  busqueda: string;
  favourites: Character[];
  characters: Character[];
  currentCharacter: Character | null;
  currentPage: number;
  totalPages: number;
  episodes: Episode[];
  error: string | null;
  status: "Loading" | "Completed";
};

const initialState: CharacterState = {
  busqueda: "",
  favourites: [],
  characters: [],
  currentCharacter: null,
  currentPage: 1,
  totalPages: 1,
  episodes: [],
  error: null,
  status: "Completed",
};

const charactersReducer = (
  state: CharacterState = initialState,
  action: CharactersActions
) => {
  switch (action.type) {
    case "FIND_CHARACTERS":
      return {
        ...state,
        busqueda: action.payload.name,
        status: "Loading",
        error: null,
      };
    case "FIND_CHARACTERS_SUCCESS":
      return {
        ...state,
        characters: action.payload.characters,
        status: "Completed",
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      };
    case "FIND_CHARACTERS_ERROR":
      return {
        ...state,
        error: action.payload.error,
        characters: [],
        status: "Completed",
      };
    case "FIND_CHARACTER_BY_ID":
      return {
        ...state,
        status: "Loading",
        error: null,
      };
    case "FIND_CHARACTER_BY_ID_SUCCESS":
      return {
        ...state,
        currentCharacter: action.payload.character,
        status: "Completed",
      };
    case "FIND_CHARACTER_BY_ID_ERROR":
      return {
        ...state,
        error: action.payload.error,
        status: "Completed",
      };
    case "ADD_FAVOURITE_CHARACTER":
      return {
        ...state,
        favourites: [...state.favourites, action.payload.character],
        status: "Completed",
      };

    case "DELETE_FAVOURITE_CHARACTER":
      return {
        ...state,
        favourites: [
          ...state.favourites.filter(
            (character) => character.id !== action.payload.character.id
          ),
        ],
        status: "Completed",
      };
    case "DELETE_ALL_FAVOURITE_CHARACTER":
      return {
        ...state,
        favourites: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default charactersReducer;
