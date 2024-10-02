// Exercise 1
function exercise1() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5
                ? resolve('Promise resolved after 2 seconds')
                : reject('Promise rejected after 2 seconds');
        }, 2000);
    });

    myPromise.then(
        result => console.log(result),
    )
        .catch((error) => {
            console.error(error);
        });
}

// exercise1()


// Exercise 2

function exercise2() {
    const myPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5
                ? resolve("First promise done")
                : reject("First Promise rejected");
        }, 1000);
    });

    myPromise2
        .then((result) => {
            console.log(result);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    Math.random() > 0.5
                        ? resolve("Second promise done")
                        : reject("Second Promise rejected");
                }, 1000);
            });
        })
        .then((result) => console.log(result))
        .catch((error) => {
            console.error(error)
        });
}

// exercise2();

// Exercise 3

function exercise3() {
    const myPromise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5 ? resolve("Promise 1 resolved after 2 seconds") : reject("Promise 1 rejected after 2 seconds");
        }, 2000);
    });
    const myPromise5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5 ? resolve("Promise 2 resolved after 2 seconds") : reject("Promise 2 rejected after 2 seconds");
        }, 2000);
    });

    Promise.all([myPromise4, myPromise5])
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}

// exercise3();

// Exercise 4
const myPromise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5
            ? resolve("Promise done")
            : reject("Promise rejected");
    }, 1000);
});

async function exercise4() {
    try {
        const result = await myPromise7;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// exercise4();

// Exercise 5

const randomPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5
                ? resolve("Promise done")
                : reject("Promise rejected");
        }, 1000);
    });
};

async function exercise5() {
    try {
        const result1 = await randomPromise();
        console.log(result1);
    } catch (error) {
        console.log(error);
    }

    try {
        const result2 = await randomPromise();
        console.log(result2);
    } catch (error) {
        console.log(error);
    }

    try {
        const result3 = await randomPromise();
        console.log(result3);
    } catch (error) {
        console.log(error);
    }
}

// exercise5();

// Exercise 6
const delayPromise = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${ms} ms`);
        }, ms);
    });
};

async function executeSequentially() {
    console.time("Sequential Execution");

    const result1 = await delayPromise(1000);
    console.log(result1);

    const result2 = await delayPromise(1000);

    console.log(result2);
    console.timeEnd("Sequential Execution");
}

async function executeInParallel() {
    console.time("Parallel Execution");

    const results = await Promise.all([delayPromise(1000), delayPromise(1000)]);

    results.forEach((result) => console.log(result));
    console.timeEnd("Parallel Execution");
}

// executeSequentially().then(() => executeInParallel());

// Exercise 7

const variableTimePromise = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5
                ? resolve(`Task completed in ${ms} ms`)
                : reject(`Task failed in ${ms} ms`);
        }, ms);
    });
};

const timeoutPromise = (ms) => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(`Timeout after ${ms} ms`);
        }, ms);
    });
};

async function exercise7() {
    try {
        const result = await Promise.race([variableTimePromise(3000), timeoutPromise(4000)]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// exercise7();

// Exercise 8 

async function exercise8() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

// exercise8();


// Exercise 9
async function exercise9() {
    try {
        const [response1, response2] = await Promise.all([
            fetch("https://official-joke-api.appspot.com/random_joke"),
            fetch("https://catfact.ninja/fact")
        ]);
        if (!response1.ok) {
            throw new Error(`First request failed with status: ${response1.status}`);
        }
        if (!response2.ok) {
            throw new Error(`Second request failed with status: ${response2.status}`);
        }
        
        const json1 = await response1.json();
        const json2 = await response2.json();

        console.log(json1, json2);

    }
    catch (error) {
        console.error(error);
    }
}

exercise9();

