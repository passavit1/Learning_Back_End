package main

import (
	"fmt"
)

func main() {
	// greeting := "hello my friend"
	// fmt.Println(strings.Contains(greeting, "hello "))
	// fmt.Println(strings.ReplaceAll(greeting, "hello ", "morning "))
	// fmt.Println(strings.ToUpper(greeting))
	// fmt.Println(strings.Index(greeting, "ri"))
	//แยกคำโดยใช้สัญลักษณ์
	// fmt.Println(strings.Split(greeting, " "))

	// number := []int{5, 4, 3, 2, 1}
	// fmt.Println("before : ", number)
	// sort.Ints(number)
	// fmt.Println("After : ", number)

	// // ค้นหา index number
	// index := sort.SearchInts(number, 3)
	// fmt.Println(index)

	// name := []string{"Hello", "John", "Family", "male"}
	// sort.Strings(name)
	// fmt.Println(name)

	// fmt.Println(sort.SearchStrings(name, "John"))

	name := []string{"Hello", "John", "Family", "male"}
	// for i := 0; i < len(name); i++ {
	// 	fmt.Println(name[i])
	// }

	for idx, name := range name {
		fmt.Println(idx, name)
	}
}
