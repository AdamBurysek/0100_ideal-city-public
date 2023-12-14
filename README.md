# VIDA - Ideální město

Hra slouží jako galerie obrázků, které lidi nakreslí na papír a poté pomocí kamery vyfotí a přidají do galerie.

#

Backend umí pouze číst data. Pokud tedy přidáte obázek do galerie, v galerii ho uvidíte, ale do databáze se neodešle. Stejně to platí pro mazání a editování obrázků. Změny uvidíte, ale v databázi se neprojeví.

#

Heslo do admin menu:

### test

Návod jak se dostat do admin menu najdete níže.

# Odkaz na web

[https://adamplanet.cz/ostatniweby/idealcity](https://adamplanet.cz/ostatniweby/idealcity)

Rozlišení 1920x1080. Hra není responzivní, tudíž se nepřispůsobí velikosti okna prohlížeče.

#

![IMG_1501](https://github.com/AdamBurysek/0100-ideal-city-public/assets/114564710/c7bdc643-92da-4d4a-8e63-9f5b0eeebfe5)
![Snímek obrazovky 2023-11-21 v 13 12 45](https://github.com/AdamBurysek/0100-ideal-city-public/assets/114564710/acc91b56-60d0-4eec-8e6e-cd9708932218)

## Hra obsahuje několik vychytávek jako:

### Admin menu

Slouží k tomu, že když nahraje někdo do galerie něco, co tam nepatří, je možné to ihned na místě smazat. Zároveň je zde možné určovat, které obrázky v galerii natrvalo zůstanou a které se budou mazat po vyčerpání maximalní kapacity galerie. To je z důvodu, aby někdo nepřemazal celou galerii například fotkou ruky. Zároveň se dá z admin menu přidávat do galerie obrázky uložené v počítači.

### Konverze obrázků

V kódu se dá nastavit maximální velikost obrázků. Aktuálně je nastavená na 0.3 Mb. Tedy pokud vyfotíte nebo vložíte obrázek, program bude tak dlouho redukovat jeho kvalitu dokud velikost obrázku nebude menší než 0.3 Mb. Jakýkoliv obrázek v galerii by akuálně neběl být větší než 0.3 Mb. I takto malé obrázky kvalitou plně dostačují. Dále je dobré v programu nastavit počáteční kvalitu obrázku před redukcí. To je z důvodu, že pokud vyfocený obrázek bude mít například 20 Mb a konverze bude na 0.3 Mb, takto konverze bude trvat poněkud dlouho (cca 5 sec) a program může působit, jakoby se seknul.

### Backend

Pro backend jsem použil MongoDB, který není ideální pro ukládání obrázků. Rád bych použil jinou službu, jako například Cloudinary, ovšem bojím se, že free verze by nestačila a placeným verzím bych se chtěl vyhnout. Proto MongoDB. Ovšem abych databázi co nejméně zatěžoval, galerie obrázků se stáhne pouze při spuštění programu. Poté se všechny změny dějí přímo v aplikaci a zároveň se odesílají příkazy o změnách do databáze. Uživatel tedy nemusí čekat na provedené změny v databázi a vše funguje rychle a plynule.

### Automatická slideshow

Pokud uživatel nebude stanovený čas (nastaveno na 3.5 min) používat program, zapne se slideshow. Ta se vypne po kliknutí nebo dotyku na obrazovku.

#

![A4 - 1](https://github.com/AdamBurysek/0100-ideal-city-public/assets/114564710/d7b6d1fd-42f6-42a8-917e-9bb4230ffc0f)

# electron-app

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
