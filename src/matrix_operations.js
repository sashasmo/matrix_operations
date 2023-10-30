function addMatrices(matrix1, matrix2) {
    const result = [];

    for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }

    return result;
}

module.exports = {
    addMatrices
};
