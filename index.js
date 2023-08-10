 var guessNo = document.querySelector('.number');
//  guessNo = alert('hello world');
 guessNo =Math.trunc(Math.random() * 20) + 1;
 console.log(guessNo);
 
 let score = 20;
 let highscore = 0;


 var refresh = document.querySelector('.again');
 const refreshPage = () => {
  location.reload();};
 refresh.addEventListener('click', refreshPage)



//  const check = document.forms['check'];
//  check.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const value = check.querySelector('input[type="number"]').value;
//     console.log();
//  } );


//  if (!check) {
//    document.querySelector('.message').textContent = 'no number'
//  }


const check = document.forms['check'];

 check.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = Number(check.querySelector('input[type="number"]').value);


    if (!value) {
        document.querySelector('.message').textContent = 'No number!'
     }

     else if(value===guessNo){
       document.querySelector('.message').textContent = 'Correct';
       highscore = document.querySelector('.highscore').textContent = score;
       document.querySelector('body').style.backgroundColor = '#60b347';
     }

     else if(value>guessNo){
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      score = document.querySelector('.score').textContent = score;
     }

     else if(value<guessNo){
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      score = document.querySelector('.score').textContent = score;
     
     };

     
 } );





