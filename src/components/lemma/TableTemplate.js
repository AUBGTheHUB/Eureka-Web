import React from 'react';
import { useState, useEffect } from 'react';
import { getWordFromFeatures } from './LemmaTableV1';
import BulgarianVerb from './templates/BulgarianVerb';
import BulgarianAdjective from './templates/BulgarianAdjective';
import BulgarianNoun from './templates/BulgarianNoun';
import AlbanianVerb from './templates/AlbanianVerb';
import AlbanianNoun from './templates/AlbanianNoun';
import GermanVerb from './templates/GermanVerb';
import GermanNoun from './templates/GermanNoun';
import RussianNoun from './templates/RussianNoun';
import RussianVerb from './templates/RussianVerb';
import TurkmenNoun from './templates/TurkmenNoun';


const TableTemplate = (props) => {
	console.log('Template rendered');
	console.log(props.wordforms);
	console.log(props.language);
	console.log(props.pos);
	let comp_to_render = <p>doodoo</p>;

	switch(props.language){
            case 'Bulgarian':
            	console.log('did Bulg');
                switch(props.pos){
                    case 'Adjective':
                    	console.log('did adj');
                        comp_to_render = <BulgarianAdjective wordforms={props.wordforms}/>;
                        break;
                    case 'Verb':
                    	console.log('did verb');
                        comp_to_render = <BulgarianVerb wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                    	console.log('did noun');
                        comp_to_render = <BulgarianNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                    	console.log('did default1');
                        comp_to_render = <p></p>;
                }
                break;
            case 'Russian':
            	console.log('did Bulg');
                switch(props.pos){
                    case 'Adjective':
                    	console.log('did adj');
                        comp_to_render = <RussianAdjective wordforms={props.wordforms}/>;
                        break;
                    case 'Verb':
                    	console.log('did verb');
                        comp_to_render = <RussianVerb wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                    	console.log('did noun');
                        comp_to_render = <RussianNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                    	console.log('did default1');
                        comp_to_render = <p></p>;
                }
                break;
            case 'Albanian':
            	console.log('did Bulg');
                switch(props.pos){
                    case 'Verb':
                    	console.log('did verb');
                        comp_to_render = <AlbanianVerb wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                    	console.log('did noun');
                        comp_to_render = <AlbanianNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                    	console.log('did default1');
                        comp_to_render = <p></p>;
                }
                break;   
            case 'German':
            	console.log('did Bulg');
                switch(props.pos){
                    case 'Verb':
                    	console.log('did verb');
                        comp_to_render = <GermanVerb wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                    	console.log('did noun');
                        comp_to_render = <GermanNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                    	console.log('did default1');
                        comp_to_render = <p></p>;
                }
                break; 
            case 'Turkmen':
            	console.log('did Bulg');
                switch(props.pos){
                    case 'Noun':
                    	console.log('did noun');
                        comp_to_render = <TurkmenNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                    	console.log('did default1');
                        comp_to_render = <p></p>;
                }
                break; 
            default:
            	console.log('did default2');
                comp_to_render = <p></p>;
        }

    return(comp_to_render);

}

export default TableTemplate;