//jshint esversion:6
//var data = "785  516  744  272  511  358  194  69  754";
/*
var data = `4   21  894
    2  628  436
   50   94    8
  346  188  656`;
*/

var data = `4   21  894
  419  794  987
  424  797  125
  651  305  558
  655  631  963
    2  628  436
  736   50  363
  657  707  408
  252  705   98`;
 
var triangleData = data.split("  ");//converts string into array of strings



var triangleDataNumbers = [];
/*

we need to find a way to convert var data from:  
4   21  894
2  628  436
50   94    8
346  188  656;

to:

004  021  894
002  628  436
050  094  008
346  188  656;

We had the right idea, we just needed to take smaller steps.

instead of var triangleData = data.split("  ");
*/
var triangleData = data.split("");

console.log("triangleData: ",triangleData);

//then

for (var i = 0; i< triangleData.length; i++){


    //1. remove any newlines  
    if(triangleData[i] === "\n"){
        triangleData.splice(i,1);
    }


    //2. convert all of the invisible space to something we can see
    if (triangleData[i]=== " "){
        triangleData.splice(i,1,"x");
    }


}

//splice is great.  the first argument is the index.  the second is how many elements from that point to remove. the third (optional) is what to insert.


//console.log(triangleData);


//Join is the opposite of split. 
//split splits a string into an array of the string's ['c','h','a','r','a','c','h','t','e','r','s'];

//join joins all the elements of an array into a string.

var triangleJoined = triangleData.join("");


console.log("triangleJoined",triangleJoined);

/*so now instead of 

`4   21  894
2  628  436
50   94    8`;

we have

4xxx21xx894xxxx2xx...


the xs appear in bunches sometimes as xxx sometimes as xx depending on the whitespace they were replacing. what we do now is find the first x in the array, and say 'that one is fine do nothing, but if the next element is also an x remove it, and if the next character after that is an x, remove it too.
we want to remove the "extra" x's
to make it go from this:

4xxx21xx894xxxx2xx...

to this:

4x21x894x2x628...

*/

for (var i = 0; i< triangleData.length; i++){
    if(triangleData[i] === "x"){
        if(triangleData[i+1] === "x"){
        triangleData.splice(i,1);
        }

        if(triangleData[i+2] === "x"){
        triangleData.splice(i,1);
        }
       
        if(triangleData[i+3] === "x"){
        triangleData.splice(i,1);
        }
    }

}
//now we can save the only-one-x-at-a-time array as a string

triangleJoined = triangleData.join("");


console.log(triangleJoined); 


/*
The next part is the last step.
As a string, the array looks like this: 

4x21x894x2x628

We can take the x's out with var something = triangleJoined.split("x");  
but first

look at the spacing between each x. 

4x21x894x2x628

3 digit numbers result in  3 array elements between each occurance of x

['x','_','_','_','x'];

2 digit numbers result in 2 array elements between each x
['x','_','_','x'];

one digit numbers mean there is only one 'gap' between 2 xs
['x','_','x'];


So we can use this to add the right amount of 0's:

*/

for (var i = 0; i< triangleData.length; i++){
    if(triangleData[i] === 'x'){
        if(triangleData[i+2] === 'x'){
            triangleData.splice(i,1,"x00"); // triangleData.splice(at [i], remove one element, insert 'x00'); 
                                            // It's a little redundant to remove and insert 'x'
                                            // but I don't know the details of splice yet, and this way worked.
        }
        if(triangleData[i+3] === 'x'){
            triangleData.splice(i,1,"x0");
        }
     }
}

//save the array as a string:
triangleJoined = triangleData.join("");

//and test in node:
//console.log(triangleJoined);

//now we're back on track.  We just split triangleJoined at each 'x'
triangleData = triangleJoined.split("x");
console.log(triangleData);

//and continue where we left off...




for (var i = 0; i< triangleData.length; i++){

    
    triangleDataNumbers.push(parseInt(triangleData[i]));//parseInt gets strings and returns whole numbers
}
console.log("triangleDataNumbers", triangleDataNumbers);


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

