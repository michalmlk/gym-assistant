import { rest } from 'msw';
import { db } from '../db';

export const handlers = [
    rest.get('/trainings', (req, res, ctx) => {
        const trainings = db.training.getAll();
        return res(
            ctx.status(200),
            ctx.json({
                trainings
            })
        )
    })
]