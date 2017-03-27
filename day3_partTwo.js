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

var originalTriangleData = triangleDataNumbers.length;

var originalLength = triangleDataNumbers.length;
var arrayA = [];
var arrayB = [];
var arrayC = [];

var newMainArray = [];

for (var i = 0; i < originalLength ; i++){
   
    arrayA.push(triangleDataNumbers.splice(i,1));
    console.log("i = ",i);
   i += 1;    

    
}
for (var i = 0; i <originalLength; i++){
    
     arrayB.push(triangleDataNumbers.splice(i,1));


}


   console.log("Push data to ArrayA", arrayA);
   console.log("Push data to ArrayB", arrayB);
