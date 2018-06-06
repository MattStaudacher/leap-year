$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#input-year").val());
    year = checkForLeapYear(year);
    outputAnswer(year);


  });
});

function outputAnswer(tempString)
{
  $("#output").text(tempString);
}

function checkForLeapYear(year)
{
  if(year === NaN)
  {
    alert("Please enter a year.");
    return "";
  }
  else if((!(year % 4))&&((year % 100)||(!(year%400))))
  {
    return (year.toString() + " is a leap year.");
  }
  else
  {
    return (year.toString() + " is not a leap year.");
  }
}
