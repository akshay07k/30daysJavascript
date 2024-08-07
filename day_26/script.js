const socket = new WebSocket('ws://localhost:8080');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const joinChatButton = document.getElementById('join-chat');
const usernameInput = document.getElementById('username-input');
let username = "";

function setUsername() {
    const usernameDisplay = document.getElementById('username-display');
    usernameDisplay.textContent = `${username}`;
}


function displayMessage(message, name) {
    const messageItem = document.createElement('li');
    messageItem.classList.add('align-left');
    const textMessage = document.createElement('p');
    textMessage.textContent = message;
    const usernameEl = document.createElement('span');

    
    if(username.toString() == name.toString()){
        usernameEl.classList.add('username', 'message-username-right');
    }
    else{
        usernameEl.classList.add('username', 'message-username-left');
    }
    
    usernameEl.textContent = name;

    messageItem.appendChild(textMessage);
    messageItem.appendChild(usernameEl);
    chatBox.appendChild(messageItem);

    scrollToBottom();
}


function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

socket.addEventListener('open', () => {
    console.log('Connected to server');
});

socket.addEventListener('message', (event) => {
    try {
        const { type, message, username } = JSON.parse(event.data);
        console.log(event.data);
        if (type === 'message') {
            displayMessage(message, username);
        }
    } catch (error) {
        console.error('Error parsing message:', error);
    }
});

socket.addEventListener('close', () => {
    console.log('Disconnected from WebSocket server');
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

joinChatButton.addEventListener('click', () => {
    username = usernameInput.value;
    if (username) {
        setUsername();
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
    }
});

function sendMessage() {
    if (!username) {
        username = prompt("Please enter a username");
        setUsername();
    }
    const message = messageInput.value;

    if (message) {
        displayMessage(message, username);
        socket.send(JSON.stringify({ type: "message", message, username }));
        messageInput.value = "";
        console.log(`Sent: ${message}`);
    }
}
