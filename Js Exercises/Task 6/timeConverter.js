function attachEventsListeners() {
 var inputDays =  document.getElementById('days')
 var inputHours =  document.getElementById('hours')
 var inputMins =  document.getElementById('minutes')
 var inputSeconds =  document.getElementById('seconds')

 var buttonDays = document.getElementById('daysBtn');
 var buttonHours = document.getElementById('hoursBtn');
 var buttonMinutes = document.getElementById('minutesBtn');
 var buttonSeconds = document.getElementById('secondsBtn');


 buttonDays.onclick = () => {
     var days = inputDays.value
     var hours = days*24
     var minutes = hours * 60
      var seconds = minutes * 60
      inputHours.value = hours
      inputMins.value = minutes
      inputSeconds.value = seconds 
 }

    buttonHours.onclick = () => {
    var hours = inputHours.value
     var days = hours/24
     var minutes = hours * 60
      var seconds = minutes * 60
      inputDays.value = days
      inputMins.value = minutes
      inputSeconds.value = seconds 


}

buttonMinutes.onclick = () => {
    var minutes = inputMinutes.value
     var days = hours/24
     var minutes = hours * 60
      var seconds = minutes * 60
      inputDays.value = days
      inputMins.value = minutes
      inputSeconds.value = seconds 


}
 
  }

  function convertDays(days){


  }

  function convertHours(hours){
      
}

function convertMinutes(minutes){
      
}

function convertSeconds(seconds){
      
}

