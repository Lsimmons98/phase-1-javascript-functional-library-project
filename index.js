const myEach = (data, callBack) => {
  if (typeof data === 'object' && !Array.isArray(data)){
    const useableData = Object.keys(data).map((key) => [key, data[key]])
    useableData.forEach(value => callBack(value[1]))
  } else {
  data.forEach(value => callBack(value))
  }
  return data
}

const myMap = (data ,callBack) => {
  if (typeof data === 'object' && !Array.isArray(data)){
  const useableData = Object.keys(data).map((key) => [key, data[key]])
  return useableData.map(value => callBack(value[1]))
  } else {
 return data.map(value => callBack(value))
  }
}

const myReduce = (data, callback, acc) => {
  const values = Array.isArray(data) ? data : Object.values(data);

  if (acc === undefined) {
    return values.reduce((acc, value) => callback(acc, value, data));
  } else {
    return values.reduce((acc, value) => callback(acc, value, data), acc);
  }
};

const myFind = (data, callBack) => {
  const values = Array.isArray(data) ? data : Object.values(data);
  return values.find(callBack)
}

const myFilter = (data, callBack) => {
  const values = Array.isArray(data) ? data : Object.values(data);
  return values.filter(callBack)
}

const mySize = (data) => {
  const values = Array.isArray(data) ? data : Object.values(data);
  return values.length
}

const myFirst = (data, n) => {
  if (n === undefined){
    return data[0]
  }else{
    return data.slice(0, n)
  }
}

const myLast = (data, n) => {
  if (n === undefined){
    return data[data.length - 1]
  }else{
    return data.slice(-n)
  }
}
const myKeys = (dataObject) => {
  return Object.keys(dataObject)
}

const myValues = (dataObject) => {
  return Object.values(dataObject)
}
