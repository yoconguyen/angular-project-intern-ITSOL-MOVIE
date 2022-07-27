import { postreducer } from "../trangchu/trangchu.reducer"
// import { trangchustate } from "../trangchu/trangchu.state"


export interface AppState {

posts:any
}
export const maketstate={

  posts:postreducer
}