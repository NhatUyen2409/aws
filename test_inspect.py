with open(r"C:\Users\Uyen\Downloads\Phan Nhật Uyên\Phan Nhật Uyên\web-worklog-fcaj\update_aws_workshop.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r"var\.name_prefix", text)]
print(f"Total occurrences of var.name_prefix: {len(matches)}")
for idx, pos in enumerate(matches):
    line_no = text[:pos].count('\n') + 1
    print(f"{idx+1} (line {line_no}): {repr(text[pos-40:pos+40])}")
