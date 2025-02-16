const aliceTumbling1: Keyframe[] = [
    {transform: 'rotate(0) scale(1)'},
    {transform: 'rotate(360deg) scale(0)'}
];

const aliceTiming1: KeyframeEffectOptions = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
};

async function main() {
    try {
        const getElement = <T extends HTMLElement>(elementID: string): T => {
            const element = document.querySelector<T>(elementID);
            if (!element) throw new Error(`${elementID} not found`);
            return element;
        };

        const alice10 = getElement<HTMLElement>("#alice1");
        const alice20 = getElement<HTMLElement>("#alice2");
        const alice30 = getElement<HTMLElement>("#alice3");


        await alice10.animate(aliceTumbling1, aliceTiming1).finished;
        await alice20.animate(aliceTumbling1, aliceTiming1).finished;
        await alice30.animate(aliceTumbling1, aliceTiming1).finished;


    }catch(error) {
        console.log(error)
    }
}

main();
console.log("End of main thread")