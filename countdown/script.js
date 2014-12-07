$(function(){

  var note = $('#note'),
  nextYear = new Date().getFullYear() + 1
  endDate = new Date(nextYear, 0, 1), //This is currently counting down to new year 2015. Remember, January is 0 and December is 11 in js Date format.
                                      //http://www.w3schools.com/js/js_dates.asp
  endReached = false;

  if((new Date()) > endDate){
    //This is your escape code. When the date has passed, this code will execute.
    endReached = true;
  }

  $('#countdown').countdown({
    timestamp	: endDate,
    callback	: function(days, hours, minutes, seconds){

      var message = "";
      if(!endReached){

        message += days + " day" + ( days==1 ? '':'s' ) + ", ";
        message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
        message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
        message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

        message += "left until your goal";
      }
      else {
        //This still displays the timer with every value as 0. They can be hidden by uncommenting the line below
        // $('.countdownHolder').css('display', 'none')
        message = "The date has passed"
      }

      note.html(message);
    }
  });

});
