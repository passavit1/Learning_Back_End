/*
var a = map[KeyType]ValueType{key1:value1, key2:value2,...}
b := map[KeyType]ValueType{key1:value1, key2:value2,...}

create
var a map[KeyType]ValueType

update
map_name[key] = value

delete
delete(map_name, key)

match boolean
val, ok :=map_name[key]

*/

package main

import "fmt"

// func main() {
// 	var a = map[string]string{"brand": "Ford", "model": "Mustang", "year": "1964"}
// 	b := map[string]int{"Oslo": 1, "Bergen": 2, "Trondheim": 3, "Stavanger": 4}

// 	fmt.Printf("a\t%v\n", a)
// 	fmt.Printf("b\t%v\n", b)
// }

func main() {
	var a = make(map[string]string) // The map is empty now
	a["brand"] = "Ford"
	a["model"] = "Mustang"
	a["year"] = "1964"
	// a is no longer empty
	b := make(map[string]int)
	b["Oslo"] = 1
	b["Bergen"] = 2
	b["Trondheim"] = 3
	b["Stavanger"] = 4

	fmt.Printf("a\t%v\n", a)
	fmt.Printf("b\t%v\n", b)

	fmt.Println(a["brand"])
}
