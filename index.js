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
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);


function ternaryCheckCity(someCity) {
  
  
  return someCity === 'NYC' ? 'Ok, sounds good.' :'No go.' 
  

}


function switchOnCharmFromTip(someTip){
  switch(someTip) {
    case 'generous':
     return('Thank you so much.') 
      break;
    case 'not as generous':
      return('Thank you.') 
      break;
    default:
      return('Bye.') 
  }
}
switchOnCharmFromTip('generous');
