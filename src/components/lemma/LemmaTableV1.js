import React from 'react';
import { useState, useEffect } from 'react';
import lemmaService from '../../services/lemma';
import DimensionTable from './DimensionTable';
import PoSComponent from '../PoSComponent';
import TableTemplate from './TableTemplate';
import './LemmaTableV1.css';


const LemmaTableV1 = (props) => {
    const [data, setData] = useState(null);
    const [pos, setPos] = useState([]);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');


    // process the data from api and format it for the table
    useEffect(() => {
        const getData = async () => {
            const lemma = await lemmaService.getLemma(props.lemma, props.lang);
            let data_dict = {};
            setPos(lemma.pos);
            setName(lemma.name);
            setLanguage(lemma.language.name);
            lemma.related_words.forEach(word => {
                let arr_list = data_dict[word.name] ? data_dict[word.name] : [];
                let arr = [];
                word.tagset.features.forEach(feat => {
                    if(!arr.includes(feat.label)){
                        arr.push(feat.label);
                    }
                    
                });
                data_dict = {
                    ...data_dict,
                    [word.name]: [...arr_list,arr]
                };
            });
            setData(data_dict);
        }
        getData();
    }, [])

    if (!data){
        return null;
    }
    if (data.length === 0){

    }
    else{
        
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