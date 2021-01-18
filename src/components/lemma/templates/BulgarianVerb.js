import React from 'react';
import Wordform from '../Wordform.js';

const BulgarianVerb = (props) => {
    return(
      <table border="1px solid #000000">
       <tbody>
        <tr>
         <th className="l2" colSpan="2" rowSpan="2">
         </th>
         <th className="l2" colSpan="3">
          singular
         </th>
         <th className="l2" colSpan="3">
          plural
         </th>
        </tr>
        <tr>
         <th className="l1">
          first person
         </th>
         <th className="l1">
          second person
         </th>
         <th className="l1">
          third person
         </th>
         <th className="l1">
          first person
         </th>
         <th className="l1">
          second person
         </th>
         <th className="l1">
          third person
         </th>
        </tr>
        <tr>
         <th className="l2" rowSpan="3">
          indicative
         </th>
         <th className="l1">
          present
         </th>
         <td>
          <span opt_features="[]" req_features='["V","IND","PRS","1","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PRS","2","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PRS","3","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PRS","1","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PRS","2","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PRS","3","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
        </tr>
        <tr>
         <th className="l1">
          imperfect
         </th>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","PROG","1","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', 'PROG', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","PROG","2","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', 'PROG', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","PROG","3","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', 'PROG', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","PROG","1","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', 'PROG', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","PROG","2","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', 'PROG', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","PROG","3","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', 'PROG', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
        </tr>
        <tr>
         <th className="l1">
          past
         </th>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","1","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","2","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","3","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","1","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","2","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IND","PST","3","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IND', 'PST', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
        </tr>
        <tr>
         <th className="l2" colSpan="2">
          imperative
         </th>
         <td>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IMP","2","SG"]'>
           <Wordform editable={props.editable} features={['V', 'IMP', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
         </td>
         <td>
         </td>
         <td>
          <span opt_features="[]" req_features='["V","IMP","2","PL"]'>
           <Wordform editable={props.editable} features={['V', 'IMP', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
          </span>
         </td>
         <td>
         </td>
        </tr>
       </tbody>
      </table>



    );
}

export default BulgarianVerb;