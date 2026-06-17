#!/usr/bin/env python3
"""Render Matriz_y_Propuestas.xlsx (2 hojas) desde los JSON del TO-BE. Solo stdlib."""
import json, zipfile, os

BASE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(BASE), "Matriz_y_Propuestas.xlsx")

matriz = json.load(open(os.path.join(BASE, "matriz.json")))
prop = json.load(open(os.path.join(BASE, "propuestas.json")))
inv = json.load(open(os.path.join(BASE, "inventario.json")))

# lookup codigo -> nombre de tarea
NAME = {}
for dep in inv["departamentos"]:
    for t in dep["tareas"]:
        NAME[t["codigo"]] = t.get("nombre", "")

def esc(s):
    s = "" if s is None else str(s)
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")

def colref(n):  # 0-based -> A, B, ...
    s = ""
    n += 1
    while n:
        n, r = divmod(n - 1, 26)
        s = chr(65 + r) + s
    return s

def cell(r, c, val, style):
    return f'<c r="{colref(c)}{r}" t="inlineStr" s="{style}"><is><t xml:space="preserve">{esc(val)}</t></is></c>'

def sheet_xml(headers, rows, widths):
    cols = "".join(f'<col min="{i+1}" max="{i+1}" width="{w}" customWidth="1"/>' for i, w in enumerate(widths))
    out = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
           '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">',
           '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>',
           f'<cols>{cols}</cols>', '<sheetData>']
    out.append('<row r="1">' + "".join(cell(1, c, h, 1) for c, h in enumerate(headers)) + '</row>')
    for ri, row in enumerate(rows, start=2):
        out.append(f'<row r="{ri}">' + "".join(cell(ri, c, v, 2) for c, v in enumerate(row)) + '</row>')
    out.append('</sheetData></worksheet>')
    return "".join(out)

# --- Hoja 1: Matriz de Similitud ---
deptos = matriz["departamentos"]  # [[cod,nombre],...]
h1 = ["Grupo", "Proceso normalizado", "Criterios de agrupacion"] + [f"{c} - {n}" for c, n in deptos]
rows1 = []
for g in matriz["grupos"]:
    base = [g["id"], g.get("proceso_normalizado", ""), g.get("criterios", "")]
    celdas = g.get("celdas", {})
    for c, _ in deptos:
        codes = celdas.get(c, [])
        base.append("\n".join(f"{code} — {NAME.get(code, '')}" for code in codes))
    rows1.append(base)
w1 = [10, 34, 44] + [30] * len(deptos)

# --- Hoja 2: Propuestas ---
h2 = ["ID", "Clasificacion", "Edicion", "Grupos que atiende", "Propuesta de solucion",
      "Modulos", "Validacion vs doc oficial Odoo 19", "Doc oficial"]
rows2 = []
for p in prop["propuestas"]:
    rows2.append([
        p["id"], p.get("tipo", ""), p.get("edicion", ""), ", ".join(p.get("grupos_que_atiende", [])),
        p.get("descripcion", ""), p.get("modulos", ""),
        p.get("validacion", ""), p.get("doc_oficial", ""),
    ])
w2 = [14, 20, 22, 16, 60, 22, 55, 45]

CT = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>'''

RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

WB = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets>
<sheet name="Matriz de Similitud" sheetId="1" r:id="rId1"/>
<sheet name="Propuestas" sheetId="2" r:id="rId2"/>
</sheets></workbook>'''

WBRELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>'''

STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font></fonts>
<fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF305496"/></patternFill></fill></fills>
<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="3">
<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
<xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
</cellXfs>
<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>'''

with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
    z.writestr("[Content_Types].xml", CT)
    z.writestr("_rels/.rels", RELS)
    z.writestr("xl/workbook.xml", WB)
    z.writestr("xl/_rels/workbook.xml.rels", WBRELS)
    z.writestr("xl/styles.xml", STYLES)
    z.writestr("xl/worksheets/sheet1.xml", sheet_xml(h1, rows1, w1))
    z.writestr("xl/worksheets/sheet2.xml", sheet_xml(h2, rows2, w2))

print("OK ->", OUT)
print("Hoja 1 Matriz:", len(rows1), "grupos x", len(h1), "columnas")
print("Hoja 2 Propuestas:", len(rows2), "propuestas x", len(h2), "columnas")
