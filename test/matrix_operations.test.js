const { expect } = require('chai');
const { addMatrices } = require('../src/matrix_operations');

describe('Matrix Operations', () => {
    it('should add two matrices', () => {
        const matrix1 = [[1, 2], [3, 4]];
        const matrix2 = [[5, 6], [7, 8]];
        const result = addMatrices(matrix1, matrix2);
        expect(result).to.deep.equal([[6, 8], [10, 12]]);
    });
});
