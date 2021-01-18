import React from 'react';
import Wordform from '../Wordform.js';

const AlbanianVerb = (props) => {
    return(
		<table className="lemma-table"  border="1px solid #000000" className="lemma-table">
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
		  <th className="l2" rowSpan="7">
		   indicative
		  </th>
		  <th className="l1">
		   present
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRS', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRS', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRS', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRS', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRS', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRS', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRS', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   imperfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'IPFV', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'IPFV', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'IPFV', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'IPFV', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'IPFV', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'IPFV', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'IPFV', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'IPFV', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'IPFV', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'IPFV', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'IPFV', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'IPFV', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   past
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PST', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PST', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PST', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PST', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PST', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PST', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PST', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   perfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   past perfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'PRF', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'PRF', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   future
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   future perfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', 'PRF', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', 'PRF', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', 'PRF', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', 'PRF', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', 'PRF', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', 'PRF', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', 'PRF', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', 'PRF', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', 'PRF', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', 'PRF', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IND', 'FUT', 'PRF', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'IND', 'FUT', 'PRF', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" rowSpan="4">
		   subjunctive
		  </th>
		  <th className="l1">
		   present
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRS', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRS', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRS', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRS', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRS', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRS', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRS', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   past
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PST', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PST', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PST', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PST', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PST', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PST', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PST', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   perfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   past perfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'SBJV', 'PRF', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'SBJV', 'PRF', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" rowSpan="2">
		   conditional
		  </th>
		  <th className="l1">
		   present
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRS', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRS', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRS', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRS', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRS', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRS', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRS', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRS', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRS', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRS', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRS', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRS', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   perfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRF', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRF', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRF', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRF', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRF', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRF', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRF', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRF', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRF', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRF', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'COND', 'PRF', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'COND', 'PRF', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" rowSpan="2">
		   optative
		  </th>
		  <th className="l1">
		   present
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRS', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRS', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRS', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRS', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRS', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRS', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRS', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRS', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRS', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRS', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRS', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRS', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   perfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRF', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRF', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRF', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRF', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRF', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRF', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRF', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRF', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRF', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRF', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'OPT', 'PRF', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'OPT', 'PRF', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" rowSpan="4">
		   admirative
		  </th>
		  <th className="l1">
		   present
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRS', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRS', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRS', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRS', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRS', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRS', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRS', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRS', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRS', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRS', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRS', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRS', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   imperfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'IPFV', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'IPFV', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'IPFV', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'IPFV', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'IPFV', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'IPFV', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'IPFV', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'IPFV', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'IPFV', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'IPFV', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'IPFV', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'IPFV', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   perfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   past perfect
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '1', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '1', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '3', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '3', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '1', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '1', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '2', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '2', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'ADM', 'PRF', '3', 'PL']">
		    <Wordform editable={props.editable} features={['V', 'ADM', 'PRF', '3', 'PL']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colSpan="2">
		   imperative
		  </th>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IMP', '2', 'SG']">
		    <Wordform editable={props.editable} features={['V', 'IMP', '2', 'SG']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features="['V', 'IMP', '2', 'PL']">
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

export default AlbanianVerb;