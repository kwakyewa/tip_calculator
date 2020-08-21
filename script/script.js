function calculateTip(){
  var billAmount = document.querySelector("#billamount");
  var serviceQuality = document.querySelector(".serviceQuality");
  var peopleNumber = document.querySelector("#peopleamount");



  if(billAmount.value == "" || serviceQuality.value == 0){
    alert("Please enter values");
    return;
  }


  //if the peopleNumber is 1
  if(peopleNumber.value == " " || peopleNumber.value <= 1){
      peopleNumber.value = 1;

    //dont display the each text if the the number of people is 1
    document.querySelector("#each").style.display = "none";
  }else{
    document.querySelector("#each").style.display= "block";
  }

  //calculating the tip
  var total = (billAmount.value * serviceQuality.value)/peopleNumber.value;

  //rounding value to 2 decimal places and attaching it to the tipValue elment
  total = total.toFixed(2);

  document.querySelector("#toolTip").style.display = "block";
  document.querySelector("#tip").innerHTML = total;
  }



function reset(){
  document.querySelector("#tip").innerHTML = "0.00";
  document.querySelector("#each").classList.toggle("hide");
}


//hide the toolTip value on load
document.querySelector("#toolTip").style.display="none";
document.querySelector("#each").style.display = "none";



//adding event listeners to the button and calling the function
document.querySelector("#calculate").addEventListener("click", calculateTip, false);
document.querySelector("#reset").addEventListener("click",reset, false);
