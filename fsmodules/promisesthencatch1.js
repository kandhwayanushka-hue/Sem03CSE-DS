const fs = require("fs").promises;
async function writeFile() {
    try{
        await fs.writeFile("promise11.txt","Hello Students!");
        console.log("File created and data written successfully");
    }catch (error){
        console.log("Error:",error);
    }
}
writeFile();

//readFile
async function readFile() {
    try {
        const data = await fs.readFile("promise11.txt", "utf8");
        console.log("File content:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}
readFile();

//delete
async function deleteFile() {
    try{
        await fs.unlink("promise11.txt");
        console.log("File deleted successfully");
    }catch (error){
        console.log("Error:",error);
    }
}
deleteFile();
