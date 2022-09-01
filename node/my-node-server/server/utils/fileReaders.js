import { readFile } from 'fs';

export const readTxt = () => {
    return new Promise((resolve, reject) => {
        readFile("../../words.txt", "utf8", function (err, data) {
            if (err) {
                reject('Error');
            } 
            resolve(data);
        });
    });
}

export const readCsv = () => {
    return new Promise((resolve, reject) => {
        readFile("../../words.csv", "utf8", function (err, data) {
            if (err) {
                reject('Error');
            } 
            resolve(data);
        });
    });
}