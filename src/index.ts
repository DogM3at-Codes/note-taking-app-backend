import express, { Request, Response, NextFunction } from 'express'
import notebookRoutes from './routes/routes'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/notes', notebookRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Unhandled Error');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

