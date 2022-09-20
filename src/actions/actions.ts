import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";

import { Character } from "../types/type";
import { IRootState } from "../store/store";
import { getCharacter, getCharacters } from "../querys/characters.query";

interface FindCharactersAction extends Action {
  type: "FIND_CHARACTERS";
  payload: { name: string };
}

interface FindCharactersSuccessAction extends Action {
  type: "FIND_CHARACTERS_SUCCESS";
  payload: { characters: Character[]; currentPage: number; totalPages: number };
}

interface FindCharactersErrorAction extends Action {
  type: "FIND_CHARACTERS_ERROR";
  payload: { error: string };
}

interface FindCharacterByIdAction extends Action {
  type: "FIND_CHARACTER_BY_ID";
  payload: { id: number };
}

interface FindCharacterByIdSuccessAction extends Action {
  type: "FIND_CHARACTER_BY_ID_SUCCESS";
  payload: { character: Character };
}

interface FindCharacterByIdErrorAction extends Action {
  type: "FIND_CHARACTER_BY_ID_ERROR";
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
    | FindCharactersAction
    | FindCharactersSuccessAction
    | FindCharactersErrorAction
  > {}

const findCharactersAction: ActionCreator<FindCharactersAction> = (
  name: string
): FindCharactersAction => {
  return {
    type: "FIND_CHARACTERS",
    payload: { name: name },
  };
};

const findCharactersSuccess: ActionCreator<FindCharactersSuccessAction> = (
  characters: Character[],
  currentPage: number,
  totalPages: number
): FindCharactersSuccessAction => {
  return {
    type: "FIND_CHARACTERS_SUCCESS",
    payload: {
      characters: characters,
      currentPage: currentPage,
      totalPages: totalPages,
    },
  };
};

const findCharactersError: ActionCreator<FindCharactersErrorAction> = (
  error: string
): FindCharactersErrorAction => {
  return {
    type: "FIND_CHARACTERS_ERROR",
    payload: { error: error },
  };
};

export const findCharactersThunk = (
  name: string,
  currentPage: number
): FindCharactersThunkAction => {
  return async (dispatch, getState) => {
    dispatch(findCharactersAction(name));
    try {
      const response = await getCharacters(name, currentPage);
      dispatch(
        findCharactersSuccess(
          response.characters,
          currentPage,
          response.totalPages
        )
      );
    } catch (error) {
      dispatch(findCharactersError(error));
    }
  };
};

interface FindCharacterByIdThunkAction
  extends ThunkAction<
    void,
    IRootState,
    unknown,
    | FindCharacterByIdAction
    | FindCharacterByIdSuccessAction
    | FindCharacterByIdErrorAction
  > {}

const findCharacterByIdAction: ActionCreator<FindCharacterByIdAction> = (
  id: number
): FindCharacterByIdAction => {
  return {
    type: "FIND_CHARACTER_BY_ID",
    payload: { id: id },
  };
};

const findCharacterByIdSuccess: ActionCreator<
  FindCharacterByIdSuccessAction
> = (character: Character): FindCharacterByIdSuccessAction => {
  return {
    type: "FIND_CHARACTER_BY_ID_SUCCESS",
    payload: { character: character },
  };
};

const findCharacterByIdError: ActionCreator<FindCharacterByIdErrorAction> = (
  error: string
): FindCharacterByIdErrorAction => {
  return {
    type: "FIND_CHARACTER_BY_ID_ERROR",
    payload: { error: error },
  };
};

export const findCharacterByIdThunk = (
  id: number
): FindCharacterByIdThunkAction => {
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
  | FindCharactersAction
  | FindCharactersSuccessAction
  | FindCharactersErrorAction
  | FindCharacterByIdAction
  | FindCharacterByIdSuccessAction
  | FindCharacterByIdErrorAction
  | AddFavouriteCharacterAction
  | DeleteFavouriteCharacterAction
  | DeleteAllFavouriteCharacterAction;
