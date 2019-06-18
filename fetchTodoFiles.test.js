const fetchTodoFiles = require('./fetchTodoFiles');

describe('fetchTodoFiles', () => {
    it('should return all the files with absolute path which have TODO', () => {
        expect(fetchTodoFiles.fetchAllFilePaths(__dirname)).toContain('/Users/mohanpadminiramesh/workspace/todo_search/todoFiles/someFileWithTodo.txt');
        expect(fetchTodoFiles.fetchAllFilePaths(__dirname)).not.toContain('/Users/mohanpadminiramesh/workspace/todo_search/todoFiles/someFileWithoutTodo.txt');
        expect(fetchTodoFiles.fetchAllFilePaths(__dirname)).not.toContain('/Users/mohanpadminiramesh/workspace/todo_search/todoFiles/someFileWithSmallTodo.txt');
    });

    it('should not return any files when the path is undefined', () => {
        expect(fetchTodoFiles.fetchAllFilePaths("abc")).toBeUndefined();
    });
});