function extractFile(path) {

    let words = path.substring(path.lastIndexOf("\\") + 1);
    let fileNmae = words.substring(0, words.lastIndexOf('.'));
    let fileExtension = words.substring(words.lastIndexOf(".") + 1)


    console.log(`File name: ${fileNmae}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')