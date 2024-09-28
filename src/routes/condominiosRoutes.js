import express from "express";
import CondominioController from "../controllers/condominioController.js";

const routes = express.Router();

routes.get("/test", (req, res) => {
    res.send("A rota de teste está funcionando!");
});
routes.get("/condominios/:id", CondominioController.listarCondominioPorId);
routes.post("/condominios", CondominioController.cadastrarCondominio);
routes.put("/condominios/:id", CondominioController.atualizarCondominio);
routes.delete("/condominios/:id", CondominioController.excluirCondominio);

export default routes;