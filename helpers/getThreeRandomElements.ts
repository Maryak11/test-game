export default (arr: Array<any>): Array<any> => {
  const newArr: Array<any> = [];

  for (let i = 0; i < 3 && i < arr.length; i++) {
    let randomIndex: number = Math.floor(Math.random() * (arr.length - i)) + i;
    const item = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[randomIndex] = item;
    newArr.push(item);
  }
  return newArr;
};
