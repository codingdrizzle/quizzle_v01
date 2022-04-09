const Score = (state = 0, action) => {
    switch(action.type){
        default: return state
        case 'IS_CORRECT': return state + 1
    }
}

export default Score