import condominioRepo from "../models/Condominio.js";
import moradorRepo from "../models/Morador.js";

class LoginController{
    static async realizarLogin(req, res) {
        try {
            const email = req.body.email;
            const senha = req.body.senha;

            var resposta = await ProcuraMorador(email, senha, res);

            if(resposta.codigo == 200){
                return resposta.express_res;
            }

            resposta = await ProcurarCondominio(email, senha, res);

            return resposta.express_res;

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao listar condominio por id`});
        }
    }
}

async function ProcuraMorador(email, senha, res) {
    const moradorEncontrado = await moradorRepo.find({ $and: [{email: email}, {senha: senha}] });

    if(moradorEncontrado.length == 0){
        return { codigo: 400, express_res: res.status(400) }
    }

    return { codigo: 200, express_res: res.status(200).json( {payload: moradorEncontrado.at(0), tipoUsuario: "morador"} )};
}

async function ProcurarCondominio(email, senha, res) {
    const condominioEncontrado = await condominioRepo.find({ $and: [{email_adm: email}, {senha_adm: senha}] });

    if(condominioEncontrado.length == 0){
        return { codigo: 400, express_res: res.status(400).json("Usuario e/ou senha inválidos") }
    }

    return { codigo: 200, express_res: res.status(200).json( {payload: condominioEncontrado.at(0), tipoUsuario: "condominio"} )};
}


export default LoginController;