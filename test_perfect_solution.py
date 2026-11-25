import os
import subprocess
import re

dir_path = r"C:\Users\Uyen\Downloads\Phan Nhật Uyên\Phan Nhật Uyên\web-worklog-fcaj"
update_js_path = os.path.join(dir_path, "update_aws_workshop.js")

with open(update_js_path, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Fix the double-interpolation of \${var.name_prefix}
# In update_aws_workshop.js, replace "\\${var.name_prefix}" with "\\\\${var.name_prefix}"
code_fixed = code.replace(r"\${var.name_prefix}", r"\\${var.name_prefix}")

# 2. Modify the assembly so that newContent only contains header, nav, and panes overview to 5.5.3
# In update_aws_workshop.js:
# find where newFunction is constructed:
# const newFunction = `function getWorkshopViHtml() {\n  return \`\n    <div class="tech-report">\n      <!-- HEADER -->
# We want newPanesContent = `\n      <!-- HEADER --> ... \n      <div class="ws-module-pane ... id="pane-ws-5-5-3"> ... </div>\n\n      `;
# And we replace between `<!-- HEADER -->` and `<!-- MODULE 5.6 -->` in app.js!

# Let's inspect where newFunction starts in update_aws_workshop.js
start_marker = "const newFunction = `function getWorkshopViHtml() {\n  return \`\n    <div class=\"tech-report\">\n      <!-- HEADER -->"
if start_marker not in code_fixed:
    print("start_marker not found exactly, searching with regex...")
    # let's find `const newFunction = `
    pos = code_fixed.find("const newFunction = `")
    print("pos:", pos)
    print(repr(code_fixed[pos:pos+150]))

print("Done reading test script.")
