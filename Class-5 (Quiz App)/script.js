const questions = document.querySelectorAll('.question');
const form = document.querySelector('form');
const scoreElement = document.querySelector('#score');
const answers = {"q1" : "D", "q2" : "B", "q3" : "C", "q4" : "B", "q5" : "D"};
let score = 0;

form.addEventListener('submit', e => {
    e.preventDefault();
    questions.forEach(question => {
        const option = question.querySelector('input:checked');
        const name = option.getAttribute('name');
        if(answers[name] == option.getAttribute('value')) {
            question.classList.add('correct');
            score++;
        }
        else question.classList.add('wrong');
    })    
    scoreElement.innerText = `Score: ${score}/5`;
    document.querySelector('.result').classList.remove('hide');
});