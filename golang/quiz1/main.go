package main

import (
	"fmt"
	"sort"
)

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

// Person 構造体
type Person struct {
	Name string
	Age  int
}

// Point 構造体
type Point struct {
	X float64
	Y float64
}

// // 整数のスライス
// nums1 := []int{1, 4, 2, 8, 3, 4, 9, 2, 1}
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
			m[v] = true
			unique = append(unique, v)
		}
	}

	return unique
}

func (p Person) IncrementAge1() int {
	return p.Age + 1
}

func SecondLargest1(arr []int) int {

	sort.Slice(arr, func(i, j int) bool { return arr[i] > arr[j] })
	newArr := RemoveDuplicates1(arr)
	fmt.Println(newArr)
	return newArr[1]
}

func RemoveEven1(arr []int) []int {
	var newArr []int
	for _, v := range arr {
		if v%2 != 0 {
			newArr = append(newArr, v)
		}
	}
	return newArr
}

func Destance1(s1, s2 Point) float64 {
	var distance float64
	distance = float64(s1.X) - float64(s2.Y)
	return distance
}

func IsSumEven1(arr []int) bool {
	var sum int
	for _, v := range arr {
		sum += v
	}
	var res bool
	if sum%2 == 0 {
		res = true
	} else {
		res = false
	}
	return res
}

func MostFrequent1(arr interface{}) interface{} {
	var m interface{}

	switch t := arr.(type) {
	case []string:
		for _, v := range t {
			fmt.Println(v)
		}
	case []int:
		for _, v := range t {
			fmt.Println(v)
		}
	default:
		fmt.Println(t)
	}

	return m
}

func getMode(arr interface{}) interface{} {

	var mode interface{}
	var maxFreq interface{}
	switch t := arr.(type) {
	case []string:
	case []int:
		freq := make(map[int]int)
		maxFreq = 0
		mode = 0
		for _, val := range t {
			freq[val]++
			if freq[val] > maxFreq {
				maxFreq = freq[val]
				mode = val
			}
		}
		return mode
	default:

	}
	return mode
}

func SortAscending1() {

}

func main() {

	// 整数の配列
	arr1 := []int{4, 2, 8, 3, 1, 6, 2, 8}
	p1 := Person{"Alice", 25}
	p2 := Point{1.0, 2.0}
	p3 := Point{3.0, 4.0}

	fmt.Println(Max1(arr1))              // 1
	fmt.Println(Average1(arr1))          // 2
	fmt.Println(RemoveDuplicates1(arr1)) // 3
	fmt.Println(p1.IncrementAge1())      // 4
	fmt.Println(SecondLargest1(arr1))    // 5
	fmt.Println(RemoveEven1(arr1))       // 6
	fmt.Println(Destance1(p2, p3))       // 7
	fmt.Println(IsSumEven1(arr1))        // 8
	fmt.Println(MostFrequent1(arr1))     // 9

}
