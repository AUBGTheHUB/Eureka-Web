import React from 'react';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import dimensionService from '../../services/dimension';
import lemmaService from '../../services/lemma';


const LemmaTableV1 = (props) => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [pos, setPos] = useState([]);
    const [showDialog, setShowDialog] = useState(false);

    // process the data from api and format it for the table
    useEffect(() => {
        const getData = async () => {
            const lemma = await lemmaService.getLemma(props.lemma);
            setData(lemma.related_words);
            setPos(lemma.pos);
            const cols = new Set([]);
            lemma.related_words.forEach(word => {
                word.tagset.features.forEach(feat => {
                    if(feat.dimension.name === 'Tense'){
                        cols.add(feat.name);
                    }
                })
            })
            setColumns(Array.from(cols));
        }
        getData();
    }, [])

    if(!columns){
        return null;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {columns.slice(0, columns.length/2).map((tense, i) => {
                                    return(
                                        <th key={i}>{tense}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {/* {data.map((word, i) => {
                                if(word.tagset.features)
                            })} */}
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </tbody>
                    </Table>
                </div>
                <div className="col-md">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {columns.slice(columns.length/2).map((tense, i) => {
                                    return(
                                        <th key={i}>{tense}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {/* {data.map(word => {
                                <>
                            })} */}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default LemmaTableV1;