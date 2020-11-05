const initialState = [
    {name: "English", walsCode: "eng"},
    {name: "Bulgarian", walsCode: "bul"},
    {name: "Albanian", walsCode: "sqi"},
    {name: "Turkmen", walsCode: "tuk"}
];

const languageReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ALL_LANGUAGES':
            return action.data;
        default:
            return state;
    }
}

export default languageReducer;