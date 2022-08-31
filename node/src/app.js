import { readFile } from 'fs';

readFile("../../words.txt", "utf8", function (err, data) {
    console.log('\n.txt')
    console.log(data);
});

readFile("../../words.csv", "utf8", function (err, data) {
    console.log('\n.csv');
    console.log(data);
});

readFile("../../words.json", "utf8", function (err, data) {
    console.log('\n.json');
    console.log(data);
});

readFile("../../words.xml", "utf8", function (err, data) {
    console.log('\n.xml');
    console.log(data);
});

readFile("../../words.yaml", "utf8", function (err, data) {
    console.log('\n.yaml');
    console.log(data);
});

