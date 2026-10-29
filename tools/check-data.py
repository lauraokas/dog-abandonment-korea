#!/usr/bin/env python3
"""Check the timeline data files in data/ before publishing.

Run from the project folder:  python3 tools/check-data.py
Prints every problem it finds and exits with a non-zero code if there are any.
"""
import json, re, sys, glob, os

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data')
problems = []

def load(path):
    text = open(path, encoding='utf-8').read()
    m = re.search(r'\.push\((\{.*\})\);\s*$', text, re.S)
    if m: return json.loads(m.group(1))
    m = re.search(r'categories = (\[.*\]);\s*$', text, re.S)
    return json.loads(m.group(1))

cats = {c['k'] for c in load(os.path.join(root, 'categories.js'))}
ids_seen = {}
mains = 0
for path in sorted(glob.glob(os.path.join(root, '*.js'))):
    name = os.path.basename(path)
    if name == 'categories.js': continue
    c = load(path)
    where = c.get('id', name)
    for f in ('id', 'name', 'main', 'intro', 'eras', 'sources', 'events'):
        if f not in c: problems.append(f'{where}: missing country field "{f}"')
    mains += 1 if c.get('main') else 0
    for e in c.get('eras', []):
        if e['from'] >= e['to']: problems.append(f'{where}: era "{e["n"]}" starts after it ends')
    seqs = set()
    for e in c['events']:
        eid = f'{where}/{e.get("id")}'
        for f in ('id', 'seq', 'cat', 'start', 'date', 'tag', 'title', 'sum', 'pts', 'src'):
            if f not in e: problems.append(f'{eid}: missing "{f}"')
        if e.get('id') in ids_seen: problems.append(f'{eid}: id already used in {ids_seen[e["id"]]}')
        ids_seen[e.get('id')] = where
        if e.get('cat') not in cats: problems.append(f'{eid}: unknown category "{e.get("cat")}"')
        if 'end' in e and e['end'] < e['start']: problems.append(f'{eid}: end is before start')
        if e.get('bar') and 'end' not in e: problems.append(f'{eid}: has a bar label but no end year')
        if e.get('seq') in seqs: problems.append(f'{eid}: duplicate seq')
        seqs.add(e.get('seq'))
        for s in e.get('src', []):
            if s['s'] not in c['sources']: problems.append(f'{eid}: source "{s["s"]}" is not in this country\'s sources')
        if not e.get('src'): problems.append(f'{eid}: no sources')
    used = {s['s'] for e in c['events'] for s in e['src']}
    for k in c['sources']:
        if k not in used: problems.append(f'{where}: source "{k}" is never used')
if mains != 1: problems.append(f'exactly one country must have main: true (found {mains})')

if problems:
    print('\n'.join(problems)); sys.exit(1)
print('Data OK:', len(ids_seen), 'events,', len(cats), 'categories')
