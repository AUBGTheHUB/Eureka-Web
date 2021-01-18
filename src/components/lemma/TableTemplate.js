import React from 'react';
import DefaultTemplate from './DefaultTemplate';
import AlbanianNoun from './templates/AlbanianNoun';
import AlbanianVerb from './templates/AlbanianVerb';
import BulgarianAdjective from './templates/BulgarianAdjective';
import BulgarianNoun from './templates/BulgarianNoun';
import BulgarianVerb from './templates/BulgarianVerb';
import EnglishVerb from './templates/EnglishVerb';
import GermanNoun from './templates/GermanNoun';
import GermanVerb from './templates/GermanVerb';
import RussianNoun from './templates/RussianNoun';
import RussianVerb from './templates/RussianVerb';
import TurkmenNoun from './templates/TurkmenNoun';


const TableTemplate = (props) => {
	let comp_to_render = <p></p>;
	switch(props.language){
            case 'Bulgarian':
                switch(props.pos){
                    case 'Adjective':
                        comp_to_render = <BulgarianAdjective editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    case 'Verb':
                        comp_to_render = <BulgarianVerb editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                        comp_to_render = <BulgarianNoun editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break;
            case 'Russian':
                switch(props.pos){
                    case 'Adjective':
                        comp_to_render = <RussianAdjective editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    case 'Verb':
                        comp_to_render = <RussianVerb editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                        comp_to_render = <RussianNoun editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break;
            case 'Albanian':
                switch(props.pos){
                    case 'Verb':
                        comp_to_render = <AlbanianVerb editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                        comp_to_render = <AlbanianNoun editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break;   
            case 'German':
                switch(props.pos){
                    case 'Verb':
                    case 'Participle':
                        comp_to_render = <GermanVerb editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                        comp_to_render = <GermanNoun editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break; 
            case 'Turkmen':
                switch(props.pos){
                    case 'Noun':
                        comp_to_render = <TurkmenNoun editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break; 
            case 'English':
                switch(props.pos){
                    case 'Verb':
                        comp_to_render = <EnglishVerb editable={props.editable} wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>
                }
                break;
            default:
                return comp_to_render = <DefaultTemplate data={props.data} editable={props.editable}/>
        }

    return(comp_to_render);

}

export default TableTemplate;