export const formatLemmaDataTable = (lemma) => {
    let columns = [];
    let data = [];

    // for 
}


/**
 * Format dimension object for the editable table
 * {
 *      feat1: {
 *              words: [...]
 *      },
 *      feat2: {
 *              ...
 *      }
 * }
 * @param {*} dim object with features as properties
 */
export const formatDimensionDataTable = (dim) => {
    let columns = [];
    let data = [];
    const dimObj = Object.entries(dim);
    let maxLen = dimObj[0][1]["words"].length;
    let obj = {};
    dimObj.forEach(feat => {
        columns.push({
            dataField: feat[0],
            text: feat[0]
        });
        maxLen = feat[1]["words"].length > maxLen ? feat[1]["words"].length : maxLen;
    });
    const numCols = dimObj.length;
    for (let i=0; i<maxLen; i++){
        let obj = {};
        for(let k=0; k<numCols; k++){
            obj[dimObj[k][0]] = dimObj[k][1]["words"][i];
        }
        data.push(obj);
    }
    return {
        columns: columns,
        data: data
    }
}