alert('Welcome to Quiz Ninaja');

const question {
    ["What is Superman's real name?" , "Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
};

let score = 0;
for(const [question,asnswer] of quiz){
  const response = prompt(question);
  if(response === answer){
    alert('correct!');
    score++;
  } else {

    alert(`Wrong! the correct answer was ${answer}`);
  }
}
