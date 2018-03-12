alert('Welcome to Quiz Ninaja');


const question {
    ["What is Superman's real name?" , "Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
};

  // next we'll create and initialize a var called score to keep track of how many correct answers the player has given

let score = 0;

for(const [question,asnswer] of quiz){
  const response = prompt(question);
  if(response === answer){
    alert('correct!');
    score++;
  }else {

    alert(`Wrong! the correct answer was ${answer}`);
  }
}












// down here is the code from early in the book
/* alert('Welcome to Quiz Ninaja');


const question { "What is Supermans's real name?" //Declares a variable called 'question' and assigns the string 'what is supermans realname' to it
const answer = prompt(question); // a prompt dialog allows the player to type in a response on the browser
alert(`You answered ${answer}`); // this shows the player the answer they provided }; *
