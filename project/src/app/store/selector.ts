import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./state";


export const selectstore=createFeatureSelector<any>('posts')
export const selectapi = createSelector(selectstore,(state)=>{
    return state.posts;
})
export const selectfilterquocgia = createSelector(selectstore,(state)=>{
    return state.filterquocgia;
})
export const selectfiltertheloai=createSelector(selectstore,(state)=>{
    return state.filtertheloai
})
export const selectfilternam=createSelector(selectstore,(state)=>{
    return state.filternam
})
export const selectfiltersearch=createSelector(selectstore,(state)=>{
    return state.filtersearch
})
export const selectmovieclick=createSelector(selectstore,(state)=>{
    return state.clickmovie
})
export const selectlogin=createSelector(selectstore,(state)=>{
    return state.idlogin
})
export const selectadmin=createSelector(selectstore,(state)=>{
    return state.admin
})
export const selectidedit=createSelector(selectstore,(state)=>{
    return state.idedit
})