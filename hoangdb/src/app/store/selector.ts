import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./state";


export const selectstore=createFeatureSelector<any>('posts')
export const selectname = createSelector(selectstore,(state)=>{
    return state.posts;
})