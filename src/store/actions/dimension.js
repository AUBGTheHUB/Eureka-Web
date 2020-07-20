import {GET_ALL_DIMENSIONS} from './actionTypes';
import dimensionService from '../../services/dimension';

export const initializeDimensions = async () => {
    const dims = await dimensionService.getAll();
    return {
        type: GET_ALL_DIMENSIONS,
        data: dims
    }
}