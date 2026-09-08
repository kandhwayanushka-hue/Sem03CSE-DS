const fs= require('fs');
fs.writeFileSync('secastudent.txt','This is me','utf8'); 
console.log('file is written succesfully');

//read file
const fileContent = fs.readFileSync('secastudent.txt','utf8');
console.log('file is read successfully',fileContent);

fs.appendFileSync('secastudent.txt','\nThis is me again','utf8');
console.log('file is updated successfully');

//fs.unlinkSync('secastudent.txt');
//console.log('file is deleted successfully');
//folder create
//fs.mkdirSync('samplefolder');
//console.log('folder is successfully created');

if (fs.existsSync('seccastudent.txt')){
    console.log('file exists');
}else{
    console.log('file not found ,need to create this file');
}