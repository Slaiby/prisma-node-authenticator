run ===>
yarn install
docker compose up -d
npx prisma migrate dev
yarn start
