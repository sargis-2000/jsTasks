function findIntersection(arr1 = [], arr2 = []) {
    return arr1.filter(item => {
        return arr2.includes(item)
    })
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]))