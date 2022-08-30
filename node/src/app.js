import { readFileSync } from 'fs';

console.log('\n.txt')
function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
}

syncReadFile('../words.txt');


