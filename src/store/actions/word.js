import {GET_ALL_WORDS, GET_WORD} from './actionTypes';
import wordService from '../../services/word';

export const initializeWords = async () => {
    const words = await wordService.getAll();
    return {
        type: GET_ALL_WORDS,
        data: words
    }
}

export const getWord = async (name) => {
    const word = await WordService.getWord(name);
    return {
        type: GET_WORD,
        data: word
    }
}