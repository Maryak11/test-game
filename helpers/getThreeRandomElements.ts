export default (arr: Array<any>): Array<any> => {
  const newArr = [];

  for (let i = 0; i < 3 && i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * (arr.length - i)) + i;
    const card = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[randomIndex] = card;
    newArr.push(card);
  }
  return newArr;
};
