// генерация случайного цвета
export const colorCell = () => {
    const color = '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
    return { background: color }
};