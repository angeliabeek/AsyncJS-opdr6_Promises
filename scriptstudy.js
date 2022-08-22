const santaIsGenerous = true;

// Make a promise (so you don't have to learn this, this is on the API (back-end) side)
const willIGetANewIphone = new Promise(
    (resolve, reject) => {
        if (santaIsGenerous) {
            const smartphone = {
                brand: 'Apple',
                type: 'iPhone 11'
            };
            resolve(smartphone);
        } else {
            const withWhatReason = new Error("You've been naughty, no gifts for you");
            reject(withWhatReason);
        }

    }
);

// Call Promise, or "consume" (you will do this and thus have to learn it, in contrast to creating above promise)
const askSanta = () => {
    willIGetANewIphone
        .then(function (resolved) {
            // yay, you got a new Iphone
            console.log(resolved);
        })
        .catch(function (error) {
            // whoops, no present from Santa this year...
            console.log(error.message);
        });
}

askSanta();



