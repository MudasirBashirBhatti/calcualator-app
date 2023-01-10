let buttons = document.querySelectorAll('.num');
let screens = document.querySelector('input');
let screenValue = ''

for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    let audio = new Audio('./button click.wav')
    audio.play();

    if (buttonText == 'x') {
      buttonText = screens.value + '*'
      screens.value = buttonText
      screens.style.color = 'white';

    } else if (buttonText == 'DEL') {
      screens.value = screens.value.substring(0, screens.value.length - 1)
      screens.style.color = 'white';
    } else if (buttonText == '=') {
      screens.value = eval(screens.value + screenValue);
    } else if (buttonText == 'Reset') {
      buttonText = ''
      screens.value = buttonText
    }
    else {
      screens.value += buttonText
      screens.style.color = 'white';
    }
  })
}

// date functionality 
let myDate = document.getElementById('myDate');
myDate.innerText = new Date().toLocaleDateString();




// theme 2 ......................................
// toggle button 
let body = document.querySelector('body')
let cursor = document.querySelector('.cursor');
let insideToggle = document.querySelector('.inside-toggle');
let inputBox = document.querySelector('.input-box');
let btn = document.querySelectorAll('.btn')
let equalBtn = document.querySelector('.equal');
let del = document.querySelector('.del');
let reset = document.querySelector('.reset');
let outputBox = document.querySelector('.outputBox');

let myPos = 'left';
let myMiddle=()=>{
  // body styling 
  body.style.background = 'hsl(0, 0%, 93%)';
  body.style.color = 'hsl(60, 10%, 19%)'

  // toggle button styling 
  insideToggle.style.transform= 'translateX(100%)';
  insideToggle.style.background = 'hsl(25, 98%, 40%)'
  cursor.style.background='hsl(45, 7%, 89%)'
  inputBox.style.background='hsl(45,7%,89%)';

  // input box style 
  outputBox.style.backgroundColor = '#ffffff73';
  outputBox.style.color = 'hsl(60, 10%, 19%)';

  // buttons styling 
  btn.forEach((e)=>{
    e.style.color = 'hsl(60, 10%, 19%)'
  })
  equalBtn.style.background='hsl(25, 98%, 40%)';
  del.style.background='hsl(185, 42%, 37%)';
  del.style.borderBottom='3px solid hsl(185, 58%, 25%)'
  reset.style.background='hsl(185, 42%, 37%)';
  reset.style.borderBottom='3px solid hsl(185, 58%, 25%)'
  del.style.color = 'white'
  reset.style.color = 'white'
  equalBtn.style.color = 'white'

  myPos = 'middle';

}
let myRight =()=>{
  insideToggle.style.transform = 'translateX(200%)';

  // body styling 
  body.style.background = 'hsl(268, 75%, 9%)';
  body.style.color = 'hsl(52, 100%, 62%)'

  // toggle button styling 
  insideToggle.style.background = 'hsl(176, 100%, 44%)'
  cursor.style.background='hsl(268, 71%, 12%)'
  inputBox.style.background='hsl(268, 71%, 12%)';

  // input box style 
  outputBox.style.backgroundColor = 'hsl(268, 71%, 12%)';
  outputBox.style.color = 'hsl(52, 100%, 62%)';

  // buttons styling 
  btn.forEach((e)=>{
    e.style.background='hsl(268, 47%, 21%)'
    e.style.color = 'hsl(52, 100%, 62%)'
    e.style.borderBottom = '3px solid hsl(290, 70%, 36%)'
  })
  equalBtn.style.background=' hsl(176, 100%, 44%)';
  equalBtn.style.borderBottom = '3px solid hsl(177, 92%, 70%)'
  equalBtn.style.color ='hsl(268, 47%, 21%)'
  del.style.background=' hsl(281, 89%, 26%)';
  del.style.borderBottom='3px solid hsl(285, 91%, 52%)'
  del.style.color = 'white'
  reset.style.background=' hsl(281, 89%, 26%)';
  reset.style.borderBottom='3px solid hsl(285, 91%, 52%)'
  reset.style.color = 'white'

  myPos = 'right'
}
let myLeft =()=>{
  insideToggle.style.transform = 'translateX(0%)';

  // body styling 
  body.style.background = ' hsl(222, 26%, 31%)';
  body.style.color = 'white'

  // toggle button styling 
  insideToggle.style.background = 'hsl(6, 63%, 50%)'
  cursor.style.background='hsl(223, 31%, 20%)'
  inputBox.style.background='hsl(223, 31%, 20%)';

  // input box style 
  outputBox.style.backgroundColor = 'hsl(224, 36%, 15%)';
  outputBox.style.color = 'white';

  // buttons styling 
  btn.forEach((e)=>{
    e.style.background='white'
    e.style.color = 'hsl(221, 14%, 31%)'
    e.style.borderBottom = '3px solid hsl(28, 16%, 65%)'
  })
  equalBtn.style.background=' hsl(6, 63%, 50%)';
  equalBtn.style.borderBottom = '3px solid  hsl(6, 70%, 34%)'
  equalBtn.style.color = 'white'
  del.style.background=' hsl(225, 21%, 49%)';
  del.style.borderBottom='3px solid hsl(224, 28%, 35%)'
  del.style.color = 'white'
  reset.style.background=' hsl(225, 21%, 49%)';
  reset.style.borderBottom='3px solid hsl(224, 28%, 35%)'
  reset.style.color = 'white'


  myPos = 'left'
}

cursor.addEventListener('click',()=>{
  if(myPos=='left'){
    myMiddle();
  }else if(myPos == 'middle'){
    myRight();
  }else if(myPos == 'right'){
    myLeft();
  }
})


