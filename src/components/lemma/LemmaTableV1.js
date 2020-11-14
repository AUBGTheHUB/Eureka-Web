import React from 'react';
import { useState, useEffect } from 'react';
import lemmaService from '../../services/lemma';
import DimensionTable from './DimensionTable';
import PoSComponent from '../PoSComponent';
import TableTemplate from './TableTemplate';
import './LemmaTableV1.css';


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

export function getWordFromFeatures(features,optional_features=[],wordforms){
    console.log(features);
    console.log('peep');
    for(var word in wordforms){
       if ((wordforms[word].length === features.length) && (wordforms[word].every(feature=>features.includes(feature)))){
            return word;
       }
       else{
            if((wordforms[word].length === optional_features.length) && (wordforms[word].every(feature=>optional_features.includes(feature)))){
                return word
            }
       }

    }
    return '';
}



const LemmaTableV1 = (props) => {
    const [data, setData] = useState(null);
    const [pos, setPos] = useState([]);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');


    // process the data from api and format it for the table
    useEffect(() => {
        const getData = async () => {
            const lemma = await lemmaService.getLemma(props.lemma, props.lang);
            console.log(lemma);
            let data_dict = {};
            setPos(lemma.pos);
            setName(lemma.name);
            setLanguage(lemma.language.name);
            lemma.related_words.forEach(word => {
                let arr_list = data_dict[word.name] ? data_dict[word.name] : [];
                let arr = [];
                word.tagset.features.forEach(feat => {
                    console.log(arr);
                    console.log('arrrr');
                    console.log(data_dict);
                    if(!arr.includes(feat.label)){
                        arr.push(feat.label);
                    }
                    
                });
                data_dict = {
                    ...data_dict,
                    [word.name]: [...arr_list,arr]
                };
            });
            console.log('data')
            console.log(data_dict);
            setData(data_dict);
            console.log('data set');
        }
        getData();
    }, [])

    if (!data){
        return null;
    }
    if (data.length === 0){

    }
    else{
        console.log(language);
        console.log(pos.name);
        
        return (
            <div className="container-md">
                <PoSComponent name = {pos.name}/>
                <hr/>
                <h3 style={{textAlign: "center"}}>{language}: {name}</h3>
                <div className="container">
                    <TableTemplate language={language} pos={pos.name} wordforms={data}/>
                </div>
            </div>
        )
    }
}

export default LemmaTableV1;