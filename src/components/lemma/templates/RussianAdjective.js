import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const RussianAdjective = (props) => {
    return(
		<table className="lemma-table"  border="1px solid #000000">
		 <tr>
		  <th className="l2" colspan="2" rowspan="2">
		  </th>
		  <th className="l2" colspan="3">
		   singular
		  </th>
		  <th className="l2" rowspan="2">
		   plural
		  </th>
		 </tr>
		 <tr>
		  <th className="l1">
		   masculine
		  </th>
		  <th className="l1">
		   feminine
		  </th>
		  <th className="l1">
		   neuter
		  </th>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   nominative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["NOM","SG","MASC","ADJ"]'>
		    <Wordform features={['NOM', 'SG', 'MASC', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["NOM","SG","FEM","ADJ"]'>
		    <Wordform features={['NOM', 'SG', 'FEM', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["NOM","SG","NEUT","ADJ"]'>
		    <Wordform features={['NOM', 'SG', 'NEUT', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["NOM","PL","ADJ"]'>
		    <Wordform features={['NOM', 'PL', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   genitive
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["GEN","SG","MASC","ADJ"]'>
		    <Wordform features={['GEN', 'SG', 'MASC', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["GEN","SG","FEM","ADJ"]'>
		    <Wordform features={['GEN', 'SG', 'FEM', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["GEN","SG","NEUT","ADJ"]'>
		    <Wordform features={['GEN', 'SG', 'NEUT', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["GEN","PL","ADJ"]'>
		    <Wordform features={['GEN', 'PL', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   dative
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DAT","SG","MASC","ADJ"]'>
		    <Wordform features={['DAT', 'SG', 'MASC', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DAT","SG","FEM","ADJ"]'>
		    <Wordform features={['DAT', 'SG', 'FEM', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DAT","SG","NEUT","ADJ"]'>
		    <Wordform features={['DAT', 'SG', 'NEUT', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["DAT","PL","ADJ"]'>
		    <Wordform features={['DAT', 'PL', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" rowspan="2">
		   accusative
		  </th>
		  <th className="l1">
		   animate
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ACC","SG","MASC","ADJ","ANIM"]'>
		    <Wordform features={['ACC', 'SG', 'MASC', 'ADJ', 'ANIM']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell" rowspan="2">
		   <span opt_features="[]" req_features='["ACC","SG","FEM","ADJ"]'>
		    <Wordform features={['ACC', 'SG', 'FEM', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell" rowspan="2">
		   <span opt_features="[]" req_features='["ACC","SG","NEUT","ADJ"]'>
		    <Wordform features={['ACC', 'SG', 'NEUT', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ACC","PL","ADJ","ANIM"]'>
		    <Wordform features={['ACC', 'PL', 'ADJ', 'ANIM']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l1">
		   inanimate
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ACC","SG","MASC","ADJ","INAN"]'>
		    <Wordform features={['ACC', 'SG', 'MASC', 'ADJ', 'INAN']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ACC","PL","ADJ","INAN"]'>
		    <Wordform features={['ACC', 'PL', 'ADJ', 'INAN']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   instrumental
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["INS","SG","MASC","ADJ"]'>
		    <Wordform features={['INS', 'SG', 'MASC', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["INS","SG","FEM","ADJ"]'>
		    <Wordform features={['INS', 'SG', 'FEM', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["INS","SG","NEUT","ADJ"]'>
		    <Wordform features={['INS', 'SG', 'NEUT', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["INS","PL","ADJ"]'>
		    <Wordform features={['INS', 'PL', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   essive
		  </th>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ESS","SG","MASC","ADJ"]'>
		    <Wordform features={['ESS', 'SG', 'MASC', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ESS","SG","FEM","ADJ"]'>
		    <Wordform features={['ESS', 'SG', 'FEM', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ESS","SG","NEUT","ADJ"]'>
		    <Wordform features={['ESS', 'SG', 'NEUT', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell">
		   <span opt_features="[]" req_features='["ESS","PL","ADJ"]'>
		    <Wordform features={['ESS', 'PL', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		 <tr>
		  <th className="l2" colspan="2">
		   (short form)
		  </th>
		  <td className="table-cell">
		   <span opt_features='["NOM"]' req_features='["LGSPEC1","SG","MASC","ADJ"]'>
		    <Wordform features={['LGSPEC1', 'SG', 'MASC', 'ADJ', 'NOM']} optional_features={['LGSPEC1', 'SG', 'MASC', 'ADJ']} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell" rowspan="2">
		   <span opt_features="[]" req_features='["LGSPEC1","SG","FEM","ADJ"]'>
		    <Wordform features={['LGSPEC1', 'SG', 'FEM', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell" rowspan="2">
		   <span opt_features="[]" req_features='["LGSPEC1","SG","NEUT","ADJ"]'>
		    <Wordform features={['LGSPEC1', 'SG', 'NEUT', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		  <td className="table-cell" rowspan="2">
		   <span opt_features="[]" req_features='["LGSPEC1","PL","ADJ"]'>
		    <Wordform features={['LGSPEC1', 'PL', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
		   </span>
		  </td>
		 </tr>
		</table>









    );
}

export default RussianAdjective;