// Array to store truths and dares
const truths = [
    "Have you ever lied to get out of trouble?",
    "What is the most embarrassing thing your parents have caught you doing?",
    "What is the most childish thing you still do?",
    "Have you ever cheated on a test?",
    "Have you ever been friend-zoned?",
    "What is your secret fantasy?",
    "What is the craziest thing you have ever done?",
    "What is the most embarrassing thing you have ever posted on social media?",
    "What excites you the most?",
    "Would you like it if your girl play with your 🍆?",
    "Ever got drunk?",
    "When was the last time you hated someone real bad, and why?",
    "Tell what you want the next player to do to you next time you folks see each other.",
    "What are your dirtiest secrets?",
    "What is your favorite place to be kissed on your body?",
    "If the next person is blindfolded, what would be the naughtiest thing you would do to them?",
    "Which colored underwear are you wearing."
    // Add more truths here
];

const dares = [
    "Do 20 pushups.",
    "Sing the chorus of your favorite song.",
    "Do your best impression of someone until someone guesses who it is.",
    "Send photos of you acting out 5 dirty emojis.",
    "Hold the next persons 🍆 aobve clothes for text five turns.",
    "Put whipped cream on o next person's body and lick it.",
    "Hold the other persons chest for next three turns.",
    "Kiss the next person in the neck for 10 seconds.",
    "Make up a quick naughty story.",
    "Send a random emoji to the first person in your contacts with no explanation.",
    "Tell the other player something to get them aroused.",
    "Turn the other person on",
    "Order a condom online.",
    "Kiss someone in the game passionately.",
    "Spank the previous person in the game.",
    "Eat a snack in the sexiest way possible.",
    "Feed someone else in the room without using your hands.",
    "Text a random friend 'I love you'.",
    "Put an ice cube down in another person's pants.",
    "Play with next person's 🍆 or 🍉.",
    "Play the next 5 rounds while sitting on next person's lap in scissoring position."
    // Add more dares here
];

// Object to track the usage count of each truth or dare
const usageCount = {};

// Function to get a random item from an array, ensuring it is not repeated more than 5 times
function getRandomItem(array) {
    // Filter out the items that have been used less than 5 times
    const availableItems = array.filter(item => !usageCount[item] || usageCount[item] < 5);
    
    // If no available items, return a message
    if (availableItems.length === 0) {
        return "No more questions available.";
    }
    
    // Select a random item from the available items
    const item = availableItems[Math.floor(Math.random() * availableItems.length)];
    
    // Increment the usage count of the selected item
    usageCount[item] = (usageCount[item] || 0) + 1;
    
    return item;
}

// Function to start the game
function startGame() {
    const numPlayers = document.getElementById('numPlayers').value;
    let players = [];

    for (let i = 0; i < numPlayers; i++) {
        players.push(`Player ${i + 1}`);
    }

    localStorage.setItem('players', JSON.stringify(players));
    window.location.href = 'game.html';
}

// Function to generate a random truth or dare question
function generateQuestion() {
    const truthOrDare = Math.random() < 0.5 ? 'Truth' : 'Dare';
    const question = truthOrDare === 'Truth' ? getRandomItem(truths) : getRandomItem(dares);
    document.getElementById('question').innerText = `${truthOrDare}: ${question}`;
}

// Fun facts about Truth or Dare
const funFacts = [
    "The game Truth or Dare has been played for centuries, dating back to at least the 1700s.",
    "In some countries, Truth or Dare is known by different names, such as 'Spin the Bottle' or 'In the Bottle'.",
    "The game gained widespread popularity in the United States during the 20th century.",
    "There are many variations of Truth or Dare, including digital versions and themed editions.",
    "Truth or Dare is often played at parties, sleepovers, and social gatherings as an icebreaker game.",
    "The longest game of Truth or Dare on record lasted for over 30 hours!"
];

// Function to display a random fun fact
function displayRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const funFactText = document.getElementById("fun-fact-text");
    funFactText.textContent = funFacts[randomIndex];
}

// Display a random fun fact when the page loads
window.onload = function() {
    displayRandomFunFact();
};
