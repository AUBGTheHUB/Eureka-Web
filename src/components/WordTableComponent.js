import React from 'react';
import { useState } from 'react';
import MaterialTable from 'material-table';

// columns don't need to be in state of the component, since they are static.
// separated words into own state

const WordTable = () => {
  const columns = [
    { title: 'name', field: 'name' },
    { title: 'language', field: 'language' },
    { title: 'dimension', field: 'dimension', type: 'numeric' },
    {
      title: 'lemma',
      field: 'lemma',
    }
  ]
  const [ words, setWords ] = useState([
      { 
        name: 'Food', 
        language: 'English', 
        dimension: 2, 
        lemma: 'food'
      },
      {
        name: 'Баница',
        language: 'Bulgarian',
        dimension: 3,
        lemma: 'баница',
      }
  ])
  // these functions then could be expanded, so that they send post, put, delete requests
  const onRowAdd = (newWord) => {
    const newWords = words.concat(newWord)
    console.log(newWords)
    setWords(newWords)
  }

  const onRowUpdate = (newWord, oldWord) => {
    let newWords = words.filter(word => word.name != oldWord.name)
    newWords = newWords.concat(newWord)
    setWords(newWords)
  }

  const onRowDelete = (oldWord) => {
    setWords(words.filter(word=> word.name !== oldWord.name))
  }

  return (
    <MaterialTable
      title="Table of words"
      columns={columns}
      data={words}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              onRowAdd(newData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                onRowUpdate(newData, oldData);
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              onRowDelete(oldData);
            }, 600);
          }),
      }}
    />
  );
}

export default WordTable