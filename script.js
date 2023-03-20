let topics = [];
let texts = [];
let trashTopics = [];
let trashTexts = [];


load();             //load Arrays aus localStorage


// pin new Todo


function addNewTodo() {
    let newTopic = document.getElementById('input-topic');
    let newText = document.getElementById('input-text');

    if (newTopic.value === '') {
        alert('Bitte gib etwas ein');
    } else {

        topics.push(newTopic.value);
        texts.push(newText.value);

        document.getElementById('input-topic').value = '';
        document.getElementById('input-text').value = '';

        render();
        savePin();
    }
}


// generate new Pin


function render() {
    const content = document.getElementById('pinnedTodos');
    content.innerHTML = '';

    for (let i = 0; i < topics.length; i++) {
        const topic = topics[i];
        const text = texts[i];

        content.innerHTML += `
        <div id="new-todo" class="color">
            <img src="img/close.png" id="close" onclick="addToTrash()">
            <div class="inputs">
                <h2 id="trash-topic"> ${topic} </h2>
                <p id="trash-text"> ${text} </p>
            </div>
        </div>
        `;
    }
}


// New-Pin Arrays speichern


function savePin() {
    let topicAsText = JSON.stringify(topics);
    let textAsText = JSON.stringify(texts);

    localStorage.setItem('pinTopics', topicAsText);
    localStorage.setItem('pinTexts', textAsText);
}


function load() {
    let topicAsText = localStorage.getItem('pinTopics');
    let textAsText = localStorage.getItem('pinTexts');

    if (topicAsText && textAsText) {

        topics = JSON.parse(topicAsText);
        texts = JSON.parse(textAsText);
    }

}


// Add Pins to Trash


function addToTrash() {
    let removedTopic = document.getElementById('trash-topic').innerHTML;
    let removedText = document.getElementById('trash-text').innerHTML;

    trashTopics.push(removedTopic);
    trashTexts.push(removedText);

    document.getElementById('empty-trash').classList.add('d-none');
    document.getElementById('full-trash').classList.remove('d-none');

    saveTrash();
    removeNewTodo();
}


function saveTrash() {
    let trashTopicAsText = JSON.stringify(trashTopics);
    let trashTextAsText = JSON.stringify(trashTexts);

    localStorage.setItem('TrashTopics', trashTopicAsText);
    localStorage.setItem('TrashTexts', trashTextAsText);
}


// Remove New-Pins


function removeNewTodo(postion) {
    document.getElementById('new-todo').classList.remove('d-none');

    topics.splice(postion, 1);
    texts.splice(postion, 1);

    render();
    savePin();
}


// Responsive Menu

function openMenu() {
    document.getElementById('hidden-menu').classList.add('show-ul');
}

function closeMenu() {
    document.getElementById('hidden-menu').classList.remove('show-ul');
}





