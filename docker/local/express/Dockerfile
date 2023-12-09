ARG NODE_VERSION=16-alpine3.12

FROM node:${NODE_VERSION}

LABEL name="mern-invoice"
LABEL license="MIT"
LABEL description="MERN invoice image"

ENV NODE_ENV=development

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

RUN addgroup --system invoice \
  && adduser --system --ingroup invoice invoice

RUN apk --update add ttf-freefont fontconfig && rm -rf /var/cache/apk/*

RUN apk add --no-cache curl && \
   cd /tmp && curl -Ls https://github.com/arjonkman/phantomized/archive/refs/tags/latest.tar.gz | tar xz && \
   curl -k -Ls https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 | tar -jxf - &&\
   cp phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs && \
   rm -fR phantomjs-2.1.1-linux-x86_64 && \
   apk del curl

COPY package*.json ./

RUN npm install

COPY --chown=invoice:invoice . ${APP_HOME}

RUN chown invoice:invoice ${APP_HOME}

USER invoice

CMD [ "npm","run","dev" ]