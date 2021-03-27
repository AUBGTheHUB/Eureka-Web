import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../store';
import { addEditedForm } from '../../store/actions/other';

const Wordform = (props) => {
	const [state, dispatch] = useContext(Context);
	const [wordform, setWordform] = useState('');
	const [originalForm, setOriginalForm] = useState('');
	let comp_to_render = '';
	useEffect(() => {
		if(originalForm && originalForm !== wordform) {
			dispatch(addEditedForm([props.wordforms[originalForm]['id'], {word: props.wordforms[originalForm]['id'], proposedWord: wordform}]));
		}
	}, [wordform]);
	useEffect(() =>{
		for(var word in props.wordforms) {
			for(var i in props.wordforms[word]['features']){
				var feat_list = props.wordforms[word]['features'][i];
				if ((feat_list.length === props.features.length) && (feat_list.every(feature=>props.features.includes(feature)))){
					setOriginalForm(word);
					setWordform(word);
					return;
				}
				else{
					if ((feat_list.length === props.optional_features.length) && (feat_list.every(feature=>props.optional_features.includes(feature)))){
						setOriginalForm(word);
						setWordform(word);
						return;
					}
				}
			}
		}
	}, [props.editable]);

	if(props.editable)
		comp_to_render = <input onChange={e => setWordform(e.target.value)} type='text' placeholder={wordform} value={wordform} />;
	else
		comp_to_render = wordform;

	return (comp_to_render);
}

export default Wordform;