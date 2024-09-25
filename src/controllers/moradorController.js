import {morador} from "../models/Morador.js";

class MoradorController {

    static async listarMoradorPorId(req, res) {
        try {
            const id = req.params.id;
            const morador = await morador.findById(id);
            res.status(200).json(morador);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao listar morador por id`});
        }
    }
    
    static async cadastrarMorador(req, res){
        try {
            const novoMorador = await morador.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", morador: novoMorador});
        } 
        catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar morador`});
        }
    }

    static async atualizarMorador(req, res){
        try {
            const id = req.params.id;
            await morador.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Morador atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar morador`});
        }
    };

    static async excluirMorador(req, res){
        try {
            const id = req.params.id;
            await morador.findByIdAndDelete(id);
            res.status(200).json({ message: "Morador excluido" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao excluir morador`});
        }
    };
};

export default MoradorController;