function sortObjects(items = [], property) {
    if (items.length > 0 && property) {
        return items.sort((a, b) => {
            return a[property] - b[property]
        })
    }
}

console.table(sortObjects(
    [
        { name: "Zara", salary: 50000 },
        { name: "John", salary: 70000 },
        { name: "Doe", salary: 60000 },
    ],

    'salary'
))