let completedTaskCount = 0; // Initialize task counter

function makeDisable(complete) {
    const buttons = document.querySelectorAll(`.${complete}`); 
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Disable the button and add a 'disabled' class
            button.disabled = true;
            button.classList.add('disabled');
            console.log("Complete Button Disabled Now.");

            // Retrieve the task name
            const taskName = button.parentNode.parentNode.parentNode.querySelector('h2').textContent;

            // Get the current time
            const currentTime = new Date().toLocaleString();

            // Increment completed task counter
            completedTaskCount++;

            // Log the message in the activity section
            const activityLog = document.querySelector('.activity'); // Ensure '.activity' exists
            const newLogEntry = document.createElement('p');
            newLogEntry.textContent = `You have completed the task "${taskName}" at ${currentTime}. Total completed tasks: ${completedTaskCount}`;
            
            // Append the log entry to the activity log
            activityLog.appendChild(newLogEntry);
        });
    });
}

// Call the function with 'complete' class
makeDisable('complete');


// Clear history

function clearHistory(){
    const clearHistoryButton = document.querySelector('.clear')
    clearHistoryButton.addEventListener('click', ()=>{
        const activityLog = document.querySelector('.activity');
const messages = activityLog.querySelectorAll('p');
messages.forEach(message => message.remove());

        console.log('Activity log cleared.');
    });
}
clearHistory();

//Discover button

function discover(){
    const discoverButton = document.querySelector('.discover')
    discoverButton.addEventListener('click', ()=>{
        window.location.href = 'index2.html';
    })
}
discover();

//Back button

//Back button 
function back(){
     const backButton = document.querySelector('.back')
      backButton.addEventListener('click',
        ()=>{ window.location.href = 'index.html';
            
         }) } 
        back();
