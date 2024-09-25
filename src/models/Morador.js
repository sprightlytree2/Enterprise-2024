import mongoose from "mongoose";
import { pedidoSchema } from "./Pedido.js";

const moradorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String },
    cpf: { type: String },
    celular: { type: String },
    email: { type: String },
    idade: { type: Number },
    bloco: { type: String },
    andar: { type: String },
    apartamento: { type: String },
    eh_entregador: { type: Boolean },
    senha: { type: String },
    pedido: pedidoSchema
},  {versionKey: false});

const morador = mongoose.model("morador", moradorSchema);

export { morador, moradorSchema };