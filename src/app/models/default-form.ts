import { Form } from "./form";

export const defaultForm: Form = {
  nomeCliente: '',
  vendedor: '',
  numeroPedido: '',
  nomeAmbiente: '',

  puxadorSuperior: { modelo: '*', acabamento: '*', fornecedor: '*', quantidade: '*' },
  puxadorInferior: { modelo: '*', acabamento: '*', fornecedor: '*', quantidade: '*' },
  coresProjeto: { cor1: '*', cor2: '*', cor3: '*' },
  vidro: { espessura: '*', acabamento: '*', fornecedor: '*' },
  espelho: { espessura: '*', acabamento: '*', fornecedor: '*' },
  portaPerfil: { modeloPerfil: '*', modeloPuxador: '*', corPerfil: '*', corpoPorta: '*', acabamentoCorpo: '*' },
  portaDeslizante: { nomeSistema: '*', corpoPorta: '*', acabamentoCorpo: '*', quantidade: '*', fechadura: '*' },
  portaPassagem: { nomeSistema: '*', corpoPorta: '*', acabamentoCorpo: '*', quantidadePortaPassagem: '*', fechadura: '*' },
  ventilacao: { modelo: '*', acabamento: '*' },
  fechaduras: { modelo: '*' },
  estofaria: { modelo: '*', acabamento: '*', fornecedor: '*', instalador: '*' },
  serralheria: { modelo: '*', acabamento: '*', fornecedor: '*', instalador: '*' },
  iluminacao: { modelo: '*', temperatura: '*', fornecedor: '*' },
  tomada: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  interruptor: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  passaFio: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  portaTempero: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  lixeira: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  divisorGaveta: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  divisorAcrilico: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  divisorTalher: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  tulha: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  corrediça: { modelo: '*', acabamento: '*' },
  tabuaPassar: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
  pedra: { existentePedra: '*', espessura: '*', alturaFinalPedra: '*', afastado: '*', fornecedoresPedra: '*' },
  box: { modelos: '*', existente: false, margemBox: '*', alturaFinal: '*' },
  rodape: { modelo: '*', recebe: '*', alturaRodape: '*', afastamentoRodape: '*' },
  rodaTeto: { modelo: '*', alturaRodateto: '*', afastamentoRodateto: '*' },
  eletrodomesticos: [],
  observacoes: '',
};