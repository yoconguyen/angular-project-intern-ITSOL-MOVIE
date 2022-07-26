import { Action, createAction, props } from '@ngrx/store';

// định nghĩa type cho user action
export const getmovie='GET_MOVIE'
export const getmoviesussec='GET_MOVIE_SUCSEC'
export const filtermoviequocgia='FILTER_MOVIE'
export const filtermovietheloai='FILTER_THELOAI'
export const filtermovienam='FILTER_NAM'
export const filtermoviesearch='FILTER_SEARCH'
export const typemovieclick='CLICK_MOVIE'
export const typeloginid='LOGIN_ID'
export const typeadmin='USER_ADMIN'
export const typesendidedit='SEND_ID_EDIT'

export const getmovieaction=createAction(getmovie)
export const filtermoviequocgiaaction=createAction(filtermoviequocgia)
export const filtermovietheloaiaction=createAction(filtermovietheloai)
export const filtermovienamaction=createAction(filtermovienam)
export const filtermoviesearchaction=createAction(filtermoviesearch)
export const clickmovieaction=createAction(typemovieclick)
export const typeloginidaction=createAction(typeloginid)
export const actionadmin=createAction(typeadmin)