package main

import "fmt"

// 1整数の配列が与えられた場合、配列の最大値を返す関数 Max を実装してください。
// 2 整数の配列が与えられた場合、配列の平均値を返す関数 Average を実装してください。
// 3 整数の配列が与えられた場合、配列内で重複している要素をすべて削除する関数 RemoveDuplicates を実装してください。
// 4 Person 構造体が与えられた場合、構造体のフィールド Age の値を1増やすメソッド IncrementAge を実装してください。
// 5 整数の配列が与えられた場合、配列内で2番目に大きい値を返す関数 SecondLargest を実装してください。
// 6 整数のスライスが与えられた場合、スライス内で偶数の要素をすべて削除する関数 RemoveEven を実装してください。
// 7 Point 構造体が与えられた場合、別の Point 構造体との距離を返すメソッド Distance を実装してください。
// 8 整数のスライスが与えられた場合、スライス内の要素の合計値が偶数かどうかを判定する関数 IsSumEven を実装してください。
// 9 整数のスライスが与えられた場合、スライス内で最も頻出する要素を返す関数 MostFrequent を実装してください。
// 10 整数のスライスが与えられた場合、スライス内の要素を昇順にソートする関数 SortAscending を実装してください。

func Max1(arr []int) int {
	max := arr[0]
	for _, value := range arr {
		if value > max {
			max = value
		}
	}
	return max
}

func Average1(arr []int) int {
	var ave int
	count := len(arr)
	for _, r := range arr {
		ave += r
	}
	res := ave / count
	return res
}

func RemoveDuplicates1(arr []int) (unique []int) {
	m := map[int]bool{}

	for _, v := range arr {
		if !m[v] {
			//m[v] = key
			// (m[v] = true) = value
			m[v] = true
			unique = append(unique, v)
		}
		fmt.Println(m)
	}

	return unique
}

func IncrementAge1() {

}

func SecondLargest1() {

}

func RemoveEven1() {

}

func Destance1() {}

func IsSumEven1() {

}

func SortAscending1() {

}

func main() {
	// 整数の配列
	arr1 := []int{4, 2, 8, 3, 1, 6, 2, 8}
	// Person 構造体
	type Person struct {
		Name string
		Age  int
	}
	// p1 := Person{"Alice", 25}

	// // Point 構造体
	// type Point struct {
	// 	X float64
	// 	Y float64
	// }

	// p2 := Point{1.0, 2.0}
	// p3 := Point{3.0, 4.0}

	// // 整数のスライス
	// nums1 := []int{1, 4, 2, 8, 3, 4, 9, 2, 1}
	fmt.Println(Max1(arr1))              // 1
	fmt.Println(Average1(arr1))          // 2
	fmt.Println(RemoveDuplicates1(arr1)) // 3

}
