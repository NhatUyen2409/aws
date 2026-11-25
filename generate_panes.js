// generate_panes.js
const fs = require('fs');
const path = require('path');

// Read update_aws_workshop.js
let code = fs.readFileSync('update_aws_workshop.js', 'utf8');

// Replace the end part (from line 906 onwards) to just write allPanes to a file
const cutMarker = '<!-- EXISTING MODULE 5.6 (UNTOUCHED) -->';
const cutIdx = code.indexOf(cutMarker);
if (cutIdx === -1) {
  console.error("Could not find cutMarker");
  process.exit(1);
}

// In the code before cutIdx, let's see how newFunction was created
// Let's replace the ending so that instead of newFunction, we export the panes HTML
const modifiedCode = code.substring(0, cutIdx) + `
  fs.writeFileSync('generated_panes_raw.html', 
    \`\${secOverview}
    <!-- SPLIT -->
    \${sec51}
    <!-- SPLIT -->
    \${sec52}
    <!-- SPLIT -->
    \${sec53}
    <!-- SPLIT -->
    \${sec531}
    <!-- SPLIT -->
    \${sec532}
    <!-- SPLIT -->
    \${sec533}
    <!-- SPLIT -->
    \${sec54}
    <!-- SPLIT -->
    \${sec541}
    <!-- SPLIT -->
    \${sec542}
    <!-- SPLIT -->
    \${sec543}
    <!-- SPLIT -->
    \${sec544}
    <!-- SPLIT -->
    \${sec55}
    <!-- SPLIT -->
    \${sec551}
    <!-- SPLIT -->
    \${sec552}
    <!-- SPLIT -->
    \${sec553}\`, 'utf8');
  console.log("SUCCESS: Raw panes generated.");
`;

fs.writeFileSync('temp_gen.js', modifiedCode, 'utf8');
console.log("temp_gen.js written.");
