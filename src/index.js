import express from "express";
import pedidos from "./routes/pedidosRoutes.js";
import moradores from "./routes/moradoresRoutes.js";
import condominios from "./routes/condominiosRoutes.js"

const routes = (app) => {
    app.use(express.json(), pedidos, moradores, condominios);
};

export default routes;