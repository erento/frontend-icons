FROM ubuntu
RUN apt-get update && apt-get --no-install-recommends -y install \
    nodejs npm fontforge ttfautohint nodejs-legacy
WORKDIR /build
CMD ["npm", "run", "build"]
