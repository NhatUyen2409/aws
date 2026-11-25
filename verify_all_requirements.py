import os
import re

dir_path = r"C:\Users\Uyen\Downloads\Phan Nhật Uyên\Phan Nhật Uyên\web-worklog-fcaj"
app_js_path = os.path.join(dir_path, "app.js")

with open(app_js_path, "r", encoding="utf-8") as f:
    app_js = f.read()

print("--- 1. CHECK WORKSHOP PANES ---")
panes = [
    "pane-ws-overview",
    "pane-ws-5-1",
    "pane-ws-5-2",
    "pane-ws-5-3",
    "pane-ws-5-3-1",
    "pane-ws-5-3-2",
    "pane-ws-5-3-3",
    "pane-ws-5-4",
    "pane-ws-5-4-1",
    "pane-ws-5-4-2",
    "pane-ws-5-4-3",
    "pane-ws-5-4-4",
    "pane-ws-5-5",
    "pane-ws-5-5-1",
    "pane-ws-5-5-2",
    "pane-ws-5-5-3",
    "pane-ws-5-6",
    "pane-ws-5-7"
]

all_panes_ok = True
for p in panes:
    if f'id="{p}"' in app_js:
        print(f"  [OK] {p}")
    else:
        print(f"  [MISSING] {p}")
        all_panes_ok = False

print("\n--- 2. CHECK PRESERVED SECTIONS ---")
checks = [
    ("Event 4 Werner Vogels", "Werner Vogels" in app_js),
    ("Event 1", "Sự kiện 1" in app_js or "Event 1" in app_js),
    ("Event 2", "Sự kiện 2" in app_js or "Event 2" in app_js),
    ("Event 3", "Sự kiện 3" in app_js or "Event 3" in app_js),
    ("Proposal", "proposal" in app_js.lower()),
    ("Worklog", "worklog" in app_js.lower()),
    ("Self-evaluation", "đánh giá bản thân" in app_js.lower() or "self-eval" in app_js.lower()),
    ("Feedback", "feedback" in app_js.lower() or "phản hồi" in app_js.lower())
]
for name, ok in checks:
    print(f"  [{'OK' if ok else 'FAIL'}] {name}")

print("\n--- 3. CHECK NO /fcaj-report/ PATHS ---")
fcaj_report_count = app_js.count("/fcaj-report/")
print(f"  Occurrences of /fcaj-report/: {fcaj_report_count}")

print("\n--- 4. CHECK WORKSHOP IMAGES IN 5.1 TO 5.5.3 ---")
ws_vi_start = app_js.find("function getWorkshopViHtml()")
ws_vi_end = app_js.find("<!-- MODULE 5.6 -->", ws_vi_start)
ws_vi_chunk = app_js[ws_vi_start:ws_vi_end]

img_srcs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', ws_vi_chunk)
print(f"  Total <img> in 5.1-5.5.3: {len(img_srcs)}")
all_imgs_exist = True
for src in img_srcs:
    local_path = os.path.join(dir_path, src.replace("/", "\\"))
    exists = os.path.isfile(local_path)
    if exists:
        print(f"    [EXISTS] {src}")
    else:
        print(f"    [NOT FOUND] {src} -> {local_path}")
        all_imgs_exist = False

print("\n--- 5. CHECK 5.4.4 step13-result.png RAW TEXT ---")
has_step13_raw = ':::figure{src="/images/workshop/step13-result.png"' in ws_vi_chunk
print(f"  step13-result.png is raw text: {has_step13_raw}")

if all_panes_ok and all_imgs_exist and has_step13_raw and fcaj_report_count == 0:
    print("\n>>> ALL VERIFICATIONS PASSED 100%! <<<")
else:
    print("\n>>> SOME VERIFICATIONS FAILED, SEE ABOVE <<<")
