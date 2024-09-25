import mongoose from "mongoose";
import { moradorSchema } from "./Morador.js";

const condominioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String },
    cnpj: { type: String},
    logradouro: { type: String},
    numero: { type: String},
    complemento: { type: String},
    bairro: { type: String},
    estado: { type: String},
    municipio: { type: String},
    cep: { type: String},
    morador: moradorSchema
}, {versionKey: false});

const condominio = mongoose.model("condominio", condominioSchema);

export default condominio; //{ condominio, condominioSchema };