import {GET_ALL_LEMMAS, GET_LEMMA_TABLE} from './actionTypes';
import lemmaService from '../../services/lemma';

export const initializeLemmas = async () => {
    const lemmas = await lemmaService.getAll();
    return {
        type: GET_ALL_LEMMAS,
        data: lemmas
    }
}

export const getLemmaTable = async (name) => {
    const lemma = await lemmaService.getLemmaTable(name);
    return {
        type: GET_LEMMA_TABLE,
        data: lemma
    }
}