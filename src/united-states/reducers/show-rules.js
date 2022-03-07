const ShowRules = (state = 'hidden', action) => {
    switch(action.type){
        case 'SHOW_RULES': return 'visible'
        case 'HIDE_RULES': return 'hidden'
        default: return state
    }
}

export default ShowRules;