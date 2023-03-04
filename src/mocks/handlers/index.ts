import { rest } from "msw";
import { trainings } from '../data/trainings';

export const handlers = [
    rest.get('/trainings', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                trainings
            })
        )
    })
]