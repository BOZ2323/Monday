//jshint esversion:6
//var data = "785  516  744  272  511  358  194  69  754";
var data = `4   21  894
    2  628  436
   50   94    8
  346  188  656`;
var triangleData = data.split("  ");//converts string into array of strings
var triangleDataNumbers = [];
for (var i = 0; i< triangleData.length; i++){
    triangleDataNumbers.push(parseInt(triangleData[i]));//parseInt gets strings and returns whole numbers
}
//console.log("should be 9", triangleDataNumbers);


//loop through triangleData and:
for (var i= 0; i<= triangleData.length; i++){
    if(triangleData[i]=== " "){
        
        if(triangleData[i++]=== " "){
            
            if(triangleData[i+2]=== " "){
                triangleData[i+2] = "0";
            if(triangleData[i+3]=== " "){
                triangleData[i+3] = "0";
            }
            }   
            }                

    }

}
console.log(triangleData);
// if the character in the array which corresponds to i is a  space: 

// check if the next character(i+1) is also a space and if:

// check if the next chacracter(i plus plus) is a space:
// replace that space with a 0.
// if the next character (i plus 3) is a space
// replace that space with a 0
//
//console.log the arraz
var allArraysOfThree = [];
for (var i = 0; i <= triangleDataNumbers.length; i++){
    if (isNaN(triangleDataNumbers[i]));
   // console.log("value is NaN",triangleDataNumbers[i]);
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
           // console.log(count);
           // console.log (true);
    }
    //   console.log("looping through each array", singleArrayOfThree);
      // console.log("Amount of real triangles: "+count);
}
}

checkAllArraysWithTriangleData();




//If result is true add result to array of valid triangles.
//
//

//add raw data to array. 
//
