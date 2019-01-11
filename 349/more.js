const union = (arr = [], brr = []) => new Set([...arr, ...brr]);

const intersect = (arr = [], brr = []) =>
  new Set(arr.filter(x => brr.includes(x)));

const except = (arr = [], brr = []) =>
  new Set(arr.filter(x => !brr.includes(x)));
