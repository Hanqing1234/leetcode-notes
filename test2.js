var maxNumberOfBalloons = function(s) {
    let numOfB = 0;
    let numOfA = 0;
    let numOfL = 0;
    let numOfO = 0;
    let numOfN = 0;
    for(let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case 'B': numOfB++; break;
            case 'A': numOfA++;break;
            case 'L': numOfL++;break;
            case 'O': numOfO++;break;
            case 'N': numOfN++;break;
            default:
            break;
        }
    }
    return(Math.min(numOfB, numOfA, Math.trunc((numOfL)/2),  Math.trunc((numOfO)/2), numOfN))
};
console.log(maxNumberOfBalloons('BAONXXOLL'));
console.log(maxNumberOfBalloons('BAOOLLNNOLOLGBAX'));
console.log(maxNumberOfBalloons('QAWABAWONL'));
