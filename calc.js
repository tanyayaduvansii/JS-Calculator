let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    //  DISPLAY
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText
            screen.value = screenValue;
        }
        //  CLEAR
        else if(buttonText =='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        //SOLVE
        else if(buttonText =='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}