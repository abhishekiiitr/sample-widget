window.openChatbox = function() {
    document.getElementById('chatbox').style.display = 'flex';
    document.getElementById('open-chatbox').style.display = 'none';
};

window.closeChatbox = function() {
    document.getElementById('chatbox').style.display = 'none';
    document.getElementById('open-chatbox').style.display = 'block';
};

window.toggleMinimizeChatbox = function() {
    var chatbox = document.getElementById('chatbox');
    var button = document.getElementById('minimize-button');
    var fullscreenButton = document.getElementById('fullscreen-button');
    if (chatbox.style.height !== '30px') {
        chatbox.style.height = '30px';
        chatbox.style.width = '400px';
        button.innerHTML = '&#x25A1;';
        fullscreenButton.innerHTML = '&#x2922;';
    } else {
        chatbox.style.height = '90%';
        button.innerHTML = '&#x2013;';
        fullscreenButton.innerHTML = '&#x2922;';
    }
};

window.toggleFullscreenChatbox = function() {
    var chatbox = document.getElementById('chatbox');
    var button = document.getElementById('fullscreen-button');
    var minimizeButton = document.getElementById('minimize-button');
    if (chatbox.style.width !== '65%') {
        chatbox.style.width = '65%';
        chatbox.style.height = '70%';
        button.innerHTML = '&#x2921;';
        minimizeButton.innerHTML = '&#x2013;';
    } else {
        chatbox.style.width = '400px';
        chatbox.style.height = '70%';
        button.innerHTML = '&#x2922;';
        minimizeButton.innerHTML = '&#x2013;';
    }
};

window.addMessage = function(text, sender) {
    const messages = document.getElementById('messages');
    const message = document.createElement('li');
    message.textContent = text;
    message.className = sender === 'Human' ? 'right-align' : 'left-align';
    messages.appendChild(message);
    message.scrollIntoView();
};

// Event listener for the send button
document.getElementById('send-button').addEventListener('click', function () {
    const input = document.getElementById('message-input');
    const text = input.value;
    input.value = '';
    window.addMessage(text, 'Human');
    window.addMessage('Response will go here', 'Chatbot');
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
});

// Event listener for the enter key in the message input
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});

// Event listener for the open chatbox button
document.getElementById('open-chatbox').addEventListener('click', window.openChatbox);