FROM node:18-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN corepack enable
RUN pnpm i
ADD . .
RUN pnpm build
CMD ["node", "./dist/main.js"]