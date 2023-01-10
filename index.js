// Code your solution in this file!
function distanceFromHqInBlocks(block){
    let Hq = 42;
    let distance = Math.abs(block - Hq);
    return distance;
}

function distanceFromHqInFeet(block) {
    let distance = distanceFromHqInBlocks(block);
    let distanceinfeet = distance * 264;
    return distanceinfeet;
}

function distanceTravelledInFeet(block, block2) {
    let distance = Math.abs(block - block2);
    let feet = distance * 264;
    return feet;
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    if (feet < 400)
    return 0;
    else if (feet <= 2000 && feet >= 400)
    return (feet-400) * 0.02;
    else if (feet <= 2500 && feet >= 2000)
    return 25;
    else if (feet > 2500)
    return 'cannot travel that far';
}