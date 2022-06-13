var buttons = document.getElementsByClassName('colorButton')
var heading = document.getElementById('colorValue');
function setButtonColor(button, red, green, blue) {
    button.setAttribute('style',
    'background-color: rgb('+ red +','+green+','+blue+')'
    )
}
function makeColorValue() {
    return Math.round(Math.random()*255)

}
function startGame() {
    var red = makeColorValue()
    var green = makeColorValue()
    var blue  = makeColorValue()
    
    var answerButton = Math.round(Math.random()*(buttons.length -1))
    var answerMessage = document.getElementById('answer')
    answerMessage.innerHTML = '';
    heading.innerHTML = '';
    
    for (let i = 0; i < buttons.length; i++) {
        
        var red = makeColorValue()
        var green = makeColorValue()
        var blue  = makeColorValue()
    
        setButtonColor(buttons[i], red, green, blue,)
        if(i === answerButton) {
            heading.innerHTML = `(${red}, ${green}, ${blue})`
        }
        buttons[i].addEventListener('click', function() {
            if(this === buttons[answerButton]){
                answerMessage.innerHTML = "Correct"
    
            } else {
                answerMessage.innerHTML = "Wrong answer! guess again!"
            }
        })
    }
    
}

document.getElementById('resetButton').addEventListener('click', startGame)

