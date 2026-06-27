# Site Maître Célia Rehane — Avocat à Marseille

Site vitrine premium et orienté conversion pour le cabinet de Maître Célia Rehane
(droit pénal, droit de la famille, dommages corporels).

Site **100 % statique** (HTML / CSS / JS) — aucun build, aucune dépendance.
Il suffit d'ouvrir `index.html` dans un navigateur, ou de déployer le dossier tel quel.

## Direction artistique (V2)

- **Couleurs** : bleu nuit profond `#0f172a` · ivoire `#f8f6f1` · accent champagne désaturé `#a68a64` (utilisé avec parcimonie).
- **Typographies** : Libre Baskerville (titres) + Inter (textes).
- Style sobre, éditorial, intemporel. Surfaces plates, animations discrètes.

## Pages

| Fichier | Page |
|---|---|
| `index.html` | Accueil (hero, domaines, dommages, pourquoi, méthode, avis, honoraires, contact) |
| `domaines-de-competences.html` | Hub des domaines |
| `droit-penal.html` | Droit pénal |
| `droit-de-la-famille.html` | Droit de la famille |
| `dommages-corporels.html` | Dommages corporels (+ FAQ) |
| `honoraires.html` | Honoraires détaillés (+ FAQ) |
| `pourquoi-me-choisir.html` | Pourquoi me choisir (6 engagements) |
| `contact.html` | Formulaire + carte + coordonnées |
| `mentions-legales.html` | Mentions légales |
| `politique-de-confidentialite.html` | RGPD |

Fichiers communs : `style.css`, `script.js`, `photo-output.jpg`.

## À COMPLÉTER avant mise en ligne (chercher `TODO` dans le code)

1. **Lien LinkedIn** — remplacer `https://www.linkedin.com/`.
2. **Avis Google** — dans `index.html`, section `#avis` : coller le widget gratuit
   Trustindex ou Elfsight (connecté à la fiche Google Business) à la place du bloc
   placeholder, et mettre le vrai lien « Voir les avis Google ». Ne pas inventer de faux avis.
3. **Mentions légales** — renseigner les champs `[à compléter]` (Barreau, SIREN, assurance RCP, hébergeur).

## Déploiement recommandé : Netlify

Le formulaire de contact utilise **Netlify Forms** (`data-netlify="true"`).
Pour qu'il fonctionne, déployer sur Netlify (glisser-déposer le dossier sur
app.netlify.com). Les demandes arrivent dans l'onglet *Forms*. En ouverture locale
(`file://`), le formulaire affiche le message de confirmation sans rien envoyer : c'est normal.

## Respect des règles métier

- Dommages corporels : 1er rendez-vous gratuit + aucune somme à débourser.
- Droit de la famille : 1er rendez-vous gratuit.
- Droit pénal & autres : rendez-vous non gratuit, sauf indication contraire.
- Horaires : Lun–Ven · 10h–12h / 14h–18h. Aucun résultat juridique promis.
