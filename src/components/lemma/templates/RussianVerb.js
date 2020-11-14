import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const RussianVerb = (props) => {
    return(
		<table className="lemma-table"  border="1px solid #000000">
		 <tr>
		  <th className="l3" colspan="3" rowspan="2">
		  </th>
		  <th className="l3" colspan="3">
		   singular
		  </th>
		  <th className="l3" colspan="3">
		   plural
		  </th>
		 </tr>
		 <tr>
		  <th className="l2">
		   first person
		  </th>
		  <th className="l2">
		   second person
		  </th>
		  <th className="l2">
		   third person
		  </th>
		  <th className="l2">
		   first person
		  </th>
		  <th className="l2">
		   second person
		  </th>
		  <th className="l2">
		   third person
		  </th>
		 </tr>
		 <tr>
		  <th className="l3" rowspan="5">
		   indicative
		  </th>
		  <th className="l2" colspan="2">
		   present
		  </th>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","PRS","1","SG"]'>
		    <Wordform features={['V', 'PRS', '1', 'SG', 'IND']} optional_features={['V', 'PRS', '1', 'SG']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","PRS","2","SG"]'>
		    <Wordform features={['V', 'PRS', '2', 'SG', 'IND']} optional_features={['V', 'PRS', '2', 'SG']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","PRS","3","SG"]'>
		    <Wordform features={['V', 'PRS', '3', 'SG', 'IND']} optional_features={['V', 'PRS', '3', 'SG']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","PRS","1","PL"]'>
		    <Wordform features={['V', 'PRS', '1', 'PL', 'IND']} optional_features={['V', 'PRS', '1', 'PL']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","PRS","2","PL"]'>
		    <Wordform features={['V', 'PRS', '2', 'PL', 'IND']} optional_features={['V', 'PRS', '2', 'PL']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","PRS","3","PL"]'>
		    <Wordform features={['V', 'PRS', '3', 'PL', 'IND']} optional_features={['V', 'PRS', '3', 'PL']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   future
		  </th>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","FUT","1","SG"]'>
		    <Wordform features={['V', 'FUT', '1', 'SG', 'IND']} optional_features={['V', 'FUT', '1', 'SG']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","FUT","2","SG"]'>
		    <Wordform features={['V', 'FUT', '2', 'SG', 'IND']} optional_features={['V', 'FUT', '2', 'SG']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","FUT","3","SG"]'>
		    <Wordform features={['V', 'FUT', '3', 'SG', 'IND']} optional_features={['V', 'FUT', '3', 'SG']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","FUT","1","PL"]'>
		    <Wordform features={['V', 'FUT', '1', 'PL', 'IND']} optional_features={['V', 'FUT', '1', 'PL']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","FUT","2","PL"]'>
		    <Wordform features={['V', 'FUT', '2', 'PL', 'IND']} optional_features={['V', 'FUT', '2', 'PL']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["IND"]' req_features='["V","FUT","3","PL"]'>
		    <Wordform features={['V', 'FUT', '3', 'PL', 'IND']} optional_features={['V', 'FUT', '3', 'PL']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" rowspan="3">
		   past
		  </th>
		  <th className="l1">
		   feminine
		  </th>
		  <td className="table-cell" colspan="3">
		   <span opt_features='["IND"]' req_features='["V","PST","FEM","SG"]'>
		    <Wordform features={['V', 'PST', 'FEM', 'SG', 'IND']} optional_features={['V', 'PST', 'FEM', 'SG']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell" colspan="3" rowspan="3">
		   <span opt_features='["IND"]' req_features='["V","PST""PL"]'>
		    <Wordform features={['V', 'PSTPL', 'IND']} optional_features={['V', 'PSTPL']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   masculine
		  </th>
		  <td className="table-cell" colspan="3">
		   <span opt_features='["IND"]' req_features='["V","PST","MASC","SG"]'>
		    <Wordform features={['V', 'PST', 'MASC', 'SG', 'IND']} optional_features={['V', 'PST', 'MASC', 'SG']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   neuter
		  </th>
		  <td className="table-cell" colspan="3">
		   <span opt_features='["IND"]' req_features='["V","PST","NEUT","SG"]'>
		    <Wordform features={['V', 'PST', 'NEUT', 'SG', 'IND']} optional_features={['V', 'PST', 'NEUT', 'SG']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l3" colspan="3">
		   imperative
		  </th>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IMP","2","SG"]'>
		    <Wordform features={['V', 'IMP', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["V","IMP","2","PL"]'>
		    <Wordform features={['V', 'IMP', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		  </td>
		 </tr>
		</table>


    );
}

export default RussianVerb;