let messages = [];
let nextId = 1;

export function createMessage(content) {
    const message = {
        id: nextId++,
        content,
        createdAt: new Date()
    };
    messages.push(message);
    return message;
}

export function getAllMessages() {
    return messages;
}

export function getMessageById(id) {
    return messages.find(m => m.id === id);
}

export function deleteMessage(id) {
    const index = messages.findIndex(m => m.id === id);
    if (index === -1) return false;
    messages.splice(index, 1);
    return true;
}