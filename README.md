# Physics Experiments Explorer

> Tato stránka přibližuje experimenty a pokusy ze světa Fyziky jako srozumitelné a logické nástroje vědy, jejich postup utváření a jejich implikace ve obecném kontextu celého oboru. Dozvíte se jednoduchou cestou za pomocí interaktivních pomůcek jak se vytvářeli, prováděli a co dokazovali pokusy od základních vlnek na vodní hladině až po jemně neintuitivní kvantové jevy.

---
## Experimenty
<!-- Q = Quantum   R = Relativity   P = Particle   B = Beginner

Pound-Rebha (1959): Demonstrated gravitational redshift

At home : ver. of Young https://www.instructables.com/How-To-Make-a-Simple-Double-Slit/ -->

```
  ╭──────────────────┬─────────────────────────────────┬──────────────────────────┬────────────────────────────╮
  │ Field            │ Standard                        │ For Beginners            │ At Home                    │
  ├──────────────────┼─────────────────────────────────┼──────────────────────────┼────────────────────────────┤
  │    Quantum       │ Bell test, Young's interference │ Water wave interference  │ Young (DIY)                │
  ├──────────────────┼─────────────────────────────────┼──────────────────────────┼────────────────────────────┤
  │    Relativita    │ LIGO                            │ Eddington                │                            │
  ├──────────────────┼─────────────────────────────────┼──────────────────────────┼────────────────────────────┤
  │    Částice       │ IceCube, Muon g-2, DUNE         │                          │ Wilson cloud chamber       │
  ╰──────────────────┴─────────────────────────────────┴──────────────────────────┴────────────────────────────╯
```
<!-- ┬ ┴ ┼ ─ │ ├ ┤ -->
## Mapa stránek

```
index.html
├── about.html
├── contact.html
├── blog/
│   └── summary.html
│
└── pages/
    ├── [Kvantová fyzika]
    │   ├── exp_young.html
    │   ├── exp_DIYyoung.html
    │   ├── exp_water.html
    │   └── exp_bell.html
    │
    ├── [Částicová fyzika]
    │   ├── exp_icecube.html
    │   ├── exp_dune.html
    |   ├── exp_cloudchamber.html
    │   └── exp_muon.html
    │
    └── [Relativistická fyzika]
        ├── exp_ligo.html
        └── exp_eddington.html
```    
<!--
    ├── [Pro začátečníky]
    │   ├── exp_TODO.html
    │   └── exp_TODO.html
    └── [Udělej doma]
        ├── exp_TODO.html
        └── exp_TODO.html -->


---

## Popis stránek

### `index.html` — Domovská stránka
Úvodní stránka webu. Obsahuje přivítání, krátký popis projektu a přehled sekcí.

**Použité HTML prvky:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<a>`, `<img>`, `<h1>`, `<p>`

---

### `about.html` — O nás
Informace o projektu.

**Použité HTML prvky:** `<article>`, `<h2>`, `<p>`, `<img>`, `<ul>`, `<li>`

---

### `contact.html` — Kontakt
Kontaktní stránka s formulářem pro dotazy, připomínky a hodnocení.

**Použité HTML prvky:** `<form>`, `<label>`, `<input>`, `<textarea>`, `<select>`, `<option>`, `<button>`

**Návrh formuláře:**

```html
<form action="#" method="post">

  <label for="name">Jméno:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="type">Typ zprávy:</label>
  <select id="type" name="type">
    <option value="question">Dotaz</option>
    <option value="review">Hodnocení</option>
    <option value="objection">Připomínka</option>
  </select>

  <label for="message">Zpráva:</label>
  <textarea id="message" name="message" rows="5" required></textarea>

  <button type="submit">Odeslat</button>

