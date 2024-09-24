import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res){
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao listar autores`});
        }
    }

    static async cadastrarAutor(req, res){
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoAutor});
        } 
        catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar autor`});
        }
    }

    static async listarAutorPorId(req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await autor.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao listar autor por id`});
        }
    };

    static async atualizarAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar autor`});
        }
    };

    static async excluirAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor excluido" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao excluir autor`});
        }
    };
};

export default AutorController;