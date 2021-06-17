function addition(xy){
   let z= x+y;
  console.log(z);
}
addition(1,2);

function test(tester){
    if(tester > 10){
     console.log("Greater that 10") 
    } else if(tester < 5){
    console.log("Less than 5")
  }else{
    console.log("inbetween")
  }
  }
  test(8);
  
  function golfScore(par, strokes) {
    if (strokes == 1) {
        console.log ("Hole-in-one!");
      } else if (strokes <= par - 2) {
        console.log ("Eagle");
      } else if (strokes == par - 1) {
        console.log("Birdie");
      } else if (strokes == par) {
        console.log ("Par");
      } else if (strokes == par + 1) {
        console.log ("Bogey");
      } else if (strokes == par + 2) {
        console.log ("Double Bogey");
      } else {
        console.log ("Go Home!");
      }
    }
    golfScore(6, 5);