// returning values

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
};

// since we're returning area, now we can save that value in memory 
// when the function is called.
const areaResult = calcArea(5);
console.log(areaResult); // 78.5

// trying example on my own
const calcVol = function(area, height){
    let vol = area * height;
    return vol;
}

const areaGiven = 10;
const heightGiven = 2;
console.log(calcVol(areaGiven, heightGiven));
// or
let result = calcVol(areaGiven, heightGiven);
console.log(result);