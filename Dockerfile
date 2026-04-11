FROM node:24-bookworm

WORKDIR /app

RUN npm install -g wrangler @google/gemini-cli

USER node

CMD ["npm", "run", "dev"]
