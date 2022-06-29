function attachEventsListeners() {
    var convertbtn = document.getElementById("convert")
    convertbtn.onclick = () =>{
      var inputDistance = document.getElementById('inputDistance')
      var inputUnitsSelectBox = document.getElementById('inputUnits')
      var outputUnitsSelectBox = document.getElementById("outputUnits")
      var outputDistance = document.getElementById("outputDistance")

      var inputNumber = inputDistance.value
      var inputUnit = inputUnitsSelectBox.value
      var outputUnit = outputUnitsSelectBox.value
      var outputNumber =0

      if(inputUnit === 'km' && outputUnit === 'm')
      {
        outputNumber = inputNumber *1000;
      }
       

        outputDistance.value = outputNumber
        
    }
    
  }