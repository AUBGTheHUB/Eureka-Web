import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const EnglishVerb = (props) => {
    return(
		<table className="lemma-table"  border="1px solid #000000">
		 <tr>
		  <th className="table-title" colspan="4">
		   Finite Verbforms
		  </th>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2" rowspan="1">
		  </th>
		  <th className="l2" colspan="1">
		   present
		  </th>
		  <th className="l2" colspan="1">
		   past
		  </th>
		 </tr>
		 <tr>
		  <th className="l2">
		   singular
		  </th>
		  <th className="l1">
		   third person
		  </th>
		  <td className="table-cell" colspan="1">
		   <span opt_features="[]" req_features='["V","PRS","3","SG"]'>
		    <Wordform editable={props.editable} features={['V', 'PRS', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		  </td>
		 </tr>
		 <tr>
		  <th>
		  </th>
		  <th>
		  </th>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","PST"]'>
		    <Wordform editable={props.editable} features={['V', 'PST']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="table-title" colspan="4">
		   Nonfinite Verbforms
		  </th>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		  </th>
		  <th>
		   present
		  </th>
		  <th>
		   past
		  </th>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2" rowspan="1">
		   participle
		  </th>
		  <td className="table-cell" colspan="1">
		   <span opt_features="[]" req_features='["V","V.PTCP","PRS"]'>
		    <Wordform editable={props.editable} features={['V', 'V.PTCP', 'PRS']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell" colspan="1">
		   <span opt_features="[]" req_features='["V","V.PTCP","PST"]'>
		    <Wordform editable={props.editable} features={['V', 'V.PTCP', 'PST']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   infinitive
		  </th>
		  <td className="table-cell" colspan="2">
		   <span opt_features="[]" req_features='["V","NFIN"]'>
		    <Wordform editable={props.editable} features={['V', 'NFIN']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		</table>









    );
}

export default EnglishVerb;