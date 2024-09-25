import { pedido } from "../models/Pedido.js";

class PedidoController {

    static async listarPedidoPorId(req, res) {
        try {
            const id = req.params.id;
            const pedidoEncontrado = await pedido.findById(id);
            res.status(200).json(pedido);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao listar pedido por id`});
        }
    }
    
    static async cadastrarPedido(req, res){
        try {
            const novoPedido = await pedido.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", pedido: novoPedido});
        } 
        catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar pedido`});
        }
    }

    static async atualizarPedido(req, res){
        try {
            const id = req.params.id;
            await pedido.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Pedido atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar pedido`});
        }
    };

    static async excluirPedido(req, res){
        try {
            const id = req.params.id;
            await pedido.findByIdAndDelete(id);
            res.status(200).json({ message: "Pedido excluido" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao excluir pedido`});
        }
    };
};

export default PedidoController;