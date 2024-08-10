// File
class TrieNode {
  children: Map<string, TrieNode>;
  files: Array<string>;

  constructor() {
    this.files = [];
    this.children = new Map();
  }
}

class fileSystemImpl {
  rootNode: TrieNode;

  constructor() {
    this.rootNode = new TrieNode();
  }

  private getFolder(folderPath: string, createOnAbsence = false) {
    const folders = folderPath.split("/");

    let currNode: TrieNode = this.rootNode;
    for (let i = 0; i < folders.length; i++) {
      const folder = folders[i];
      if (currNode.children.has(folder)) {
        currNode = currNode.children.get(folder)!;
      } else {
        if (!createOnAbsence) {
          throw new Error("Path does not exist");
        }
        currNode.children.set(folder, new TrieNode());
        currNode = currNode.children.get(folder) || new TrieNode();
      }
    }

    return currNode;
  }

  mkdir(folderPath: string) {
    this.getFolder(folderPath, true);
  }

  touch(folderPath: string, fileName: string) {
    const folder = this.getFolder(folderPath);

    folder.files.push(fileName);
  }

  ls(folderPath: string) {
    const ourFolder: TrieNode = this.getFolder(folderPath);
    const folders = ourFolder.children.keys();

    for (const folderNames of folders) {
      console.log(`\\${folderNames}`);
    }
    const files = ourFolder.files;
    for (let i = 0; i < files.length; i++) {
      console.log(`${files[i]}`);
    }
  }
}

function main() {
  const fs: fileSystemImpl = new fileSystemImpl();

  fs.mkdir("home/search/gre");
  fs.mkdir("home/se");

  fs.ls("home");

  fs.touch("home/se", "test.txt");

  fs.ls("home/se");
}

main();
