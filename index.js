const myEach = (collection, callBack) => {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    callBack(values[i])
  }
  return collection
}

const myMap = (collection, callBack) => {
  const newcollection = []
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    newcollection.push(callBack(values[i]))
  }
  return (newcollection)
}

const myReduce = (collection, callBack, acc) => {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  if (acc){
  let total = acc
    for (let i = 0; i < values.length; i++) {
        total = total + callBack(0, values[i], collection)
        console.log(total)
      }
      return(total)
  }else{
    let total = values[0]
    const newValues = values.slice(1)
    total = values[0]
    for (let i = 0; i < newValues.length; i++) {
        total = total + callBack(0, newValues[i], collection)
      }
      return total
  }
}

const myFind = (collection, callBack) => {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if(callBack(collection[i])){
      return collection[i]
    }
  }
}

const myFilter = (collection, callBack) => {
  const newCollection = []
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if(callBack(collection[i])){
      newCollection.push(collection[i])
    }
  }
  return newCollection
}

const mySize = (collection) => {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  return values.length
}

const myFirst = (collection, n) => {
  if (n === undefined){
    return collection[0]
  }else{
    return collection.slice(0, n)
  }
}

const myLast = (collection, n) => {
  if (n === undefined){
    return collection[collection.length - 1]
  }else{
    return collection.slice(-n)
  }
}
const myKeys = (obj) => {
  const keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

const myValues = (obj) => {
  const values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}
