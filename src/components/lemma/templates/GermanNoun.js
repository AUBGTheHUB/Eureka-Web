import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const GermanNoun = (props) => {
    return(
		<table className="lemma-table"  border="1px solid #000000">
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
		    <Wordform features={['NOM', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["NOM","PL","N"]'>
		    <Wordform features={['NOM', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   accusative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ACC","SG","N"]'>
		    <Wordform features={['ACC', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ACC","PL","N"]'>
		    <Wordform features={['ACC', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   genitive
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["GEN","SG","N"]'>
		    <Wordform features={['GEN', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["GEN","PL","N"]'>
		    <Wordform features={['GEN', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   dative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DAT","SG","N"]'>
		    <Wordform features={['DAT', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DAT","PL","N"]'>
		    <Wordform features={['DAT', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		</table>






    );
}

export default GermanNoun;