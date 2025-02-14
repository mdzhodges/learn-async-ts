const array2D_3 = [
    [0, 2, 3],
    [4, 5, -6],
    [7, 8, 9]
];


function findNegativeRow(arr: number[][], index: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const row = arr[index]
            for (let i = 0; i < array2D_3.length; ++i) {
                if (row[i] < 0) {
                    resolve(index+1);
                }
            }
            reject("No negative number in row")
        })
    })
}

const promise3 = findNegativeRow(array2D_3, 0)
const promise1 = findNegativeRow(array2D_3, 1)
const promise2 = findNegativeRow(array2D_3, 2)


Promise.any([promise1, promise2, promise3])
    .then((number) => {
        console.log(number);
    })
    .catch((error) => {
        console.log(error)
    })
