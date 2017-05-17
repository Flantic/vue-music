export const changeHomePage = (state,payload)=>{
    state.HomePageNumber = payload.num
}
 
export const changePlayerStatus = (state) =>{
    state.PlayerStatus = !state.PlayerStatus
}  