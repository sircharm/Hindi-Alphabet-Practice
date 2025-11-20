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

function checkAnswer(correctAnswer, userAnswer, rights){
    // doesn't accept an empty answer
    if (userAnswer === ""){
        return;
    }else if (correctAnswer === userAnswer){
        alert("Correct!")
        rights.push(userAnswer);
    }else {
        alert(`The correct answer was ${correctAnswer}.`)
    }
}

function finalMessage(rights, all){
    //checks how many mistakes to show a custom message
    let difference = all.length - rights.length;
    if (difference <= 5){
        alert(`Congratulations, you got ${rights.length} out of ${all.length} questions right!`);
        //adds one more item unless the list is already full
        if (all.length < 61) {
            all.unshift(all.length);
        }
    } else{
        alert(`Oof, you only got ${rights.length} out of ${all.length} questions right!`);
    }
    //shuffles the questions array to restart the game
    all = arrayShuffle(all);
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
    [ "au", "./images/vowels/au.png"],  // 9
    // MATRAS
    [ "ka",  "./images/Matras/ka.png"], // 10
    ["kaa", "./images/Matras/kaa.png"], // 11
    ["kai", "./images/Matras/kai.png"], // 12
    ["kan", "./images/Matras/kan.png"], // 13
    ["kau", "./images/Matras/kau.png"], // 14
    [ "ke",  "./images/Matras/ke.png"], // 15
    [ "ki",  "./images/Matras/ki.png"], // 16
    ["kii", "./images/Matras/kii.png"], // 17
    ["kka", "./images/Matras/kka.png"], // 18
    [ "ko",  "./images/Matras/ko.png"], // 19
    [ "ku",  "./images/Matras/ku.png"], // 20
    ["kuu", "./images/Matras/kuu.png"], // 21
    // EXTRA CHARACTERS
    [  "fa",   "./images/Extra/fa.png"], // 22
    [ "gya",  "./images/Extra/gya.png"], // 23
    ["ksha", "./images/Extra/ksha.png"], // 24
    ["shra", "./images/Extra/shra.png"], // 25
    [ "tra",  "./images/Extra/tra.png"], // 26
    [  "za",   "./images/Extra/za.png"], // 27
    // CONSONANTS
    [  "ba",   "./images/Consonants/ba.png"], // 28
    [ "bha",  "./images/Consonants/bha.png"], // 29
    [ "cha",  "./images/Consonants/cha.png"], // 30
    ["ccha", "./images/Consonants/ccha.png"], // 31
    [ "dda",  "./images/Consonants/dda.png"], // 32
    ["ddha", "./images/Consonants/ddha.png"], // 33
    [ "dha",  "./images/Consonants/dha.png"], // 34
    [  "ga",   "./images/Consonants/ga.png"], // 35
    [ "gha",  "./images/Consonants/gha.png"], // 36
    [  "ha",   "./images/Consonants/ha.png"], // 37
    [  "ja",   "./images/Consonants/ja.png"], // 38
    [ "jha",  "./images/Consonants/jha.png"], // 39
    [ "kha",  "./images/Consonants/kha.png"], // 40
    [  "la",   "./images/Consonants/la.png"], // 41
    [  "ma",   "./images/Consonants/ma.png"], // 42
    [  "na",   "./images/Consonants/na.png"], // 43
    [ "nga",  "./images/Consonants/nga.png"], // 44
    [ "nna",  "./images/Consonants/nna.png"], // 45
    [ "nya",  "./images/Consonants/nya.png"], // 46
    [  "pa",   "./images/Consonants/pa.png"], // 47
    [ "pha",  "./images/Consonants/pha.png"], // 48
    [  "ra",   "./images/Consonants/ra.png"], // 49
    [ "rra",  "./images/Consonants/rra.png"], // 50
    ["rrha", "./images/Consonants/rrha.png"], // 51
    [  "sa",   "./images/Consonants/sa.png"], // 52
    [ "sha",  "./images/Consonants/sha.png"], // 53
    [ "ssa",  "./images/Consonants/ssa.png"], // 54
    [  "ta",   "./images/Consonants/ta.png"], // 55
    [ "tha",  "./images/Consonants/tha.png"], // 56
    [ "tta",  "./images/Consonants/tta.png"], // 57
    ["ttha", "./images/Consonants/ttha.png"], // 58
    [  "va",   "./images/Consonants/va.png"], // 59
    [  "ya",   "./images/Consonants/ya.png"], // 60
];