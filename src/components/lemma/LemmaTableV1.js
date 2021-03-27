import React, { useContext, useEffect, useState } from 'react';
import LemmaService from '../../services/lemma';
import ProposalService from '../../services/proposals';
import { Context } from '../../store';
import { emptyEditedForms, setError } from '../../store/actions/other';
import PoSComponent from '../PoSComponent';
import ResultDialog from '../submit-dialogs/Result';
import SubmitDialog from '../submit-dialogs/SubmitDialog';
import EditButtons from './EditButtons';
import './LemmaTableV1.css';
import TableTemplate from './TableTemplate';

const LemmaTableV1 = (props) => {
    const [state, dispatch] = useContext(Context);
    const [rawData, setRawData] = useState(null);
    const [data, setData] = useState(null);
    const [pos, setPos] = useState([]);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [editable, setEditable] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [showResult, setshowResult] = useState(false);

    // process the data from api and format it for the table
    useEffect(() => {
        const getData = async () => {
            const lemma = await LemmaService.getOne(props.lemma, props.lang);
            setRawData(lemma);
            let data_dict = {};
            setPos(lemma.pos);
            setName(lemma.name);
            setLanguage(lemma.language.name);
            lemma.related_words.forEach(word => {
                let arr_list = data_dict[word.name] ? (data_dict[word.name]['features'] || []) : [];
                let arr = [];
                word.tagset.features.forEach(feat => {
                    if(!arr.includes(feat.label)){
                        arr.push(feat.label);
                    }
                    
                });
                data_dict = {
                    ...data_dict,
                    [word.name]: {
                        id: word.id,
                        features: [...arr_list,arr]
                    }
                };
            });
            setData(data_dict);
        }
        getData();
    }, []);
    
    const handleSubmit = async (note) => {
        setShowDialog(false);
        setEditable(false);
        try {
            const _response = await ProposalService.sendProposals(state.selectedLanguage.walsCode, Object.values(state.editedForms), state.user.token, note);
            setshowResult(true);
            dispatch(emptyEditedForms());
        } catch (error) {
            dispatch(setError(error));
        }
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
                <ResultDialog 
                    showDialog={showResult} 
                    text={state.error ? `Unexpected error during your proposal request`: `Succesfully submitted your edit request!`}
                    title={state.error ? `Error` : `Success`}
                    handleClose={() => setshowResult(false)}
                />
                <SubmitDialog showDialog={showDialog} setShowDialog={setShowDialog} onSubmit={handleSubmit}/>
                <EditButtons editable={editable} showDialog={showDialog} setEditable={setEditable} setShowDialog={setShowDialog} />
                <div className="container">
                    <TableTemplate data={rawData} language={language} pos={pos.name} wordforms={data} editable={editable} />
                </div>
            </div>
        )
    }
}

export default LemmaTableV1;