FROM node:gallium-alpine as dev

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "run", "start:dev" ]


FROM node:gallium-alpine as prod-build

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
RUN yarn run build

FROM node:gallium-alpine as prod

WORKDIR /app
COPY nest-cli.json .

COPY package.json .
COPY yarn.lock .
COPY --from=prod-build /app/dist dist
COPY --from=prod-build /app/node_modules node_modules

ENTRYPOINT [ "yarn", "run", "start:prod" ]


