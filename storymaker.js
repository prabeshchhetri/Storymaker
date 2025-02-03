// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Pre-defined arrays for the story elements
const nouns1 = ["cat", "dog", "cow", "fish", "bird"];
const verbs = ["runs", "flies", "jumps", "sings", "swims"];
const adjectives = ["happy", "grumpy", "big", "small", "fast"];
const nouns2 = ["park", "lake", "house", "school", "garden"];
const settings = ["in the morning", "on a sunny day", "at night", "in the rain", "during winter"];

// Variables to store the chosen elements
let chosenNoun1 = '';
let chosenVerb = '';
let chosenAdjective = '';
let chosenNoun2 = '';
let chosenSetting = '';

// Check if the JavaScript file is loaded properly
console.log("JavaScript file is linked successfully!");

/* Functions
-------------------------------------------------- */
// Function for Noun 1 button
function noun1_on_click() {
    console.log('Noun1 button clicked');
    chosenNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    document.getElementById('choosenNoun1').innerText = chosenNoun1;
}

// Function for Verb button
function verb_on_click() {
    console.log('Verb button clicked');
    chosenVerb = verbs[Math.floor(Math.random() * verbs.length)];
    document.getElementById('choosenVerb').innerText = chosenVerb;
}

// Function for Adjective button
function adjective_on_click() {
    console.log('Adjective button clicked');
    chosenAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    document.getElementById('choosenAdjective').innerText = chosenAdjective;
}

// Function for Noun 2 button
function noun2_on_click() {
    console.log('Noun2 button clicked');
    chosenNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    document.getElementById('choosenNoun2').innerText = chosenNoun2;
}

// Function for Setting button
function setting_on_click() {
    console.log('Setting button clicked');
    chosenSetting = settings[Math.floor(Math.random() * settings.length)];
    document.getElementById('choosenSetting').innerText = chosenSetting;
}

// Function to show the complete story
function playback_on_click() {
    if (chosenNoun1 && chosenVerb && chosenAdjective && chosenNoun2 && chosenSetting) {
        const story = `${chosenNoun1} ${chosenVerb} ${chosenAdjective} ${chosenNoun2} ${chosenSetting}.`;
        document.getElementById('story').innerText = story;
        console.log("Story: " + story);  // Debugging line
    } else {
        document.getElementById('story').innerText = "Please select all elements to see the story.";
    }
}

// Function to generate a random story
function random_on_click() {
    const randomStory = `${nouns1[Math.floor(Math.random() * nouns1.length)]} 
    ${verbs[Math.floor(Math.random() * verbs.length)]} 
    ${adjectives[Math.floor(Math.random() * adjectives.length)]} 
    ${nouns2[Math.floor(Math.random() * nouns2.length)]} 
    ${settings[Math.floor(Math.random() * settings.length)]}.`;
    document.getElementById('story').innerText = randomStory;
    console.log("Random Story: " + randomStory);  // Debugging line
}

// Function to reset all selections and the story
function reset_on_click() {
    chosenNoun1 = chosenVerb = chosenAdjective = chosenNoun2 = chosenSetting = '';
    document.getElementById('choosenNoun1').innerText = '';
    document.getElementById('choosenVerb').innerText = '';
    document.getElementById('choosenAdjective').innerText = '';
    document.getElementById('choosenNoun2').innerText = '';
    document.getElementById('choosenSetting').innerText = '';
    document.getElementById('story').innerText = '';
}

// Dynamically add the student ID
window.onload = function () {
    document.getElementById('studentId').innerText = 'Student ID: 123456789';
};

/* Event Listeners
-------------------------------------------------- */
document.getElementById('noun1').addEventListener('click', noun1_on_click);
document.getElementById('verb').addEventListener('click', verb_on_click);
document.getElementById('adjective').addEventListener('click', adjective_on_click);
document.getElementById('noun2').addEventListener('click', noun2_on_click);
document.getElementById('setting').addEventListener('click', setting_on_click);
document.getElementById('playback').addEventListener('click', playback_on_click);
document.getElementById('random').addEventListener('click', random_on_click);
document.getElementById('reset').addEventListener('click', reset_on_click);
