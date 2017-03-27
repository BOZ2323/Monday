var dataTooManyWhiteSpace = "4   21  894 419  794  987 424  797  125 651  305  558 655  631  963 2  628  436 736   50  363 657  707  408 252  705   98";

var data = dataTooManyWhiteSpace.replace(/\s+/g, ' ');// \s matches a whitespace. + matches one or more copies of the characterset. g means global meaning, not to stop at the first match, but go through the whole line.
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

//console.log("triangleDataNumbers: ",triangleDataNumbers.length);
var originalLength = triangleDataNumbers.length;
var allArraysOfThree = [];
for (var i = 0; i < originalLength/3; i++){
    allArraysOfThree.push(triangleDataNumbers.splice(0,3));//with every loop splice cuts out the first 3 items of the array triangleDataNumbers and pushes them into allArraysOfThree
}

console.log("allArraysOfThree", allArraysOfThree);

//function cutOfThreeArraysOfArray(){
var arrays_ThreeAtATime = [];
var originalArrayLength = allArraysOfThree.length;
for(var i = 0; i < originalArrayLength/3; i++){
    arrays_ThreeAtATime.push(allArraysOfThree.splice(0,3));
    //console.log("allArraysOfThree.splice(0,3): ",allArraysOfThree.splice(0,3));
}
console.log ("arrays_ThreeAtATime",arrays_ThreeAtATime);

//var threeArraysOfThree = cutOfThreeArraysOfArray();
//console.log("threeArraysOfThree",threeArraysOfThree);



console.log("allArraysOfThree ", allArraysOfThree);
function checkIfTriangle(){
    var count = 0;
    //console.log("*********************");
    var originalArrayLength = arrays_ThreeAtATime.length;
    for (var i = 0; i < originalArrayLength/3; i++){
            console.log( "arrays_ThreeAtATime[i][0], [i][1], [i][2]",arrays_ThreeAtATime[i][0][0]," ",arrays_ThreeAtATime[i][0][0]," ", arrays_ThreeAtATime[i][0][0]);
        //console.log("arrays_ThreeAtATime.length", arrays_ThreeAtATime.length);
            //console.log("output for loop", arrays_ThreeAtATime[i]);
               if ( arrays_ThreeAtATime[i][0] + arrays_ThreeAtATime[i][1] > arrays_ThreeAtATime[i][2]) {
                   // allArraysOfThree[i][0] + allArraysOfThree[i+2][0] > allArraysOfThree[i+1][0] && 
                   // allArraysOfThree[i+1][0] + allArraysOfThree[i+2][0] > allArraysOfThree[i][0]) {


            count++;
           // console.log("Real Triangle Count: ",count);
            // console.log (true);
               }
    }
/*
        }
        if (allArraysOfThree[i][1] + allArraysOfThree[i+1][1] > allArraysOfThree[i+2][1] &&
                allArraysOfThree[i][1] + allArraysOfThree[i+2][1] > allArraysOfThree[i+1][1] && 
                allArraysOfThree[i+1][1] + allArraysOfThree[i+2][1] > allArraysOfThree[i][1]) {
       // console.log("allArraysOfThree", allArraysOfThree);
        }   
    console.log("Number of real triangles: "+count);
        if (allArraysOfThree[i][2] + allArraysOfThree[i+1][2] > allArraysOfThree[i+2][2] &&
                allArraysOfThree[i][2] + allArraysOfThree[i+2][2] > allArraysOfThree[i+1][2] && 
                allArraysOfThree[i+1][2] + allArraysOfThree[i+2][2] > allArraysOfThree[i][2]) {
        }   
}
*/
}
checkIfTriangle();




//If result is true add result to array of valid triangles.
//
//

//add raw data to array. 
