import re

with open("style.css", "r", encoding="utf-8") as f:
    css = f.read()

# remove /* comments */
clean_css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)

with open("style.nocomments.css", "w", encoding="utf-8") as f:
    f.write(clean_css)

print("✅ Comments removed successfully")
