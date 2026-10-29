#!/usr/bin/env python3
"""Check the style rules that are easy to break by accident.

Run from the project folder:  python3 tools/check-style.py

Rule: yellow is only ever the exact original colour #fffc31, at full strength. It is never tinted,
mixed into another colour, faded, or darkened (no pale yellow, no mustard, no ochre).
"""
import colorsys, glob, os, re, sys

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
files = sorted(glob.glob(os.path.join(root, '*.html')) + glob.glob(os.path.join(root, '*.css')))
problems = []

for path in files:
    name = os.path.basename(path)
    for n, line in enumerate(open(path, encoding='utf-8').read().split('\n'), 1):
        if len(line) > 4000: continue  # skip the one-line wrapper at the top of the older pages
        # 1. yellow mixed into, or faded inside, another colour
        for m in re.finditer(r'color-mix\(([^;]*)', line):
            if re.search(r'--highlight|--yellow|#fffc31', m.group(1), re.I):
                problems.append(f'{name}:{n}: yellow is mixed into another colour: {m.group(0)[:80]}')
        if re.search(r'rgba?\(\s*255\s*,\s*25[0-9]\s*,\s*[0-9]{1,2}\b', line) :
            problems.append(f'{name}:{n}: semi-transparent or altered yellow')
        # 2. any other colour that reads as yellow, mustard or ochre (hue 38 to 70 degrees, clearly coloured)
        for m in re.finditer(r'#([0-9a-fA-F]{6})\b', line):
            hx = m.group(1).lower()
            if hx == 'fffc31': continue
            r, g, b = (int(hx[i:i + 2], 16) / 255 for i in (0, 2, 4))
            h, l, s_ = colorsys.rgb_to_hls(r, g, b)
            if 38 <= h * 360 <= 70 and s_ > 0.35 and 0.12 < l < 0.9:
                problems.append(f'{name}:{n}: #{hx} looks like a yellow, mustard or ochre; only #fffc31 is allowed')

if problems:
    print('\n'.join(problems)); sys.exit(1)
print('Style OK: yellow is only the exact original tone in', len(files), 'files')
