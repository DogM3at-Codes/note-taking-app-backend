import { Router, Request, Response } from "express"
import { body, validationResult } from 'express-validator'
import { Note } from "../models/note"
import Notebook from "../repository/notebook"

const router = Router()
const notebook = new Notebook();

// validation 
const noteValidationRules = [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required'),
]

// create
router.post('/', noteValidationRules, (req: Request, res: Response) => {
    const validationErrors = validationResult(req)

    if (!validationErrors.isEmpty()) {
        return res.status(400).json({ errors: validationErrors.array() })
    }

    const noteId = notebook.getNoteId()
    const note: Note = {
        id: noteId,
        title: req.body.title,
        content: req.body.content,
        dateEntry: new Date(),
    }

    notebook.addNote(note)
    res.status(201).json('Note created successfully')
})

// read 
router.get('/', (req: Request, res: Response) => {
    res.json(notebook.getNotes())
})

router.get('/:id', (req: Request, res: Response) => {
    const note = notebook.getNote(parseInt(req.params.id))

    if (!note) {
        res.status(404).send('Note not found')
    }
    else {
        res.json(note)
    }
})

// update
router.put('/:id', noteValidationRules, (req: Request, res: Response) => {
    const validationErrors = validationResult(req)

    if (!validationErrors.isEmpty()) {
        return res.status(400).json({ errors: validationErrors.array() })
    }

    const updateTask = notebook.updateNote(parseInt(req.params.id), {
        id: parseInt(req.params.id),
        title: req.body.title,
        content: req.body.content,
        dateEntry: new Date(),
    })

    if (!updateTask) {
        res.status(404).send('Note not found')
    }
    else {
        res.status(201).send('Note updated successfully')
    }
})

// delete
router.delete('/:id', (req: Request, res: Response) => {
    const deleteTask = notebook.deleteNote(parseInt(req.params.id))

    if (!deleteTask) {
        res.status(404).send('Note not found')
    } 
    else {
        res.status(204).send('Note deleted successfully')
    }
})

export default router