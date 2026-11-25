import subprocess

test_js = r"""
const s = `\${var.name_prefix}`;
console.log('Value with 1 backslash:', s);
const s3 = `\\\${var.name_prefix}`;
console.log('Value with 3 backslashes:', s3);
"""
with open("test_bs.js", "w", encoding="utf-8") as f:
    f.write(test_js)

res = subprocess.run(["node", "test_bs.js"], capture_output=True, text=True)
print("Returncode:", res.returncode)
print("STDOUT:\n", res.stdout)
if res.stderr:
    print("STDERR:\n", res.stderr)
