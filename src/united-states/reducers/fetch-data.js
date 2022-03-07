const FetchData = (state = [], action) => {
    switch(action.type){
        default:
            return state
        case 'FETCH_DATA':
            let data = [...state, ...action.payload]
            return data
    }
}

export default FetchData