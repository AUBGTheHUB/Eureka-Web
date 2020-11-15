import React from 'react';
import { useState, useEffect } from 'react';
import Wordform from '../Wordform.js';

const BulgarianAdjective = (props) => {
    return(<table className="lemma-table"  border="1px solid #000000">
			 <tr>
			  <th className="l3" colspan="6">
			   Positive
			  </th>
			 </tr>
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
			   indefinite
			  </th>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","SG","MASC","ADJ"]'>
			    <Wordform editable={props.editable} features={['INDF', 'SG', 'MASC', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","SG","FEM","ADJ"]'>
			    <Wordform editable={props.editable} features={['INDF', 'SG', 'FEM', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","SG","NEUT","ADJ"]'>
			    <Wordform editable={props.editable} features={['INDF', 'SG', 'NEUT', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","PL","ADJ"]'>
			    <Wordform editable={props.editable} features={['INDF', 'PL', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
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
			   <span opt_features='["NOM"]' req_features='["DEF","SG","MASC","ADJ"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'MASC', 'ADJ', 'NOM']} optional_features={['DEF', 'SG', 'MASC', 'ADJ']} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" rowspan="2">
			   <span opt_features="[]" req_features='["DEF","SG","FEM","ADJ"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'FEM', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" rowspan="2">
			   <span opt_features="[]" req_features='["DEF","SG","NEUT","ADJ"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'NEUT', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" rowspan="2">
			   <span opt_features="[]" req_features='["DEF","PL","ADJ"]'>
			    <Wordform editable={props.editable} features={['DEF', 'PL', 'ADJ']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			 </tr>
			 <tr>
			  <th className="l1">
			   accusative
			  </th>
			  <td className="table-cell">
			   <span opt_features='["ACC"]' req_features='["DEF","SG","MASC","ADJ"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'MASC', 'ADJ', 'ACC']} optional_features={['DEF', 'SG', 'MASC', 'ADJ']} wordforms={props.wordforms}/>
			   </span>
			  </td>
			 </tr>
			 <tr>
			  <th className="l2">
			  </th>
			  <th className="l1">
			   vocative
			  </th>
			  <td className="table-cell" colspan="1">
			   <span opt_features="[]" req_features='["VOC","SG","ADJ","MASC"]'>
			    <Wordform editable={props.editable} features={['VOC', 'SG', 'ADJ', 'MASC']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" colspan="3">
			  </td>
			 </tr>
			 <tr>
			  <th className="l3" colspan="6">
			   Comparative
			  </th>
			 </tr>
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
			   indefinite
			  </th>
			  <td className="table-cell">
			   <span opt_features='["NOM"]' req_features='["INDF","SG","MASC","ADJ","CMPR"]'>
			    <Wordform editable={props.editable} features={['INDF', 'SG', 'MASC', 'ADJ', 'CMPR', 'NOM']} optional_features={['INDF', 'SG', 'MASC', 'ADJ', 'CMPR']} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","SG","FEM","ADJ","CMPR"]'>
			    <Wordform editable={props.editable} features={['INDF', 'SG', 'FEM', 'ADJ', 'CMPR']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","SG","NEUT","ADJ","CMPR"]'>
			    <Wordform editable={props.editable} features={['INDF', 'SG', 'NEUT', 'ADJ', 'CMPR']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","PL","ADJ","CMPR"]'>
			    <Wordform editable={props.editable} features={['INDF', 'PL', 'ADJ', 'CMPR']} optional_features={[]} wordforms={props.wordforms}/>
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
			   <span opt_features='["NOM"]' req_features='["DEF","SG","MASC","ADJ","CMPR"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'MASC', 'ADJ', 'CMPR', 'NOM']} optional_features={['DEF', 'SG', 'MASC', 'ADJ', 'CMPR']} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" rowspan="2">
			   <span opt_features="[]" req_features='["DEF","SG","FEM","ADJ","CMPR"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'FEM', 'ADJ', 'CMPR']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" rowspan="2">
			   <span opt_features="[]" req_features='["DEF","SG","NEUT","ADJ","CMPR"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'NEUT', 'ADJ', 'CMPR']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" rowspan="2">
			   <span opt_features="[]" req_features='["DEF","PL","ADJ","CMPR"]'>
			    <Wordform editable={props.editable} features={['DEF', 'PL', 'ADJ', 'CMPR']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			 </tr>
			 <tr>
			  <th className="l1">
			   accusative
			  </th>
			  <td className="table-cell">
			   <span opt_features='["ACC"]' req_features='["DEF","SG","MASC","ADJ","CMPR"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'MASC', 'ADJ', 'CMPR', 'ACC']} optional_features={['DEF', 'SG', 'MASC', 'ADJ', 'CMPR']} wordforms={props.wordforms}/>
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
			   <span opt_features="[]" req_features='["VOC","SG","ADJ","CMPR","MASC"]'>
			    <Wordform editable={props.editable} features={['VOC', 'SG', 'ADJ', 'CMPR', 'MASC']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" colspan="3">
			  </td>
			 </tr>
			 <tr>
			  <th className="l3" colspan="6">
			   Superlative
			  </th>
			 </tr>
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
			   indefinite
			  </th>
			  <td className="table-cell">
			   <span opt_features='["NOM"]' req_features='["INDF","SG","MASC","ADJ","SPRL"]'>
			    <Wordform editable={props.editable} features={['INDF', 'SG', 'MASC', 'ADJ', 'SPRL', 'NOM']} optional_features={['INDF', 'SG', 'MASC', 'ADJ', 'SPRL']} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","SG","FEM","ADJ","SPRL"]'>
			    <Wordform editable={props.editable} features={['INDF', 'SG', 'FEM', 'ADJ', 'SPRL']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","SG","NEUT","ADJ","SPRL"]'>
			    <Wordform editable={props.editable} features={['INDF', 'SG', 'NEUT', 'ADJ', 'SPRL']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell">
			   <span opt_features="[]" req_features='["INDF","PL","ADJ","SPRL"]'>
			    <Wordform editable={props.editable} features={['INDF', 'PL', 'ADJ', 'SPRL']} optional_features={[]} wordforms={props.wordforms}/>
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
			   <span opt_features='["NOM"]' req_features='["DEF","SG","MASC","ADJ","SPRL"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'MASC', 'ADJ', 'SPRL', 'NOM']} optional_features={['DEF', 'SG', 'MASC', 'ADJ', 'SPRL']} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" rowspan="2">
			   <span opt_features="[]" req_features='["DEF","SG","FEM","ADJ","SPRL"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'FEM', 'ADJ', 'SPRL']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" rowspan="2">
			   <span opt_features="[]" req_features='["DEF","SG","NEUT","ADJ","SPRL"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'NEUT', 'ADJ', 'SPRL']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" rowspan="2">
			   <span opt_features="[]" req_features='["DEF","PL","ADJ","SPRL"]'>
			    <Wordform editable={props.editable} features={['DEF', 'PL', 'ADJ', 'SPRL']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			 </tr>
			 <tr>
			  <th className="l1">
			   accusative
			  </th>
			  <td className="table-cell">
			   <span opt_features='["ACC"]' req_features='["DEF","SG","MASC","ADJ","SPRL"]'>
			    <Wordform editable={props.editable} features={['DEF', 'SG', 'MASC', 'ADJ', 'SPRL', 'ACC']} optional_features={['DEF', 'SG', 'MASC', 'ADJ', 'SPRL']} wordforms={props.wordforms}/>
			   </span>
			  </td>
			 </tr>
			 <tr>
			  <th className="l2">
			  </th>
			  <th className="l1">
			   vocative
			  </th>
			  <td className="table-cell" colspan="1">
			   <span opt_features="[]" req_features='["VOC","SG","ADJ","SPRL","MASC"]'>
			    <Wordform editable={props.editable} features={['VOC', 'SG', 'ADJ', 'SPRL', 'MASC']} optional_features={[]} wordforms={props.wordforms}/>
			   </span>
			  </td>
			  <td className="table-cell" colspan="3">
			  </td>
			 </tr>
			</table>


    );
}

export default BulgarianAdjective;