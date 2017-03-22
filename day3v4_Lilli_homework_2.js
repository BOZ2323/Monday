//var dataTooManyWhiteSpace = "25   1  25   16 3   16";
var dataTooManyWhiteSpace = "4   21  894 419  794  987 424  797  125 651  305  558 655  631  963 2  628  436 736   50  363 657  707  408 252  705   98";

var data = dataTooManyWhiteSpace.replace(/\s+/g, ' ');// \s matches a whitespace. + matches one or more copies of the characterset. g means global meaning, not to stop at the first match, but go through the whole line.
//console.log("data with only single white spaces: ",data);
var triangleData = data.split(" ");//converts string into array of strings
//var triangleData = data.split(/" "/, 2000);//converts string into array of strings

//console.log("data.split turns data in triangleData : ",triangleData);
var triangleDataNumbers = [];
for (var i = 0; i< triangleData.length; i++){
    //console.log("triangleData ",triangleData);
    triangleDataNumbers.push(parseInt(triangleData[i]));//parseInt gets strings and returns whole numbers
}

/*
Next I will loop through triangleDataNumbers (the array with all numbers in it) and use the splice()method to cut out three items out of the original Array with every for loop. Then I push those three items into a new array. All those new arrays of three are pushed to allArrayOfThree []. I put the number 3 into a variable to be able to understand eeasier later on.
*/

//console.log("triangleDataNumbers: ",triangleDataNumbers);
var originalLength = triangleDataNumbers.length;
var numberOfItemsInEachArray = 3;
var allArraysOfThree = [];
for (var i = 0; i < originalLength/numberOfItemsInEachArray; i++){
   // console.log("triangleDataNumbers ", triangleDataNumbers.length);
   allArraysOfThree.push(triangleDataNumbers.splice(0,3));//with every loop splice cuts out the first 3 items of the array triangleDataNumbers and pushes them into allArraysOfThree
   resultOfFirstSplice = triangleDataNumbers.splice(0,3);
   //console.log("result of splice(0,3) ",resultOfFirstSplice);
}

console.log("allArraysOfThree ", allArraysOfThree);

var count = 0;
function checkIfTriangle(){
    //var count = 0;
    console.log("*********************");
    for (var i = 0; i < allArraysOfThree.length; i++){
        if (allArraysOfThree[i][0] + allArraysOfThree[i][1] > allArraysOfThree[i][2] && allArraysOfThree[i][1] + allArraysOfThree[i][2] > allArraysOfThree[i][0] && allArraysOfThree[i][0] + allArraysOfThree[i][2] > allArraysOfThree[i][1]) {

            count++;
            // console.log(count);
            // console.log (true);
        }
    }
        //console.log("First Number of array", allArraysOfThree);
        //console.log("Number of real triangles: "+count);
}
console.log("There are",count,"real Triangles");
checkIfTriangle();




//If result is true add result to array of valid triangles.
//
//

//add raw data to array. 

