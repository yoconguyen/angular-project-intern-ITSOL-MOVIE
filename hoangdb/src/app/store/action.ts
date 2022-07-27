import { Action, createAction, props } from '@ngrx/store';

// định nghĩa type cho user action
export const getmovie='GET_MOVIE'
export const getmoviesussec='GET_MOVIE_SUCSEC'

export const getmovieaction=createAction(getmovie)
