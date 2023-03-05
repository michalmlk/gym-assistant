export const calculateBMI = (weight: number, height: number): number => {
    return Math.round(weight/Math.pow(height/100, 2)*100)/100;
}