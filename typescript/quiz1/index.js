"use strict";
/*
問題1
指定された配列の要素をすべて2倍にして新しい配列を作成する関数 doubleArray を実装してください。
*/
function doubleArray1(arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i] * 2);
    }
    return resultArr;
}
// function getProperty(obj: Obj, key: string): any {
//   let result: string;
//   let objArr: string[];
//   objArr = Object.keys(obj);
//   return objArr.find((value) => {
//     if (key === value) {
//       return value;
//     } else {
//       return undefined;
//     }
//   });
// }
//答え
function getProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return obj[key];
    }
    return undefined;
}
/*
問題3
指定された配列の要素をすべて文字列に変換し、指定された区切り文字でつなげた文字列を作成する関数 joinArray を実装してください。
*/
function joinArray(str, req) {
    let strArr = [];
    let resultStr = "";
    for (let i = 0; i < str.length; i++) {
        strArr.push(String(str[i]));
    }
    for (let i = 0; i < strArr.length; i++) {
        resultStr += String(strArr[i]) + req;
    }
    return resultStr;
}
/*
問題4
指定されたオブジェクトのキーと値を入れ替えた新しいオブジェクトを作成する関数 invertObject を実装してください。ただし、値はすべて文字列であるものとします。
*/
// function invertObject(obj: { [key: string]: string }): any {
//   Object.values(obj);
// }
//答え
function invertObject(obj) {
    const invertedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            invertedObj[obj[key]] = key;
        }
    }
    return invertedObj;
}
/*
問題5
指定された配列から、指定された要素を削除した新しい配列を作成する関数 removeElement を実装してください。
*/
// function removeElement(arr: [], index: number): [] {
//   let resultArr = [];
//   arr.slice(index);
//   resultArr = arr;
//   return arr;
// }
//答え
function removeElement(arr, index) {
    if (index < 0 || index >= arr.length) {
        throw new Error("Invalid index");
    }
    const resultArr = [...arr];
    resultArr.splice(index, 1);
    return resultArr;
}
