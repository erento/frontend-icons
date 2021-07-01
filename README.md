# Erento Frontend Icons

## Prerequisites

Install `fontforge` to your system & install all the dependencies with `npm install`.

## Build & generate fonts in a container (out-of-date)
This step does not work anymore.

```bash
docker build -t frontend-icons .
docker run -it -u ${UID}:`id -g ${UID}` -v ${PWD}:/build frontend-icons
```

## Generate fonts
Add new SVG file(s) to src/icons and run then command below.

```bash
npm run build
``` 

Preview of icons is available in generated file `dist/fonts/icons.html`
Before running it check if the icons are compressed.

## Release

Raise the version in `package.json` and merge the branch to master (after PR is reviewed).
Then tag the commit and push the tag to remote.

```bash
git checkout master
git pull origin
git tag <NEW-VERSION>
git push origin <NEW-VERSION>
```

On [frontend-som](https://github.com/erento/frontend-som/blob/3de866f38222ab8f54ce0a7143f3d83f825fb898/package.json#L66) change 
