import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";

import { Character } from "../types/type";
import { IRootState } from "../store/store";
import { getCharacter, getCharacters } from "../querys/characters.query";

interface SearchCharactersAction extends Action {
  type: "SEARCH_CHARACTERS";
  payload: { name: string };
}

interface SearchCharactersErrorAction extends Action {
  type: "SEARCH_CHARACTERS_ERROR";
  payload: { error: string };
}

interface SearchCharactersSuccessAction extends Action {
  type: "SEARCH_CHARACTERS_SUCCESS";
  payload: { characters: Character[]; currentPage: number; totalPages: number };
}

interface SearchCharacterByIdAction extends Action {
  type: "SEARCH_CHARACTER_BY_ID";
  payload: { id: number };
}

interface SearchCharacterByIdSuccessAction extends Action {
  type: "SEARCH_CHARACTER_BY_ID_SUCCESS";
  payload: { character: Character };
}

interface SearchCharacterByIdErrorAction extends Action {
  type: "SEARCH_CHARACTER_BY_ID_ERROR";
  payload: { error: string };
}

interface AddFavouriteCharacterAction extends Action {
  type: "ADD_FAVOURITE_CHARACTER";
  payload: { character: Character };
}

interface DeleteFavouriteCharacterAction extends Action {
  type: "DELETE_FAVOURITE_CHARACTER";
  payload: { character: Character };
}

interface DeleteAllFavouriteCharacterAction extends Action {
  type: "DELETE_ALL_FAVOURITE_CHARACTER";
}

interface FindCharactersThunkAction
  extends ThunkAction<
    void,
    IRootState,
    unknown,
    | SearchCharactersAction
    | SearchCharactersSuccessAction
    | SearchCharactersErrorAction
  > {}

const searchCharactersAction: ActionCreator<SearchCharactersAction> = (
  name: string
): SearchCharactersAction => {
  return {
    type: "SEARCH_CHARACTERS",
    payload: { name: name },
  };
};

const searchCharactersSuccess: ActionCreator<SearchCharactersSuccessAction> = (
  characters: Character[],
  currentPage: number,
  totalPages: number
): SearchCharactersSuccessAction => {
  return {
    type: "SEARCH_CHARACTERS_SUCCESS",
    payload: {
      characters: characters,
      currentPage: currentPage,
      totalPages: totalPages,
    },
  };
};

const searchCharactersError: ActionCreator<SearchCharactersErrorAction> = (
  error: string
): SearchCharactersErrorAction => {
  return {
    type: "SEARCH_CHARACTERS_ERROR",
    payload: { error: error },
  };
};

export const searchCharactersThunk = (
  name: string,
  currentPage: number
): FindCharactersThunkAction => {
  return async (dispatch, getState) => {
    dispatch(searchCharactersAction(name));
    try {
      const response = await getCharacters(name, currentPage);
      dispatch(
        searchCharactersSuccess(
          response.characters,
          currentPage,
          response.pages
        )
      );
    } catch (error) {
      dispatch(searchCharactersError(error));
    }
  };
};

interface searchCharacterByIdThunkAction
  extends ThunkAction<
    void,
    IRootState,
    unknown,
    | SearchCharacterByIdAction
    | SearchCharacterByIdSuccessAction
    | SearchCharacterByIdErrorAction
  > {}

const findCharacterByIdAction: ActionCreator<SearchCharacterByIdAction> = (
  id: number
): SearchCharacterByIdAction => {
  return {
    type: "SEARCH_CHARACTER_BY_ID",
    payload: { id: id },
  };
};

const findCharacterByIdSuccess: ActionCreator<
  SearchCharacterByIdSuccessAction
> = (character: Character): SearchCharacterByIdSuccessAction => {
  return {
    type: "SEARCH_CHARACTER_BY_ID_SUCCESS",
    payload: { character: character },
  };
};

const findCharacterByIdError: ActionCreator<SearchCharacterByIdErrorAction> = (
  error: string
): SearchCharacterByIdErrorAction => {
  return {
    type: "SEARCH_CHARACTER_BY_ID_ERROR",
    payload: { error: error },
  };
};

export const findCharacterByIdThunk = (
  id: number
): searchCharacterByIdThunkAction => {
  return async (dispatch, getState) => {
    dispatch(findCharacterByIdAction(id));
    try {
      const response = await getCharacter(id);
      dispatch(findCharacterByIdSuccess(response.character));
    } catch (error) {
      dispatch(findCharacterByIdError(error));
    }
  };
};

export const addFavouriteCharacterAction: ActionCreator<
  AddFavouriteCharacterAction
> = (character: Character): AddFavouriteCharacterAction => {
  return {
    type: "ADD_FAVOURITE_CHARACTER",
    payload: { character: character },
  };
};

export const deleteFavouriteCharacter: ActionCreator<
  DeleteFavouriteCharacterAction
> = (character: Character): DeleteFavouriteCharacterAction => {
  return {
    type: "DELETE_FAVOURITE_CHARACTER",
    payload: { character: character },
  };
};

export const deleteAllFavouriteCharacter: ActionCreator<
  DeleteAllFavouriteCharacterAction
> = (character: Character): DeleteAllFavouriteCharacterAction => {
  return {
    type: "DELETE_ALL_FAVOURITE_CHARACTER",
  };
};

export type CharactersActions =
  | SearchCharactersAction
  | SearchCharactersSuccessAction
  | SearchCharactersErrorAction
  | SearchCharacterByIdAction
  | SearchCharacterByIdSuccessAction
  | SearchCharacterByIdErrorAction
  | AddFavouriteCharacterAction
  | DeleteFavouriteCharacterAction
  | DeleteAllFavouriteCharacterAction;
