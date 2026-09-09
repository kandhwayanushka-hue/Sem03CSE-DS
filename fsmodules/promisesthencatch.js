const fs = require("fs").promises;
async function writeFile() {
    try{
        await fs.writeFile("promise.txt","Hello Students!");
        console.log("File created and data written successfully");
    }catch (error){
        console.log("Error:",error);
    }
}
writeFile();

//readFile
async function readFile() {
    try {
        const data = await fs.readFile("promise.txt", "utf8");
        console.log("File content:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}
readFile();
//updateFile
async function updateFile() {
    try{
        const data = await fs.appendFile("promise.txt","\nThis is an updated text");
        console.log("File updated successfully");
    }catch (error){
        console.log("Error:",error);
    }
}
updateFile();

async function renameFile() {
    try{
        await fs.rename("promise.txt","promise_new.txt");
        console.log("File renamed successfully");
    } catch (error) {
        console.log("Error:",error);
    }
}
renameFile();
