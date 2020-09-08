import React from 'react';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import lemmaService from '../../services/lemma';
import DimensionTable from './DimensionTable';
import PoSComponent from '../PoSComponent';


const LemmaTableV1 = (props) => {
    const [data, setData] = useState(null);
    const [pos, setPos] = useState([]);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [showDialog, setShowDialog] = useState(false);


    // process the data from api and format it for the table
    useEffect(() => {
        const getData = async () => {
            const lemma = await lemmaService.getLemma(props.lemma);
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
    return (
        <div>
            <PoSComponent name = {pos}/>
            <hr/>
            <h2 style={{textAlign: "center"}}>{language}: {name}</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        {Object.entries(data).slice(0,2).map((dim, i)=> {
                            return(
                                <DimensionTable name={dim[0]} dimension={dim[1]}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LemmaTableV1;