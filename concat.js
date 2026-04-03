import fs from 'fs';
import path from 'path';

const partsDir = 'c:\\Users\\dangh\\OneDrive\\Desktop\\document_study\\Bao_Cao_Chuyen_De_Parts';
const file1 = fs.readFileSync(path.join(partsDir, 'BAO_CAO_CHUYEN_DE_PHAN_1.md'), 'utf8');
const file2 = fs.readFileSync(path.join(partsDir, 'BAO_CAO_CHUYEN_DE_PHAN_2.md'), 'utf8');
const file3 = fs.readFileSync(path.join(partsDir, 'BAO_CAO_CHUYEN_DE_PHAN_3.md'), 'utf8');

const combined = file1 + '\n\n' + file2 + '\n\n' + file3;

fs.writeFileSync('src/raw_data.md', combined, 'utf8');
console.log('Concatenated successfully!');
