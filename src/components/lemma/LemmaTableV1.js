import React, { useEffect, useState } from 'react';
import lemmaService from '../../services/lemma';
import PoSComponent from '../PoSComponent';
import SubmitDialog from '../submit-dialogs/SubmitDialog';
import EditButtons from './EditButtons';
import './LemmaTableV1.css';
import TableTemplate from './TableTemplate';



const LemmaTableV1 = (props) => {
    const [rawData, setRawData] = useState(null);
    const [data, setData] = useState(null);
    const [pos, setPos] = useState([]);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [editable, setEditable] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    // process the data from api and format it for the table
    useEffect(() => {
        const getData = async () => {
            const lemma = await lemmaService.getLemma(props.lemma, props.lang);
            setRawData(lemma);
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
    }, []);

    const handleUpdate = () => {
        setShowDialog(false);
        setEditable(false);
      };
      
    if (!data){
        return null;
    }
    if (data.length === 0){
        return null;
    }
    else{
        return (
            <div className="container-md">
                <PoSComponent name = {pos.name}/>
                <hr/>
                <h3 style={{textAlign: "center"}}>{language}: {name}</h3>
                <SubmitDialog showDialog={showDialog} setShowDialog={setShowDialog} onSubmit={handleUpdate}/>
                <EditButtons editable={editable} showDialog={showDialog} setEditable={setEditable} setShowDialog={setShowDialog} />
                <div className="container">
                    <TableTemplate data={rawData} language={language} pos={pos.name} wordforms={data} editable={editable} />
                </div>
            </div>
        )
    }
}

export default LemmaTableV1;