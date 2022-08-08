// import { readFileSync } from 'fs';
// import parse from 'csv-parse/lib/sync';

// const { readFileSync } = require('fs');
// const { parse } = require('csv-parse/sync');
const fs = require('fs');
const csv = require('csv-parser');

module.exports = function (api) {
    api.loadSource(async (store) => {
        store.addMetadata('author', 'Phillip Rearick');
    });

    api.loadSource((actions) => {
        actions.getCollection('Post').addReference('categories', 'Category');
    });

    api.loadSource((actions) => {
        const collection = actions.addCollection({ typeName: 'stockData' });
        // const results = [];
        // const file = xlsx.readFile('./src/resources/data/data2.csv');

        let rawData = fs.readFileSync('./src/resources/data/data.json');
        data = JSON.parse(rawData);
        data.forEach((item) => {
            // console.log(item);
            collection.addNode(item);
        });

        // fs.createReadStream('./src/resources/data/data2.csv')
        //     .pipe(csv())
        //     .on('data', (data) => results.push(data))
        //     .on('end', () => {
        //         console.log(results.length);
        //         // for (item in results) {
        //             // console.log(item);
        //         // }
        //     });

        // const input = readFileSync('./src/resources/data/data.csv', 'utf8');

        // const stockData = parse(input, {
        //     columns: true,
        //     skip_empty_lines: true,
        // });

        // const collection = actions.addCollection({ typeName: 'stockData' });

        // for (const data in stockData) {
        //     console.log(data);
        //     collection.addNode({ data: data });
        // }
    });
};
