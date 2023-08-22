package main

// func main() {
// 	var a bool = true    // Boolean
// 	var b int = 5        // Integer
// 	var c float32 = 3.14 // Floating point number
// 	var d string = "Hi!" // String

// 	fmt.Println("Boolean: ", a)
// 	fmt.Println("Integer: ", b)
// 	fmt.Println("Float:   ", c)
// 	fmt.Println("String:  ", d)
// }

// array

// func main() {
// 	var arr1 = [3]int{1, 2, 3}
// 	arr2 := [5]int{4, 5, 6, 7}

// 	fmt.Println(arr1)
// 	fmt.Println(arr2)

// 	var arr3 = [...]int{1, 2, 3}
// 	arr4 := [...]int{4, 5, 6, 7, 8}

// 	fmt.Println(arr3)
// 	fmt.Println(arr4)

// 	fmt.Println(arr3[0])
// 	fmt.Println(arr4[2])

// 	arr4[2] = 50
// 	fmt.Println(arr4)

// 	arr5 := [5]int{1: 10, 2: 40}
// 	fmt.Println(arr5)

// 	fmt.Println(len(arr5))
// }

// slice

// func main() {
// 	myslice1 := []int{}
// 	fmt.Println(len(myslice1))
// 	fmt.Println(cap(myslice1))
// 	fmt.Println(myslice1)

// 	myslice1 = append(myslice1, 20, 30)
// 	fmt.Println("After append", myslice1)

// 	myslice2 := []string{"Go", "Slices", "Are", "Powerful"}
// 	fmt.Println(len(myslice2))
// 	fmt.Println(cap(myslice2))
// 	fmt.Println(myslice2)

// 	arr1 := [6]int{10, 11, 12, 13, 14, 15}
// 	myslice := arr1[2:4]

// 	fmt.Printf("myslice = %v\n", myslice)
// 	fmt.Printf("length = %d\n", len(myslice))
// 	fmt.Printf("capacity = %d\n", cap(myslice))

// 	slice3 := []string{"hello world", "game"}

// 	merge := append(myslice2, slice3...)
// 	fmt.Println(merge)
// }
