import { produto } from './produto'

export const loja = [
  {
    id: 1,
    id_usuario: 1,
    foto_loja: "https://github.com/gabrielverdani.png",
    cnpj: "64978351000154",
    nome: "Cafézinho Verdani",
    cep: "04375070",
    produtos: produto.filter(p => p.id_loja === 1) || null,
    contato: "11998107989",
    criado_em: "2021-11-10",
    modificado_em: "2021-11-14",
  },
  {
    id: 2,
    id_usuario: 2,
    foto_loja: "https://github.com/emily-sousa.png",
    cnpj: "81269396000179",
    nome: "Emyzote Banquinhos",
    cep: "04534013",
    produtos: produto.filter(p => p.id_loja === 2) || null,
    contato: "11987442873",
    criado_em: "2021-11-13",
    modificado_em: "2021-11-14",
  }
]