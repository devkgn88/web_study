let applyMathFunctions = function(){
    let floorEle = document.getElementById('floor');
    let floorVal = getValue(floorEle);
    floorEle.innerText = `Floor: ${Math.floor(floorVal)}`;

    let roundEle = document.getElementById('round');
    let roundVal = getValue(roundEle);
    roundEle.innerText = `Round: ${Math.round(roundVal)}`;
    
    let ceilEle = document.getElementById('ceil');
    let ceilVal = getValue(ceilEle);
    ceilEle.innerText = `Ceil: ${Math.ceil(ceilVal)}`;

    let absEle = document.getElementById('abs');
    let absVal = getValue(absEle);
    absEle.innerText = `Abs: ${Math.abs(absVal)}`;

    let powEle = document.getElementById('pow');
    let powVal = getValue(powEle).split("^");
    powEle.innerText = `Pow: ${Math.pow(powVal[0],powVal[1])}`;
}

let getValue = function(element){
    return element.innerText.split(": ")[1];
}