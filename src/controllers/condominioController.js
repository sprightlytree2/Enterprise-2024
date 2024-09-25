import condominio from "../models/Condominio.js";

class CondominioController {

    static async listarCondominioPorId(req, res) {
        try {
            const id = req.params.id;
            const condominio = await condominio.findById(id);
            res.status(200).json(condominio);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao listar condominio por id`});
        }
    }
    
    static async cadastrarCondominio(req, res){
        try {
            const novoCondominio = await condominio.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", condominio: novoCondominio});
        } 
        catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar condominio`});
        }
    }

    static async atualizarCondominio(req, res){
        try {
            const id = req.params.id;
            await condominio.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Condominio atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar condominio`});
        }
    };

    static async excluirCondominio(req, res){
        try {
            const id = req.params.id;
            await condominio.findByIdAndDelete(id);
            res.status(200).json({ message: "Condominio excluido" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao excluir condominio`});
        }
    };
};

export default CondominioController;