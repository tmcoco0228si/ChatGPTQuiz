/*
数値型の配列aがあります。配列aの中で、最大値と最小値の差を求める関数を作成してください。
 */
function maxmin(arr: any[]): any {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const result = max - min;
  return result;
}

/*
以下のようなオブジェクトaがあります。 
オブジェクトaに対して、プロパティaddressの中にあるプロパティcityの値を取得する関数を作成してください。
*/
const quiz14_2 = {
  id: 1,
  name: "John",
  age: 30,
  address: {
    prefecture: "Tokyo",
    city: "Shinjuku",
  },
};
function returnCity(obj: any): any {
  return obj.address.city;
}
console.log(returnCity(obj));
/*
数値型の配列aがあります。配列aの中にある偶数のみを抽出し、新しい配列として返す関数を作成してください。
*/
const gusuArr = [1, 2, 3, 4, 5];

function gusu(targetArr: number[]): number[] {
  const newArr: number[] = [];
  //mapを使用すると元の配列に対して処理を行う。
  //filterを使用すると、新しい配列を作成する。
  targetArr.map((v) => {
    if (v % 2 === 0) {
      newArr.push(v);
    }
  });
  return newArr;
}

/*
以下のようなオブジェクトaがあります。
オブジェクトaに対して、新しいプロパティphoneを追加する関数を作成してください。
*/
const obj14 = {
  id: 1,
  name: "John",
  age: 30,
  address: {
    prefecture: "Tokyo",
    city: "Shinjuku",
  },
};

function addPhone(obj: { [key: string]: any }): { [key: string]: any } {
  obj.phone = { phone: "android" };
  return obj;
}

console.log(addPhone(obj14));

/*
以下のような配列aがあります。
配列aの要素を2倍した結果を新しい配列として返す関数を作成してください。
*/

const targetNibai = [2, 3, 45, 5, 5, 5, 5, 5, 5];
function nibai(arr: number[]): number[] {
  const newArr: number[] = [];
  arr.map((v) => {
    newArr.push(v * 2);
  });

  return newArr;
}

console.log(nibai(targetNibai));
