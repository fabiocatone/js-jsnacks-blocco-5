const nums = [2, 8, 4, 7, 12, 87];

const filterednums = nums.filter((element) => {
    if (element %2 === 0) return true
})

console.log(filterednums)


// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]