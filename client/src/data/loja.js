import { produto } from './produto'

export const loja = [
  {
    id: 1,
    id_usuario: 1,
    foto_loja: "https://cdn.discordapp.com/attachments/874349674100826124/918501597271691294/Loja_de_eletronicos.png",
    banner_loja: "",
    cnpj: "64978351000154",
    nome: "InfoTech",
    cep: "04375070",
    numero: "12",
    produtos: produto.filter(p => p.id_loja === 1),
    contato: "11998107989",
    seguidores: 4009,
    criado_em: "2021-11-10",
    modificado_em: "2021-11-14",
  },
  {
    id: 2,
    id_usuario: 2,
    foto_loja: "https://cdn.discordapp.com/attachments/913566052766597200/918217062839627846/papelarialogo_2.png",
    banner_loja: "",
    cnpj: "81269396000179",
    nome: "My Papelaria",
    cep: "04534013",
    numero: "55",
    produtos: produto.filter(p => p.id_loja === 2),
    contato: "11987442873",
    seguidores: 2387,
    criado_em: "2021-11-13",
    modificado_em: "2021-11-14",
  },
  {
    id: 3,
    id_usuario: 3,
    foto_loja: "https://cdn.discordapp.com/attachments/874349674100826124/918521043197509733/Loja_de_construcao_Logo_1.png",
    banner_loja: "",
    cnpj: "51394434000154",
    nome: "RA Construção",
    cep: "03944050",
    numero: "17",
    produtos: produto.filter(p => p.id_loja === 3),
    contato: "11912312323",
    seguidores: 22339,
    criado_em: "2021-11-12",
    modificado_em: "2021-11-14",
  },
  {
    id: 4,
    id_usuario: 4,
    foto_loja: "https://github.com/Larissavitoria0.png",
    banner_loja: "",
    cnpj: "69279474000110",
    nome: "Drogaria",
    cep: "03909090",
    numero: "112",
    produtos: produto.filter(p => p.id_loja === 4),
    contato: "11998769912",
    seguidores: 108,
    criado_em: "2021-10-28",
    modificado_em: "2021-11-14",
  },
  {
    id: 5,
    id_usuario: 5,
    foto_loja: "https://github.com/IgorVinnycius1.png",
    banner_loja: "",
    cnpj: "51873512000101",
    nome: "Igor Designs",
    cep: "05206030",
    numero: "1001",
    produtos: produto.filter(p => p.id_loja === 5),
    contato: "11940028922",
    seguidores: 2387,
    criado_em: "2021-11-13",
    modificado_em: "2021-11-14",
  },
  {
    id: 6,
    id_usuario: 6,
    foto_loja: "https://github.com/LucasEduardoS.png",
    banner_loja: "",
    cnpj: "36600565000157",
    nome: "Cubos Eduardo",
    cep: "08295260",
    numero: "98",
    produtos: produto.filter(p => p.id_loja === 6),
    contato: "11922398651",
    seguidores: 9008,
    criado_em: "2021-11-03",
    modificado_em: "2021-11-14",
  },
  {
    id: 7,
    id_usuario: 7,
    foto_loja: "https://github.com/NathanOAlbuquerque.png",
    banner_loja: "",
    cnpj: "36600565000157",
    nome: "Nathan Shirovski",
    cep: "08295260",
    numero: "9",
    produtos: produto.filter(p => p.id_loja === 7),
    contato: "11919072332",
    seguidores: 826,
    criado_em: "2021-10-30",
    modificado_em: "2021-11-14",
  },


  {
    id: 8,
    id_usuario: 8,
    foto_loja: "https://img.freepik.com/vetores-gratis/vetor-de-logotipo-de-empresa-de-sorvete-em-estilo-doodle-fofo_53876-128299.jpg",
    banner_loja: "",
    cnpj: "36600565000158",
    nome: "Gelato",
    cep: "08295261",
    numero: "43",
    produtos: produto.filter(p => p.id_loja === 8),
    contato: "11919072333",
    seguidores: 1015,
    criado_em: "2021-08-30",
    modificado_em: "2021-11-15",

  }
]