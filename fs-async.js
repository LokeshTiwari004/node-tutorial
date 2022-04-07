const { readFile, writeFile, write } = require('fs');


console.log(1);
readFile(
    './content/first.txt',
    'utf8',
    (err, result) => {
        // console.log(err);
        if (err) {
            console.log(err);
            return;
        }
        // console.log(result);

        const first = result;

        readFile(
            './content/second.txt',
            'utf8',
            (err, result) => {
                // console.log(err);
                if (err) {
                    console.log(err);
                    return;
                }
                // console.log(result);

                const second = result;

                writeFile(
                    './content/result-async.txt',
                    `result: ${first}, ${second}`,
                    // {flag: 'a'},
                    (err, result) => {
                        // console.log(err);
                        if (err) {
                            console.log(err);
                            return;
                        }
                        // console.log(result);
                        console.log(2);
                    }
                )
            }
        )
    }
)
console.log(3);