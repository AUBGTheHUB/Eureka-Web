const formatWord = (word) => {
  const features = word.tagset.features

  const names = features.map(feat => {
    return feat.name
  });

  const lists = features.map(feat => {
    return names.map(name => {
      if(feat.name === name){
        return [name, true]
      }
      return [name, false]
    });
  });
  let dims = {}
  features.forEach((feat, i) => {
    dims[`${feat.dimension.name}`] = lists[i]
  })

  const formattedWord = {
    name: word.name,
    pos: word.lemma.pos.name,
    dimensions: dims
  };
  return formattedWord;
}

export default {
  formatWord
}