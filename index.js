function scuberGreetingForFeet(someValue) {


 
  if (someValue <= 400) {
    return('This one is on me!');
  }
  if (someValue >400 && someValue<2000) {
    return('That will be twenty bucks.');
  }
  if (someValue >2000 && someValue<2500) {
    return('I will gladly take your thirty bucks.');
  }
  if (someValue >2500) {
    return('No can do.');
  }
  scuberGreetingForFeet(199);
  scuberGreetingForFeet(1500);
  scuberGreetingForFeet(2001);
  scuberGreetingForFeet(2501);
 
  // let result;
  // result=('That will be twenty bucks.')
  //   (someFeet <= 2000 && someFeet >= 400) ? console.log(result) : null
  
  //     (someFeet > 2000) ? console.log('I will gladly take your thirty bucks.') : null
  //     (someFeet>2500)? console.log('No can do.'):null
}
// scuberGreetingForFeet(199)

// function ternaryCheckCity(someFeet) {
//   let result;
//   result=('That will be twenty bucks.')
//     (someFeet <= 2000 && someFeet >= 400) ? console.log(result) : null
  
//       (someFeet > 2000) ? console.log('I will gladly take your thirty bucks.') : null
//       (someFeet>2500)? console.log('No can do.'):null
  

// }
// ternaryCheckCity(1500)
// ternaryCheckCity(2001)

// // function switchOnCharmFromTip(){
// //   // Write your code here!
// // }