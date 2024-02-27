import { Router, Request, Response } from "express"
import { Note } from "../models/note"
import Notebook from "../repository/notebook"

const router = Router()
const notebook = new Notebook();

// create
router.post('/', (req: Request, res: Response) => {
    const noteId = notebook.getNoteId()
    const note: Note = {
        id: noteId,
        title: req.body.title,
        content: req.body.content,
        dateEntry: new Date(),
    }

    notebook.addNote(note)
    res.status(201).json(note)
})

// read 
router.get('/', (req: Request, res: Response) => {
    res.json(notebook.getNotes())
})

router.get('/:id', (req: Request, res: Response) => {
    const note = notebook.getNote(parseInt(req.params.id))

    if (!note) {
        res.status(404).send('Task not found')
    }
    else {
        res.json(note)
    }
})

// update
router.put('/:id', (req: Request, res: Response) => {
    const updateTask = notebook.updateNote(parseInt(req.params.id), req.body)

    if (!updateTask) {
        res.status(404).send('Task not found')
    }
    else {
        res.status(201).send()
    }
})

// delete
router.delete('/:id', (req: Request, res: Response) => {
    const deleteTask = notebook.deleteNote(parseInt(req.params.id))

    if (!deleteTask) {
        res.status(404).send('Task not found')
    } 
    else {
        res.status(204).send()
    }
})

export default router