
describe('index.js', () => {

it('should return all the files in the current directory', () => {
    const filePaths = require('./index').fetchAllFilePaths(__dirname);

    expect(filePaths).toContain("/Users/mohanpadminiramesh/workspace/todo_search/index.js");
});

it('should return undefined when invalid directory is passed', () => {
    const filePaths = require('./index').fetchAllFilePaths('abc');

    expect(filePaths).toBeUndefined();
});
});