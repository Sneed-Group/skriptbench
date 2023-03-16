//NodeBench v1.0
let totalTime = 0;
function evil(kode) { Function(`${kode}`)() }
function time(func) {
    let b = Date.now();
    let doIt = func()
    let e = Date.now();
    let timeSpent=(e-b)/1000;
    totalTime += timeSpent
}

function calcPi() {
    let i = 1n;
    let x = 3n * (10n ** 200020n);
    let pi = x;
    while (x > 0) {
            x = x * i / ((i + 1n) * 4n);
            pi += x / (i + 2n);
            i += 2n;
    }
    console.log(pi / (10n ** 20n));
}

function log() {
    console.log("Hello world!")
}

function spamLog() {
    let x = 0
    while (x < 1000) {
        console.log("[!] Spammy Log Test")
        x++;
    }
}

function evilTest() {
    evil(calcPi)
}

function main() {
time(calcPi)
time(log)
time(spamLog)
time(evilTest)
console.log(`JS SCORE: ${totalTime} seconds`)
document.body.innerHTML = `<h1>JS SCORE:</h1></br></h2>${totalTime} seconds</h2>`
}
main()