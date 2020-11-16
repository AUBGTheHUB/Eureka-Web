const initialState = [
    {name: "Bulgarian", walsCode: "bul", family: "Indo-European", genus: "Slavic", lemmas: 2568, words: 55370},
    {name: "Albanian", walsCode: "sqi", family: "Indo-European", genus: "Albanian", lemmas: 589, words: 33483},
    {name: "Turkmen", walsCode: "tuk", family: "Altaic", genus: "Turkic", lemmas: 68, words: 810 },
    {name: "English", walsCode: "eng", family: "Indo-European", genus: "Germanic", lemmas: 22765, words: 115523}
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