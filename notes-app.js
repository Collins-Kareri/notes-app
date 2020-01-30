//Query the paragraph tags
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes, filters); //invoking function

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchtext = e.target.value;
    renderNotes(notes, filters);
})