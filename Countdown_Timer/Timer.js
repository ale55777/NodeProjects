#! /usr/bin/env node  
import inquirer from 'inquirer';
function startCountdown(duration, onTick, onComplete) {
    let secondsRemaining = duration;
    const intervalId = setInterval(() => {
        if (secondsRemaining <= 0) {
            clearInterval(intervalId);
            onComplete();
            return;
        }
        const minutes = Math.floor(secondsRemaining / 60);
        const seconds = secondsRemaining % 60;
        onTick(minutes, seconds);
        secondsRemaining--;
    }, 1000);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}
const onTick = (minutes, seconds) => {
    console.log(`Time remaining: ${formatTime(minutes)}:${formatTime(seconds)}`);
};
const onComplete = () => {
    console.log("Time's up!");
};
inquirer
    .prompt([
    {
        type: 'input',
        name: 'duration',
        message: 'Enter countdown duration in seconds:',
        validate: (input) => {
            const duration = parseInt(input);
            if (isNaN(duration) || duration <= 0) {
                return 'Please enter a positive number';
            }
            return true;
        }
    }
])
    .then(answers => {
    const duration = parseInt(answers.duration);
    startCountdown(duration, onTick, onComplete);
})
    .catch(error => {
    console.error('Error:', error);
});
