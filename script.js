// max should be set to the lenght of the effective array
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function arrayShuffle(array) {
    let curr = array.length - 1;
    while (curr > 0) {
        let rand = getRandomInt(array.length);
        
        let temp = array[curr];
        array[curr] = array[rand];
        array[rand] = temp;

        curr--;
    }
    return array;
}

function answerCheck(answer){
    //
}

const images = [
    // VOWELS
    [  "a",  "./images/vowels/a.png"], // 0
    [ "aa", "./images/vowels/aa.png"], // 1
    [  "i",  "./images/vowels/i.png"], // 2
    [ "ii", "./images/vowels/ii.png"], // 3
    [  "u",  "./images/vowels/u.png"], // 4
    [ "uu", "./images/vowels/uu.png"], // 5
    [  "e",  "./images/vowels/e.png"], // 6
    [ "ai", "./images/vowels/ai.png"], // 7
    [  "o",  "./images/vowels/o.png"], // 8
    [ "au", "./images/vowels/au.png"] // 9
];