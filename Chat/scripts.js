        const chatContainer = document.getElementById('chat-container');
        const messageInput = document.getElementById('chat-message');
        const sendButton = document.getElementById('send-button');

        sendButton.addEventListener('click', () => {
            const messageText = messageInput.value.trim();
            if (messageText !== '') {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message', 'sent');
                messageElement.textContent = messageText;
                chatContainer.appendChild(messageElement);
                chatContainer.scrollTop = chatContainer.scrollHeight;
                messageInput.value = '';
            }
        });

        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });
        const chatData = {
            anna: [
                { type: 'received', text: 'Привет! Как твои дела?' },
                { type: 'sent', text: 'Привет! Всё отлично, а у тебя?' }
            ],
            ivan: [
                { type: 'received', text: 'Привет! Ты видел новые серии сериала?' },
                { type: 'sent', text: 'Привет! Ещё нет, но собираюсь посмотреть.' }
            ],
            maria: [
                { type: 'received', text: 'Привет! Как прошёл твой день?' },
                { type: 'sent', text: 'Привет! Всё хорошо, спасибо!' }
            ]
        };

        const chatHeader = document.getElementById('chat-header');
        const chatItems = document.querySelectorAll('.chat-item');

        function loadChat(chatKey) {
            chatContainer.innerHTML = '';
            chatHeader.textContent = `Чат с ${chatKey.charAt(0).toUpperCase() + chatKey.slice(1)}`;
            chatData[chatKey].forEach(message => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${message.type}`;
                messageDiv.textContent = message.text;
                chatContainer.appendChild(messageDiv);
            });
        }

        chatItems.forEach(item => {
            item.addEventListener('click', () => {
                const chatKey = item.getAttribute('data-chat');
                loadChat(chatKey);
            });
        });

        // Загружаем первый чат по умолчанию
        loadChat('anna');