CREATE TABLE cakes (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    price NUMERIC NOT NULL,
    image VARCHAR NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    phone VARCHAR NOT NULL
);

CREATE TABLE ordes (
    id SERIAL PRIMARY KEY,
    "cakeId" INTEGER REFERENCES "cakes"("id"),
    "clientId" INTEGER REFERENCES "clients"("id"),
    quantity INTEGER,
    createdAt TIMESTAMP,
    totalPrice NUMERIC
);