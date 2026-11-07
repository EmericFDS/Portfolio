# Déploiement & Sécurisation sur Infomaniak (`emericfds.com`)

Ce dépôt contient toute la refonte **Swiss Editorial UX/UI**, l'optimisation **SEO / GEO (`llms.txt`, `llms-full.txt`, `Schema.org`)**, **GA4 Consent Mode v2 (`gtag-init.js`)** et la configuration serveur durcie pour **Infomaniak Hébergement Web**.

## Fichiers prêts pour Infomaniak
- `.htaccess` : redirection HTTPS compatible proxy SSL Infomaniak + renouvellement Let's Encrypt (`/.well-known/acme-challenge/`), redirection canonique `www` -> `emericfds.com`, en-têtes de sécurité stricts (`Strict-Transport-Security` preload, `Content-Security-Policy` **sans `'unsafe-inline'` ni `'unsafe-eval'`** pour `script-src`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Permissions-Policy`, `Referrer-Policy`), blocage des fichiers cachés/dev, compression Gzip et cache navigateur.
- `.well-known/security.txt` : politique de contact sécurité standard RFC 9116.
- `scripts/build-infomaniak.sh` (`npm run build:infomaniak`) : génère dans `./dist-infomaniak/` la racine web propre (`141 Mo`) sans fichiers de test, `node_modules` ni archive legacy (`317 Mo`).
- `.github/workflows/deploy-infomaniak.yml` : déploiement automatique optionnel via `rsync/SSH` vers Infomaniak.
- Branche Git dédiée `origin/infomaniak-webroot` : contient uniquement la racine web de production (`dist-infomaniak/`), prête à être tirée directement depuis l'outil **Git** du Manager Infomaniak.

## Étapes rapides en local / Manager Infomaniak
1. **Récupérer la dernière version en local** :
   ```bash
   git fetch origin
   git checkout main
   git pull origin main
   npm run build:infomaniak
   ```
2. **Transfert sur Infomaniak** :
   - **Via Git natif Infomaniak** : *Hébergement Web → Site `emericfds.com` → Paramètres avancés → Git* → dépôt `git@github.com:EmericFDS/Portfolio.git`, branche `infomaniak-webroot` (avec Deploy Key SSH en lecture seule sur GitHub).
   - **Ou via SFTP / rsync en local** : envoyer le contenu de `./dist-infomaniak/` vers `/sites/emericfds.com/`.
3. **DNS & SSL Infomaniak** : pointer `emericfds.com` et `www.emericfds.com` vers l'hébergement Infomaniak, activer le certificat **Let's Encrypt** gratuit et **Forcer HTTPS**.
4. **Verrouillage GitHub** : désactiver **GitHub Pages** (`Settings → Pages → Unpublish`) puis passer le dépôt en **Privé** (`Settings → Change visibility → Make private`).
