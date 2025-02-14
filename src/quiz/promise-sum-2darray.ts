import {error} from "express-openapi-validator";

async function simpleAdd(arr: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        if(arr.length == 0){
            reject("Must have length > 0");
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; ++i) {
                sum += arr[i];
            }
            resolve(sum)
        })
    })
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function main() {
    try{
        const promise3_3 = await simpleAdd(array2D_1[0]);
        const promise2_1 = await simpleAdd(array2D_1[1]);
        const promise1_1 = await simpleAdd(array2D_1[2]);
        console.log(promise3_3+promise1_1+promise2_1)
    } catch (error) {
        console.log(error)
    }


}

main()
console.log("End of main thread")