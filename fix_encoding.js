import fs from 'fs';

const buf = fs.readFileSync('src/raw_data.md');
const str = buf.toString('utf8');
const fixed = Buffer.from(str, 'binary').toString('utf8');

fs.writeFileSync('src/raw_data.md', fixed, 'utf8');
console.log('Fixed double encoding!');
