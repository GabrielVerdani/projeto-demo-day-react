import { loja } from "./loja"

export const usuario = [
  {
    id: 1,
    id_loja: loja.find(l => l.id_usuario === 1) || null,
    foto_usuario: "https://github.com/gabrielverdani.png",
    nome: "Gabriel Verdani",
    genero: null,
    email: "gabrielverdani2002@gmail.com",
    senha: "123888",
    celular: "11949961845",
    cep: "08431650",
    criado_em: "2021-11-09",
    modificado_em: "2021-11-14",
  },
  {
    id: 2,
    id_loja: loja.find(l => l.id_usuario === 2) || null,
    foto_usuario: "https://github.com/emily-sousa.png",
    nome: "Emily Sousa",
    genero: "Feminino",
    email: "emilysousa@gmail.com",
    senha: "667086",
    celular: "11952287097",
    cep: "09876332",
    criado_em: "2021-11-08",
    modificado_em: "2021-11-14",
  },
  {
    id: 3,
    id_loja: loja.find(l => l.id_usuario === 3) || null,
    foto_usuario: "https://github.com/gabrielverdani.png",
    nome: "Rafael Silva",
    genero: "Masculino",
    email: "rafaelsilva@gmail.com",
    senha: "653212",
    celular: "11933887654",
    cep: "98765009",
    criado_em: "2021-10-09",
    modificado_em: "2021-11-14",
  },
  {
    id: 4,
    id_loja: loja.find(l => l.id_usuario === 4) || null,
    nome: "Larissa Vitoria",
    genero: "Feminino",
    email: "larissavitoria@gmail.com",
    senha: "09876lari1",
    celular: "11977654566",
    cep: "10987655",
    criado_em: "2021-10-15",
    modificado_em: "2021-11-14",
  },
  {
    id: 5,
    id_loja: loja.find(l => l.id_usuario === 5) || null,
    nome: "Igor Vinnycius",
    genero: "Masculino",
    email: "igorvinnycius@gmail.com",
    senha: "canva1",
    celular: "11977657876",
    cep: null,
    criado_em: "2021-11-13",
    modificado_em: "2021-11-14",
  },
  {
    id: 6,
    id_loja: loja.find(l => l.id_usuario === 6) || null,
    nome: "Lucas Eduardo",
    genero: "Masculino",
    email: "lucaseduardo@gmail.com",
    senha: "3d12121",
    celular: "11998877665",
    cep: null,
    criado_em: "2020-01-05",
    modificado_em: "2021-11-14",
  },
  {
    id: 7,
    id_loja: loja.find(l => l.id_usuario === 7) || null,
    nome: "Nathan Oliveira",
    genero: "Masculino",
    email: "nathanoliveira@gmail.com",
    senha: "987654",
    celular: "11987650009",
    cep: "09986542",
    criado_em: "2021-10-30",
    modificado_em: "2021-11-14",
  },
]
