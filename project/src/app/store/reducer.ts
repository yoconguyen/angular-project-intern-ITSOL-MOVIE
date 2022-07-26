import { createReducer, on } from "@ngrx/store";
import { actionadmin, filtermovienam, filtermoviequocgia, filtermoviesearch, filtermovietheloai, getmoviesussec, typeadmin, typeloginid, typemovieclick, typesendidedit } from "../store/action";

export function postreducer(state = [], action: any) {
  switch (action.type) {
    case getmoviesussec:
      return { ...state, posts: action.payload };

    case filtermoviequocgia:
      return { ...state, filterquocgia: action.payload };

    case filtermovietheloai:
      return { ...state, filtertheloai: action.payload };
    case filtermovienam:
      return { ...state, filternam: action.payload };
    case filtermoviesearch:
      return { ...state, filtersearch: action.payload };
    case typemovieclick:
      return { ...state, clickmovie: action.payload };
    case typeloginid:
      return { ...state, idlogin: action.payload };
     case typeadmin:
      return {...state,admin:action.payload} ;
      case typesendidedit:
        return {...state,idedit:action.payload} 
    default:
      return state;
  }
}