# Erento Frontend Icons

## Build in a container
docker build -t frontend-icons .
docker run -it -u ${UID}:`id -g ${UID}` -v ${PWD}:/build frontend-icons

## Generate webfonts
Add new SVG file to src/icons and run command below.
Preview of icons is available in generated file dist/fonts/icons.html
Before running it check if the icons are compressed.

    npm run build
