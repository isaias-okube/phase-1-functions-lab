// Code your solution in this file!
let hq = 42;
let feet = 264;
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - hq);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264

}
function distanceTravelledInFeet(x, y){
    if (y > x) {
        return ((y - x) * 264);
    }
    else 
    return ((x - y) * 264);
}
function calculatesFarePrice(start, destination){
    let distance = Math.abs(start - destination)*264;
    if (distance <= 400){
    return 0;
    }else if (distance >= 400 && distance <= 2000){
        return Math.abs(distance - 400) * 0.02;
    }else if (distance >= 2000 && distance <= 2500){
        return 25;
    }else if (distance > 2500){
    return 'cannot travel that far';
    }
}
