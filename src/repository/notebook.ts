import { Note } from "../models/note"

let notes: Note[] = [{
    id: 1,
    title: 'Initial Note',
    content: 'Initial note content',
    dateEntry: new Date(),
}]

class Notebook {
    getNotes(): Note[] {
        return notes
    }

    getNote(id: number): Note {
        const note = notes.filter(note => note.id === id)

        if (!note) {
            return {} as Note
        } 
        
        return note[0] as Note
    }

    getNoteId(): number {
        return notes.length + 1
    }

    addNote(note: Note): void {
        notes.push(note)
    }

    updateNote(id: number, note: Note): boolean {
        const noteIndex = notes.findIndex(note => note.id === id)

        if (noteIndex === -1) {
            return false
        }
        
        notes[noteIndex] = note
        return true
    }

    deleteNote(id: number): boolean {
        const noteIndex = notes.findIndex(note => note.id === id)

        if (noteIndex === -1) {
            return false
        }
        
        notes.splice(noteIndex, 1)
        return true
    }
}

export default Notebook