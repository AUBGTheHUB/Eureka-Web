import { useState, useEffect } from 'react';
import React from 'react';

const Wordform = (props) => {
	const [wordform, setWordform] = useState('');

	useEffect(() =>{
		for(var word in props.wordforms) {
			for(var i in props.wordforms[word]){
				var feat_list = props.wordforms[word][i];
				if ((feat_list.length === props.features.length) && (feat_list.every(feature=>props.features.includes(feature)))){
					setWordform(word);
					return;
				}
				else{
					if ((feat_list.length === props.optional_features.length) && (feat_list.every(feature=>props.optional_features.includes(feature)))){
						setWordform(word);
						return;
					}
				}
			}
			
		}
		setWordform('nothing');
	})

	return (wordform);
}

export default Wordform;