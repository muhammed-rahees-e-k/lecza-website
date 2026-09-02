const fs = require('fs');
const path = require('path');

const tilesDir = '/home/nihal/Desktop/lecza-website/public/TILES';
const productsPagePath = '/home/nihal/Desktop/lecza-website/src/ProductsPage.jsx';

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(getFiles(file));
        } else { 
            results.push(file);
        }
    });
    return results;
}

const allTileFiles = getFiles(tilesDir);
let id = 98; 
const tileObjects = allTileFiles.filter(f => f.match(/\.(png|jpg|jpeg|tif)$/i)).map(file => {
    const relativePath = file.replace('/home/nihal/Desktop/lecza-website/public', '');
    const title = path.basename(file).replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    return `    { id: ${id++}, src: '${relativePath}', title: '${title.replace(/'/g, "\\'")}', category: 'Tiles' }`;
}).join(',\n');

let content = fs.readFileSync(productsPagePath, 'utf8');
content = content.replace(/    \{ id: 97, src: '\/STONES\/RR STONE\/SAGAR YELLOW RR STONE\.png', title: 'Sagar Yellow RR Stone', category: 'Stones' \},/, 
`    { id: 97, src: '/STONES/RR STONE/SAGAR YELLOW RR STONE.png', title: 'Sagar Yellow RR Stone', category: 'Stones' },\n${tileObjects},`);

fs.writeFileSync(productsPagePath, content);
console.log('Done appending ' + (id - 98) + ' tiles');
