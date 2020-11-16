import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const BulgarianNoun = (props) => {
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
		   indefinite
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["INDF","SG","N"]'>
		    <Wordform editable={props.editable} features={['INDF', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["INDF","PL","N"]'>
		    <Wordform editable={props.editable} features={['INDF', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" rowspan="2">
		   definite
		  </th>
		  <th className="l1">
		   nominative
		  </th>
		  <td className="table-cell">
		   <span opt_features='["NOM"]' req_features='["DEF","SG","N"]'>
		    <Wordform editable={props.editable} features={['DEF', 'SG', 'N', 'NOM']} optional_features={['DEF', 'SG', 'N']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell" rowspan="2">
		   <span opt_features="[]" req_features='["DEF","PL","N"]'>
		    <Wordform editable={props.editable} features={['DEF', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   accusative
		  </th>
		  <td className="table-cell">
		   <span opt_features='["ACC"]' req_features='["DEF","SG","N"]'>
		    <Wordform editable={props.editable} features={['DEF', 'SG', 'N', 'ACC']} optional_features={['DEF', 'SG', 'N']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2">
		  </th>
		  <th className="l1">
		   vocative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["VOC","SG","N"]'>
		    <Wordform editable={props.editable} features={['VOC', 'SG', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["VOC","PL","N"]'>
		    <Wordform editable={props.editable} features={['VOC', 'PL', 'N']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   (count form)
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="[]">
		    <Wordform editable={props.editable} features={[]} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["N","PL"]'>
		    <Wordform editable={props.editable} features={['N', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		</table>





    );
}

export default BulgarianNoun;