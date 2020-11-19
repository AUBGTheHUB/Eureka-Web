import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const GermanVerb = (props) => {
    return(
		<table className="lemma-table"  border="1px solid #000000">
		<tbody>
		 <tr>
		  <th className="l2" colspan="2" rowspan="2">
		  </th>
		  <th className="l2" colspan="3">
		   singular
		  </th>
		  <th className="l2" colspan="3">
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
		  <th className="l2" rowspan="2">
		   indicative
		  </th>
		  <th className="l1">
		   present
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PRS","1","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PRS","2","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PRS","3","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PRS","1","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PRS","2","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PRS","3","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   past
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PST","1","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PST","2","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PST","3","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PST","1","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PST","2","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IND","PST","3","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" rowspan="2">
		   subjunctive
		  </th>
		  <th className="l1">
		   present
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PRS","1","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PRS","2","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PRS","3","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PRS","1","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PRS","2","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PRS","3","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   past
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PST","1","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PST","2","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PST","3","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PST","1","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PST","2","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","SBJV","PST","3","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   imperative
		  </th>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IMP","2","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'IMP', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IMP","2","PL"]'>
		    <Wordform editable={props.editable} features={['V', 'IMP', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		  </td>
		 </tr>
		 </tbody>
		</table>








    );
}

export default GermanVerb;