import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const AlbanianNoun = (props) => {
    return(
		<table className="lemma-table"  border="1px solid #000000">
		 <tr>
		  <th className="l2" colspan="1" rowspan="2">
		  </th>
		  <th className="l2" colspan="2">
		   indefinite
		  </th>
		  <th className="l2" colspan="2">
		   definite
		  </th>
		 </tr>
		 <tr>
		  <th className="l1">
		   singular
		  </th>
		  <th className="l1">
		   plural
		  </th>
		  <th className="l1">
		   singular
		  </th>
		  <th className="l1">
		   plural
		  </th>
		 </tr>
		 <tr>
		  <th className="l2" colspan="1">
		   nominative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["SG","N","NOM"]'>
		    <Wordform features={['SG', 'N', 'NOM']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["PL","N","NOM"]'>
		    <Wordform features={['PL', 'N', 'NOM']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","SG","N","NOM"]'>
		    <Wordform features={['DEF', 'SG', 'N', 'NOM']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","PL","N","NOM"]'>
		    <Wordform features={['DEF', 'PL', 'N', 'NOM']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="1">
		   accusative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["SG","N","ACC"]'>
		    <Wordform features={['SG', 'N', 'ACC']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["PL","N","ACC"]'>
		    <Wordform features={['PL', 'N', 'ACC']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","SG","N","ACC"]'>
		    <Wordform features={['DEF', 'SG', 'N', 'ACC']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","PL","N","ACC"]'>
		    <Wordform features={['DEF', 'PL', 'N', 'ACC']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="1">
		   genitive
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["SG","N","GEN"]'>
		    <Wordform features={['SG', 'N', 'GEN']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["PL","N","GEN"]'>
		    <Wordform features={['PL', 'N', 'GEN']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","SG","N","GEN"]'>
		    <Wordform features={['DEF', 'SG', 'N', 'GEN']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","PL","N","GEN"]'>
		    <Wordform features={['DEF', 'PL', 'N', 'GEN']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="1">
		   dative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["SG","N","DAT"]'>
		    <Wordform features={['SG', 'N', 'DAT']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["PL","N","DAT"]'>
		    <Wordform features={['PL', 'N', 'DAT']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","SG","N","DAT"]'>
		    <Wordform features={['DEF', 'SG', 'N', 'DAT']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","PL","N","DAT"]'>
		    <Wordform features={['DEF', 'PL', 'N', 'DAT']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="1">
		   ablative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["SG","N","ABL"]'>
		    <Wordform features={['SG', 'N', 'ABL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["PL","N","ABL"]'>
		    <Wordform features={['PL', 'N', 'ABL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","SG","N","ABL"]'>
		    <Wordform features={['DEF', 'SG', 'N', 'ABL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DEF","PL","N","ABL"]'>
		    <Wordform features={['DEF', 'PL', 'N', 'ABL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		</table>



    );
}

export default AlbanianNoun;