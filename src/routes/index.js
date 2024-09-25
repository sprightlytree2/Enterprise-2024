import express from "express";
import pedidos from "./pedidosRoutes.js";
import moradores from "./moradoresRoutes.js";
import condominios from "./condominiosRoutes.js"

const routes = (app) => {
    app.use(express.json(), pedidos, moradores, condominios);
};

export default routes;