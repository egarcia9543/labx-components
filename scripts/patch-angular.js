const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../angular-lib/src/lib/components.ts');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/@Component\(\{/g, '@Component({\n  standalone: true,');

fs.writeFileSync(file, content);
console.log('✓ Patched standalone: true into Angular components');
