import React from 'react';
import { useState, useEffect } from 'react';
import lemmaService from '../../services/lemma';
import DimensionTable from './DimensionTable';
import PoSComponent from '../PoSComponent';

/**
 * Creates an array of rows for each dimension, features as columns
 * @param {*} dimensions array consisting of arrays with dimension with features
 */
function getDimTables(dimensions){
    let rows = [];
    let i = 0;
    while(i<dimensions.length){
        if(i === dimensions.length-1){
            rows.push(
                <div key={i} style={{textAlign: "center"}} className="row">
                    <hr/>
                    <div key={i+1} className="col-md">
                        <DimensionTable name={dimensions[i][0]} dimension={dimensions[i][1]}/>
                    </div>
                </div>
            );
            break;
        }
        rows.push(
            <div key={i} className="row">
            <hr/>
                <div key={i+1} className="col-md border-right">
                    <DimensionTable name={dimensions[i][0]} dimension={dimensions[i][1]}/>
                </div>
                <div className="col-md">
                    <DimensionTable name={dimensions[i+1][0]} dimension={dimensions[i+1][1]}/>
                </div>
            </div>
        );
        i += 2;
    }
    return rows;
}

const LemmaTableV1 = (props) => {
    const [data, setData] = useState(null);
    const [pos, setPos] = useState([]);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');


    // process the data from api and format it for the table
    useEffect(() => {
        const getData = async () => {
            const lemma = await lemmaService.getLemma(props.lemma);
            console.log(lemma);
            let data = {};
            setPos(lemma.pos);
            setName(lemma.name);
            setLanguage(lemma.language.name);
            lemma.related_words.forEach(word => {
                word.tagset.features.forEach(feat => {
                    let arr = data[feat.dimension.name] ? data[feat.dimension.name] : {}
                    let words = data[feat.dimension.name] && data[feat.dimension.name][feat.name] && data[feat.dimension.name][feat.name]["words"] ? data[feat.dimension.name][feat.name]["words"] : [];
                    if(!words.includes(word.name)){
                        words.push(word.name)
                    }
                    data = {
                        ...data, 
                        [feat.dimension.name]: {
                            ...arr,
                            [feat.name]: {
                                words: [...words]
                            }
                        }}
                })
            })
            setData(data);
        }
        getData();
    }, [])

    if (!data){
        return null;
    }
    if (data.length === 0){

    }
    else{
        const dimTables = getDimTables(Object.entries(data));
        return (
            <div className="container-md">
                <PoSComponent name = {pos.name}/>
                <hr/>
                <h3 style={{textAlign: "center"}}>{language}: {name}</h3>
                <div className="container">
                    {dimTables.map(row => row)}
                </div>
            </div>
        )
    }
}

export default LemmaTableV1;