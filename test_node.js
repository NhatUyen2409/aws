// test_script.js
const fs = require('fs');
const path = require('path');

// Let's test reading update_aws_workshop.js up to line 880 (before newFunction)
const updateScript = fs.readFileSync('update_aws_workshop.js', 'utf8');
console.log("update_aws_workshop.js length:", updateScript.length);
