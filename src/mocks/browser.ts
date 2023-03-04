import { setupWorker } from "msw";
import { handlers } from './handlers';
import { db } from './db';

export const worker = setupWorker(...handlers);

for(let i=0;i<25;i++) {
    db.training.create();
}

