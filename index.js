const numerator = document.getElementById("numerator");
const denominator = document.getElementById("denominator");
const answer = document.getElementById("display");
var percentage = 0;
funtion numberize(){
  percentage = math.round(numerator/denominator*10000)/100
  answer.textContent = percentage;
  
};
