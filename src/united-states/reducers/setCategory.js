const SetCategory = (state = '', action) => {
    switch(action.type){
        default: return state
        case 'CATEGORY_ON_CHANGE': return action.payload
    }
}

export default SetCategory