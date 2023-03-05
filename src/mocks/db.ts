import { factory, primaryKey } from "@mswjs/data";
import { faker } from '@faker-js/faker';

const activityTypes: Array<string> = ['bike', 'running', 'walking',
    'swimming', 'martial arts', 'baseball', 'basketball', 'football', 'hockey', 'volleyball', 'skating'];

export const db = factory({
    training: {
        id: primaryKey(() => faker.datatype.uuid()),
        duration: () => faker.datatype.number({min: 15, max: 125}),
        intensity: () => faker.datatype.number({min: 1, max: 100}),
        activityType: () => activityTypes[Math.floor(Math.random()*activityTypes.length)]
    },
    userData: {
        id: primaryKey(() => faker.datatype.uuid()),
        name: () => `${faker.name.firstName()} ${faker.name.lastName()}`,
        age: () => faker.datatype.number(({min: 14, max: 99})),
        weight: () => faker.datatype.number(({min: 40, max: 150})),
        height: () => faker.datatype.number({min: 150, max: 198}),
    }
})