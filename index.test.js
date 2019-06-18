
describe('index.js', () => {

    jest.spyOn(global.console, 'log');

it('should return all the files in the current directory', () => {
    const filePaths = require('./index');

    expect(console.log).toHaveBeenCalledWith('/Users/mohanpadminiramesh/workspace/testData/TextFileWithTodo.txt');
    expect(console.log).not.toHaveBeenCalledWith('/Users/mohanpadminiramesh/workspace/testData/TextFileWithoutTodo.txt');
    expect(console.log).not.toHaveBeenCalledWith('/Users/mohanpadminiramesh/workspace/testData/TextFileSmallTodo.txt');

});

});