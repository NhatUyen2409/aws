import os
import re

dir_path = r"C:\Users\Uyen\Downloads\Phan Nhật Uyên\Phan Nhật Uyên\web-worklog-fcaj"
update_js_path = os.path.join(dir_path, "update_aws_workshop.js")

with open(update_js_path, "r", encoding="utf-8") as f:
    code = f.read()

# Let's inspect all ${ in the code
lines = code.splitlines()
print(f"Total lines: {len(lines)}")
for idx, line in enumerate(lines):
    # check for any ${
    m = re.findall(r"(?:\\*)\$\{([^}]+)\}", line)
    if m:
        for varname in m:
            # If it's not a normal JS variable in update_aws_workshop.js (like sec..., LINKS..., GITHUB..., currentWorkshopStepId, lang, filename, etc.)
            if not any(k in varname for k in ["sec", "LINKS", "GITHUB", "currentWorkshopStepId", "lang", "filename", "escapedCode", "imgSrc", "alt", "caption", "readTime", "gitUrl"]):
                print(f"Line {idx+1}: {line.strip()}")
