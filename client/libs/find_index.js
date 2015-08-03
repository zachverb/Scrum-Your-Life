export default function findIndex(arr, prop, value) {
  return arr.findIndex(val => val[prop] === value);
}