</form>
```

---

### `blog/summary.html` — Blog
Přehledová stránka blogu s výpisem článků a jejich popisů, většího kontextu a novinek. 

| Článek | Popis |
|--------|-------|
| Bell test | Účelem tohoto experimentu bytlo ověřit hypotézu Bellovýxh nerovností a konsekventně tím potvrdit nebo vyvrátit možnost skrytých promněných a lokálního realismu. |
| Young's interference | Známí také jako dvou-štěrbynový experiment, Youngův pokus prokazoval myšlenku vlno-částicové duality a poukazoval na specifické vlastnosti rodící se kvantové mechaniky. |
| Water wave interference | Toto není žadný specifický vědecký experiment ale jednoduchá ukázka myšlenky superpozice vln na jednoduchém příkladu vodní hladiny. |
| Young (DIY) | Tenhle pokus není přímá kopie Youngova experimenntu ale spíše jen ilustrativní verze která stále ukazuje důležitou část originálu a to interferenční vzorek za pomocí bežně dostupných prostředků. |
| LIGO | Zkratka pro "Laser Interferometer Gravitational-Wave Observatory" je zařízení které používá 4km od sebe vzdálená zrdcadla a laser vyslaný mezi nimi pro zjištění gravitačních vln které by mohly interagovat se světlem během jeho přesunu. |
| Eddington | Experiment Sira Arthura Eddingtona a Sira Franka Dysona proveden při zatmění slunce 1919 prokázal Einsteinovu teorii relativity díky potvrzení existence gravitačního čočkování slunce. |
| IceCube | Tento projekt nacházející se na jižním pólu pod povrchem se skládá z tisíce senzorů rozprosetřených v prostou kubického kilometru s jediným účelem a to pozorovat interakce vysokoenergetických neutrín. |
| Muon g-2 | Tento experiment s účelem ověřit přesnot standartního modelu je zameřen na pozorování chování muonů v silném magnetickém poli s možnostní odhalení zatím neobjevených částic. |
| DUNE | Plným názvem Deep Underground Neutrino Experiment se zaměřuje na zkounání neutrín jež jsou poslány přes obal Země 1300km k detektoru čímž vedci zkoumají možnost vzniku převahy hmoty nad antihmotou.  |

**Použité HTML prvky:** `<table>`, `<tr>`, `<th>`, `<td>`, `<a>`, `<h2>`, `<p>`

---

### Stránky experimentů — `pages/`

Každá stránka experimentu obsahuje: popis pokusu, historický kontext, výsledky a implikace.
Vybrané stránky obsahují interaktivní simulaci řízenou HTML formulářem a JavaScriptem.
<!-- 
#### Kvantová fyzika

| Soubor | Experiment | Interaktivní prvky |
|--------|------------|-------------------|
| `exp_young.html` | Dvojštěrbinový experiment (Young) | `<img>`, `<table>` |
| `exp_bell.html` | Bellovy nerovnosti | `<form>`, `<select>`, `<table>` |
| `exp_TODO.html` | TODO | TODO |
| `exp_TODO.html` | TODO | TODO |

#### Standardní mechanika

| Soubor | Experiment | Interaktivní prvky |
|--------|------------|-------------------|
| `exp_TODO.html` | TODO | TODO |
| `exp_TODO.html` | TODO | TODO |

#### Relativistické

| Soubor | Experiment | Interaktivní prvky |
|--------|------------|-------------------|
| `exp_ligo.html` | LIGO — detekce gravitačních vln | `<table>`, `<form>` |
| `exp_TODO.html` | TODO | TODO |

#### Pro začátečníky

| Soubor | Experiment | Interaktivní prvky |
|--------|------------|-------------------|
| `exp_TODO.html` | TODO | TODO |

#### Udělej doma

| Soubor | Experiment | Interaktivní prvky |
|--------|------------|-------------------|
| `exp_TODO.html` | TODO | TODO | -->

---

### Příklad interaktivní simulace

Uživatel zadá parametry do formuláře, JavaScript vykreslí simulaci experimentu:

```html
<form id="sim-form">

  <label for="particle">Částice:</label>
  <input type="text" id="particle" name="particle" placeholder="např. elektron">

  <label for="speed">Rychlost (% rychlosti světla):</label>
  <input type="number" id="speed" name="speed" min="1" max="99">

  <label for="type">Typ experimentu:</label>
  <select id="type" name="type">
    <option value="compton">Comptonův rozptyl</option>
    <option value="double-slit">Dvojštěrbinový</option>
  </select>

  <button type="submit">Spustit simulaci</button>

</form>

<canvas id="simulation-output"></canvas>
```

---

## Přehled použitých HTML tagů

| Tag | Použití |
|-----|---------|
| `<form>` | Kontaktní formulář, interaktivní simulace |
| `<input>` | Textová pole, čísla, checkboxy |
| `<select>` / `<option>` | Výběr typu zprávy, typu experimentu |
| `<textarea>` | Zpráva v kontaktním formuláři |
| `<label>` | Popisky všech formulářových polí |
| `<button>` | Odeslání formuláře, spuštění simulace |
| `<table>` | Přehled článků, výsledky experimentů |
| `<ul>` / `<ol>` / `<li>` | Seznamy kroků, výsledků |
| `<img>` | Fotografie, diagramy experimentů |
| `<a>` | Navigace, odkazy na zdroje |
| `<header>` / `<footer>` | Záhlaví a zápatí stránek |
| `<nav>` | Navigační menu |
| `<section>` / `<article>` | Strukturování obsahu |
| `<canvas>` | Plocha pro JS simulace |
| `<code>` / `<pre>` | Ukázky kódu |
