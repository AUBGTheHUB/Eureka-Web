import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const RussianNoun = (props) => {
    return(
		<table className="lemma-table"  border="1px solid #000000">
		 <tr>
		  <th className="l2" colspan="2">
		  </th>
		  <th className="l2">
		   singular
		  </th>
		  <th className="l2">
		   plural
		  </th>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
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
		 </tr>
		 <tr>
		  <th className="l2" colspan="1" rowspan="2">
		   accusative
		  </th>
		  <th className="l1" colspan="1">
		   animate
		  </th>
		  <td className="table-cell">
		   <span opt_features='["ANIM"]' req_features='["SG","N","ACC"]'>
		    <Wordform features={['SG', 'N', 'ACC', 'ANIM']} optional_features={['SG', 'N', 'ACC']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["ANIM"]' req_features='["PL","N","ACC"]'>
		    <Wordform features={['PL', 'N', 'ACC', 'ANIM']} optional_features={['PL', 'N', 'ACC']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1" colspan="1">
		   inanimate
		  </th>
		  <td className="table-cell">
		   <span opt_features='["INAN"]' req_features='["SG","N","ACC"]'>
		    <Wordform features={['SG', 'N', 'ACC', 'INAN']} optional_features={['SG', 'N', 'ACC']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features='["INAN"]' req_features='["PL","N","ACC"]'>
		    <Wordform features={['PL', 'N', 'ACC', 'INAN']} optional_features={['PL', 'N', 'ACC']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
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
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
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
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   instrumental
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["SG","N","INS"]'>
		    <Wordform features={['SG', 'N', 'INS']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["PL","N","INS"]'>
		    <Wordform features={['PL', 'N', 'INS']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   essive
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["SG","N","ESS"]'>
		    <Wordform features={['SG', 'N', 'ESS']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["PL","N","ESS"]'>
		    <Wordform features={['PL', 'N', 'ESS']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		</table>










    );
}

export default RussianNoun;