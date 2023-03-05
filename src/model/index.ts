export type Training = {
    id: string,
    duration: number,
    intensity: number,
    activityType: string
}

export type User = {
    id: string,
    name: string,
    age: number,
    weight: number,
    height: number
}

export interface ActivityChartState {
    labels: Array<number | string>,
    datasets: Array<{
        id: number,
        label: string | undefined,
        data: Array<number>
    }>
}