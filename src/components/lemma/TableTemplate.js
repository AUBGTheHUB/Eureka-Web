import React from 'react';
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
	let comp_to_render = <p></p>;

	switch(props.language){
            case 'Bulgarian':
                switch(props.pos){
                    case 'Adjective':
                        comp_to_render = <BulgarianAdjective wordforms={props.wordforms}/>;
                        break;
                    case 'Verb':
                        comp_to_render = <BulgarianVerb wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                        comp_to_render = <BulgarianNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break;
            case 'Russian':
                switch(props.pos){
                    case 'Adjective':
                        comp_to_render = <RussianAdjective wordforms={props.wordforms}/>;
                        break;
                    case 'Verb':
                        comp_to_render = <RussianVerb wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                        comp_to_render = <RussianNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break;
            case 'Albanian':
                switch(props.pos){
                    case 'Verb':
                        comp_to_render = <AlbanianVerb wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                        comp_to_render = <AlbanianNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break;   
            case 'German':
                switch(props.pos){
                    case 'Verb':
                        comp_to_render = <GermanVerb wordforms={props.wordforms}/>;
                        break;
                    case 'Noun':
                        comp_to_render = <GermanNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break; 
            case 'Turkmen':
                switch(props.pos){
                    case 'Noun':
                        comp_to_render = <TurkmenNoun wordforms={props.wordforms}/>;
                        break;
                    default:
                        comp_to_render = <p></p>;
                }
                break; 
            default:
                comp_to_render = <p></p>;
        }

    return(comp_to_render);

}

export default TableTemplate;