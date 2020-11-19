import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const TurkmenNoun = (props) => {
    return(
		<table className="lemma-table"  border="1px solid #000000">
		<tbody>
		 <tr>
		  <th className="l1">
		  </th>
		  <th className="l1">
		   singular
		  </th>
		  <th className="l1">
		   plural
		  </th>
		 </tr>
		 <tr>
		  <th className="l1">
		   nominative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["NOM","SG","N"]'>
		    <Wordform editable={props.editable} features={['NOM', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["NOM","PL","N"]'>
		    <Wordform editable={props.editable} features={['NOM', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   accusative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ACC","SG","N"]'>
		    <Wordform editable={props.editable} features={['ACC', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ACC","PL","N"]'>
		    <Wordform editable={props.editable} features={['ACC', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   genitive
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["GEN","SG","N"]'>
		    <Wordform editable={props.editable} features={['GEN', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["GEN","PL","N"]'>
		    <Wordform editable={props.editable} features={['GEN', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   dative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DAT","SG","N"]'>
		    <Wordform editable={props.editable} features={['DAT', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DAT","PL","N"]'>
		    <Wordform editable={props.editable} features={['DAT', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   locative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["SG","N"]'>
		    <Wordform editable={props.editable} features={['SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["PL","N"]'>
		    <Wordform editable={props.editable} features={['PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   ablative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ABL","SG","N"]'>
		    <Wordform editable={props.editable} features={['ABL', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ABL","PL","N"]'>
		    <Wordform editable={props.editable} features={['ABL', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 </tbody>
		</table>





    );
}

export default TurkmenNoun;