//jshint esversion:6
var dataTooManyWhiteSpace = `4   21  894
                           419  794  987 
                           424  797  125
                           651  305  558
                           655  631  963
                             2  628  436
                           736   50  363
                           657  707  408 
                           252  705   98`;

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
var originalTriangleData = triangleDataNumbers.length;
console.log("triangleDataNumbers: ",triangleDataNumbers);
var originalLength = triangleDataNumbers.length;
var arrayA = [];
var arrayB = [];
var arrayC = [];

var newMainArray = [];

for (var i = 0; i < 9 ; i++){
   
    arrayA.push(triangleDataNumbers.splice(i,1));
    console.log("Push data to ArrayA", arrayA);
    console.log("i = ",i);
   i += 1;    

    newMainArray.push(arrayA);
    
}
for (var i = 0; i <9; i++){
    
     arrayB.push(triangleDataNumbers.splice(i,1));
   console.log("Push data to ArrayB", arrayB);


}


