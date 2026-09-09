const fs = require ('fs');
fs.writeFile(
    'sample.txt',
    'Welcome to full stack development',
    (err) => {
        if (err) {
            console.log('Error writing file:', err);
        }
        console.log('File written successfully');
    }
)
fs.readFile('sample.txt','utf8',(err,data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
//append file
fs.appendFile('sample.txt','\nThis is an appended text',(err) => {
    if (err) {
        console.log('Error appending file:', err);
    }
    else{
        console.log('\n3. File updated successfully');
    }
})
//updated read
fs.readFile('sample.txt','utf8',(err,data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log('Updated file content:', data);
});

