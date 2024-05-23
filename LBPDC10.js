const fs = require('fs');

//1 Завдання
const inputFilePath = 'PDC.txt';

function readAndProcessInputGraph(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Помилка при читанні файлу:', err);
            return;
        }
        const lines = data.trim().split('\n');
        const [n, m] = lines[0].split(' ').map(Number);

        console.log(`Кількість вершин: ${n}`);
        console.log(`Кількість ребер: ${m}`);

        const graph = [];
        for (let i = 1; i <= m; i++) {
            const [v, u, w] = lines[i].split(' ').map(Number);
            graph.push({ from: v, to: u, weight: w });
        }
        console.log('Граф у вигляді масиву об\'єктів:', graph);
    });
}

readAndProcessInputGraph(inputFilePath);

//2 Завдання
function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join(' ')));
}

function writeMatrixToFile(matrix, filePath) {
    const data = matrix.map(row => row.join(' ')).join('\n');
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error("Помилка при записі в файл:", err);
            return;
        }
        console.log("Матриця успішно записана в файл!");
    });
}

// Демонстраційна матриця
const demoMatrix = [
    [0, 1, 2],
    [1, 0, 3],
    [2, 3, 0]
];

const outputFilePath = 'OUTPDC.txt';

// Приклад використання
printMatrix(demoMatrix);
writeMatrixToFile(demoMatrix, outputFilePath);
