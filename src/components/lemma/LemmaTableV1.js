import React from 'react';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import dimensionService from '../../services/dimension';
import lemmaService from '../../services/lemma';


const LemmaTableV1 = (props) => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [showDialog, setShowDialog] = useState(false);

    // process the data from api and format it for the table
    useEffect(() => {
    const getData = async () => {
        const lemma = await lemmaService.getLemma(props.lemma);
        setData(lemma);
        setColumns(lemma.related_words[0].dimensions.Tense);
    }
    getData();
    }, [])
    console.log(data);
    console.log(columns);
    return (
        <div class="container">
            <div class="row">
                <div class="col-md">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {columns.slice(0, columns.length/2).map(tense => {
                                    return(
                                        <th>{tense}</th>
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
                <div class="col-md">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                {columns.slice(columns.length/2).map(tense => {
                                    return(
                                        <th>{tense}</th>
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