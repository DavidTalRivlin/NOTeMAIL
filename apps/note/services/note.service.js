import { storageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"

const NOTE_KEY = 'noteDB'
_createNotes()


export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter,
}

function query(filterBy) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regex.test(note.title))
            }
            if (filterBy.price) {
                notes = notes.filter(note => note.listPrice.amount <= filterBy.price)
            }
            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getDefaultFilter() {
    return { txt: '', price: '' }
}

function getEmptyNote() {
    return {
        id:'',
        createdAt:'',
        type: 'NoteTxt',
        isPinned: false,
        
        style: {
            backgroundColor: 'var(--clrBase)'
        },
        info: {
            txt: '',
            title:''
        }

    }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {

        notes = [
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTxt',
                isPinned: Math.random() > 0.7,
                style: {
                    backgroundColor: `var(--clrSecondery2)`
                },
                info: {
                    title: 'Bobi and Me',
                    txt: utilService.makeLorem(4)
                }
            },
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteImg',
                isPinned: Math.random() > 0.7,
                style: {
                    backgroundColor: `var(--clrSecondery1)`
                },
                info: {
                    url: '../../assets/img/OMG.jpg',
                    title: 'Bobi and Me'
                }
            },
            {
                id: utilService.makeId(5),
                createdAt: Date.now(),
                type: 'NoteTodos',
                
                isPinned: Math.random() > 0.7,
                style: {
                    backgroundColor: `var(--clrSecondery3)`
                },
                info: {
                    title: 'Get my stuff together',
                    todos: [
                        { id: utilService.makeId(), txt: 'Driving license', isDone:false },
                        { id: utilService.makeId(), txt: 'Coding power', isDone:true },
                    ]
                }
            },
        ]
    }

    utilService.saveToStorage(NOTE_KEY, notes)
}





