$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#input-year").val());
    if(year === NaN || year < 0)
    {
      alert("Please enter a positive year.");
    }
    else {
      {
        
      }
    }

  });
});
