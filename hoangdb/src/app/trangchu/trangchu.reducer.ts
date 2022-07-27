import { createReducer, on } from "@ngrx/store";
import { getmoviesussec } from "../store/action";
import { initialState } from "./trangchu.state";

export function postreducer(state = [], action:any) {
    switch (action.type) {
      case getmoviesussec:
        return {...state,posts:action.payload}
      default:
        return state
    }
  }