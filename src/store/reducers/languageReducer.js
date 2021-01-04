const initialState = [
    {
        name: "All",
        walsCode: "all"
    }
];

const languageReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ALL_LANGUAGES':
            return state.concat(action.data.results);
        default:
            return state;
    }
}

export default languageReducer;