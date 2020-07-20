const initialState = [];

const lemmaReducer = (state=initialState, action) => {
    switch (action.type){
        case 'GET_ALL_LEMMAS':
            return action.data
        case 'GET_LEMMA_TABLE':
            return action.data
        default:
            return state
    }
}

export default lemmaReducer;