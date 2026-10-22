function extractNumbers(arr) {
    try {
        if (!Array.isArray(arr))
            throw new Error("oio");
        else
            return arr.filter(item => typeof item === "number" && !Number.isNaN(item))
    }
    catch (error) {
        console.log(error.message)
        return []
    }
}
console.log(extractNumbers([2, 3, 4, 5]));
//2
function sumNumbersSafe(arr) {
    try {
        let arr1 = extractNumbers(arr)
        if (arr1 == [])
            throw new error("jhgfd")
        else {
            let total = 0
            arr1.forEach(element => {
                total += element
            });
            return total
        }
    }
    catch (e) {
        console.log(e.message);
        return 0
    }
}
// console.log(sumNumbersSafe("GTfr"));
//3
function filterLargeSums(arrList, minTotal) {
    return arrList.filter(x => sumNumbersSafe(x) > minTotal)
}
console.log(filterLargeSums([0, ["tgrefa", 7, 8]], 9))
//4
function summaryStats(arrList) {
    let arrList1 = filterLargeSums(arrList, 10)
    let obj = []
    arrList1.forEach(x => {
        obj.push({ sum: sumNumbersSafe(x), avg: sumNumbersSafe(x) / x.length })
    })
    return obj
}
console.log(summaryStats([["tgrefa", 7, 8], [2, 5, 6, "dfs"]]))
//5
function safeCalculator(a, b, operation) {
    if (typeof a !== typeof b) {
        throw new error("error")
        return
    }
    if (operation == "add")
        return a + b
    else if (operation == "sub")
        return a - b
    else if (operation == "mul")
        return a * b
    else if (operation == "div")
        return a / b
}
console.log(
    safeCalculator(1, 2, "add"),
    safeCalculator(1, 2, "sub"),
    safeCalculator(1, 2, "mul"),
    safeCalculator(1, 2, "div"))