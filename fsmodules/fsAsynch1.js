const fs = require ('fs');
fs.writeFile(
    'example.txt',
    'Welcome to full stack development',
    (err) => {
        if (err) {
            console.log('Error writing file:', err);
        }
        console.log('File written successfully');
    }
)
fs.readFile('example.txt','utf8',(err,data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
//delete
fs.unlink('example.txt',(err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully');
    }
});