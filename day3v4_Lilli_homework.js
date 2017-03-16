//var dataTooManyWhiteSpace = "4   21  894 419  794  987 424  797  125 651  305  558 655  631  963 2  628  436 736   50  363 657  707 408";
var dataTooManyWhiteSpace = "4   21  894 419  794  987 424  797  125 651  305  558 655  631  963 2  628  436 736   50  363 657  707 408";

var data = dataTooManyWhiteSpace.replace(/\s+/g, ' ');
console.log("data with only single white spaces: ",data);
var triangleData = data.split(" ");//converts string into array of strings
console.log(triangleData);
var triangleDataNumbers = [];
for (var i = 0; i< triangleData.length; i++){
    triangleDataNumbers.push(parseInt(triangleData[i]));//parseInt gets strings and returns whole numbers
}
//console.log("should be 9", triangleDataNumbers);

console.log(triangleDataNumbers);

var allArraysOfThree = [];
for (var i = 0; i <= triangleDataNumbers.length; i++){
   allArraysOfThree.push(triangleDataNumbers.splice(0,3));//aus dem array triangleDataNumbers werden in jedem loop die ersten drei Werte entfernt und in den neuen array possibleTriangles gepackt
}
console.log("allArraysOfThree ", allArraysOfThree);
function checkAllArraysWithTriangleData(){
    var singleArrayOfThree = [];
    var count = 0;
    for (var i = 0; i < allArraysOfThree.length; i++){
        singleArrayOfThree.push(i);
            if (allArraysOfThree[i][0] + allArraysOfThree[i][1] > allArraysOfThree[i][2]) {
            count++;
            console.log(count);
           // console.log (true);
    }
    //  console.log("looping through each array", singleArrayOfThree);
        console.log("Number of real triangles: "+count);
}
}

checkAllArraysWithTriangleData();




//If result is true add result to array of valid triangles.
//
//

//add raw data to array. 

