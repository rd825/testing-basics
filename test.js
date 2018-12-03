const assert = require('assert');

function add(a,b) {
    return a + b
}

assert.strictEqual(add(2,3), 5);

try {
    assert.equal('1',1);
} 
catch (err) {
    console.log(`Tests ran: ${err}`);
}