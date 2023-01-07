CREATE TABLE cakes (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE,
    price NUMERIC NOT NULL,
    image VARCHAR NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE clients (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    phone VARCHAR NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    "cakeId" INTEGER NOT NULL REFERENCES  "cakes"("id"),
    "clientId" INTEGER NOT NULL REFERENCES  "clients"("id"),
    quantity INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    totalPrice NUMERIC NOT NULL
);