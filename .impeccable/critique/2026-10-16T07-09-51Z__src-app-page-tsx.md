---
target: home
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\pj\\promoadekro\\src\\app\\page.tsx"
target_fingerprint: "sha256:d55e2ddd87578312030a48f561f9726f119cfd782df1008323778db653a7d689"
target_path: "C:\\pj\\promoadekro\\src\\app\\page.tsx"
timestamp: 2026-10-16T07-09-51Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design review, source only · B: detector CLI only; no browser available)

# Critique: home (src/app/page.tsx)

Score 22/32 (heuristics 7 and 10 n/a), Acceptable (69%).

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Pallino "In lavorazione" finto, fuori palette, aria-hidden |
| 2 | Match System / Real World | 3 | Accenti mancanti (priorita, gia, Novita, piu) |
| 3 | User Control and Freedom | 3 | Backdrop cookie copre l'hero |
| 4 | Consistency and Standards | 2 | 5 etichette CTA, header mailto, card non cliccabili con hover |
| 5 | Error Prevention | 3 | mailto fallisce senza client |
| 6 | Recognition Rather Than Recall | 3 | h3 di categoria lunghi |
| 7 | Flexibility and Efficiency | n/a | Marketing |
| 8 | Aesthetic and Minimalist Design | 2 | Sei anteprime pastello, slab e striscia ridondanti |
| 9 | Error Recovery | 3 | Neutro |
| 10 | Help and Documentation | n/a | Non applicabile |

## Specificity
Hero autoriale (blueprint panel); sotto il fold layout di categoria. Linee di quota promesse ma assenti. Anteprime: sei palette, riempimenti oro, foto Unsplash in hotlink (globals.css:1145-1149, 1260-1272). Ombra sfocata sull'hero (globals.css:880).
Detector: page+components [] ; src/app 71 advisory (41 font-size, 28 color, 1 radius, 1 codex-grid-background). Nessun antipattern grave.

## Priority Issues
- [P1] Header sticky mobile alto (~250px), overflow-x hidden su body può rompere sticky (globals.css:35-39, 171-178, 1394-1414). adapt, harden.
- [P1] Contrasto/leggibilità anteprime: testi 9-10px, bianco su oro ~2.6:1, brand-dark ~4.2:1, anteprime non aria-hidden (page.tsx:33-139). audit, typeset.
- [P1] Card prodotto a due colonne su mobile, tap target piccoli (globals.css:1492-1495, 1123-1129). adapt.
- [P2] Direzione non arriva sotto l'hero; anteprime contraddicono il sistema. bolder, layout.
- [P2] Sezioni ridondanti, CTA incoerenti, servizio sepolto (page.tsx:350-416). distill, clarify.
- [P3] Animazioni senza prefers-reduced-motion (globals.css:29-33, 882, 990, 1360-1379). harden.

## Personas
Jordan: servizio su misura da dedurre, nessun passo successivo, accenti mancanti. Riley: sticky+overflow, Unsplash offline, nomi giocatori reali. Casey: header alto, card strette, tap target piccoli, modal cookie.

## Minor
Sheet-tab inline come badge con ombra sfocata; bottoni hero a peso simile; aria-label logo; section overflow hidden taglia ombre; h3 footer in altra voce; regola br orfana; /guide non nel footer.

## Questions
Perché sei card sembrano sei aziende? Il servizio dovrebbe guidare? Il processo come prova? Quale prova reale mostrare? Una sola azione di contatto?
