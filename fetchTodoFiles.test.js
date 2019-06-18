const fetchTodoFiles = require('./fetchTodoFiles');
const path = require('path');

describe('fetchTodoFiles', () => {
    it('should return all the files with absolute path which have TODO', () => {
        const folderPath = path.join(__dirname, '..');
        const currentDirectory = path.join(folderPath, 'testData');
        
        expect(fetchTodoFiles.fetchAllFilePaths(folderPath)).toContain(path.join(currentDirectory, 'TextFileWithTODO.txt'));
        expect(fetchTodoFiles.fetchAllFilePaths(folderPath)).not.toContain(path.join(currentDirectory, 'TextFileWithoutTODO.txt'));
        expect(fetchTodoFiles.fetchAllFilePaths(folderPath)).not.toContain(path.join(currentDirectory, 'TextFileWithSmallTODO.txt'));
    });

    it('should not return any files when the path is undefined', () => {
        expect(fetchTodoFiles.fetchAllFilePaths("abc")).toBeUndefined();
    });
});