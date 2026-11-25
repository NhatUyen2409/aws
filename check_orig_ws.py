import os
import re

app_js_path = r"C:\Users\Uyen\Downloads\Phan Nhật Uyên\Phan Nhật Uyên\web-worklog-fcaj\app.js"
with open(app_js_path, "r", encoding="utf-8") as f:
    app_js = f.read()

start = app_js.find("function getWorkshopViHtml()")
end = app_js.find("function getWorkshopEnHtml()")
ws_func = app_js[start:end]

matches = re.findall(r"\$\{[^}]+\}", ws_func)
print("Matches in original getWorkshopViHtml:")
for m in set(matches):
    print(" -", m)
