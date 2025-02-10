export interface FormData {
  nomeCliente: string;
  vendedor: string;
  numeroPedido: string;

  puxadorSuperior: {
    modelo: string;
    acabamento: string;
    fornecedor: string;
  };

  puxadorInferior: {
    modelo: string;
    acabamento: string;
    fornecedor: string;
  };

  coresProjeto: {
    cor1: string;
    cor2: string;
    cor3: string;
  };

  vidro: {
    espessura: string;
    acabamento: string;
    fornecedor: string;
  };

  espelho: {
    espessura: string;
    acabamento: string;
    fornecedor: string;
  };

  portaPerfil: {
    modeloPerfil: string;
    modeloPuxador: string;
    corPerfil: string;
    corpoPorta: string;
    acabamentoCorpo: string;
  };

  sistemaPortaDeslizante: {
    nomeSistema: string;
    corpoPorta: string;
    acabamentoCorpo: string;
    quantidade: number;
    fechadura: string;
  };

  portaPassagem: {
    nomeSistema: string;
    corpoPorta: string;
    acabamentoCorpo: string;
    quantidade: number;
    fechadura: string;
  };

  ventilacao: {
    modelo: string;
    acabamento: string;
  };

  fechaduras: {
    modelo: string;
  };

  estofaria: {
    modelo: string;
    acabamento: string;
    fornecedor: string;
    instalador: string;
  };

  serralheria: {
    modelo: string;
    acabamento: string;
    fornecedor: string;
    instalador: string;
  };

  iluminacao: {
    modelo: string;
    temperatura: string;
    fornecedor: string;
  };

  tomada: {
    modelo: string;
    acabamento: string;
    quantidade: number;
    fornecedor: string;
  };

  interruptor: {
    modelo: string;
    acabamento: string;
    quantidade: number;
    fornecedor: string;
  };

  passaFio: {
    modelo: string;
    acabamento: string;
    quantidade: number;
    fornecedor: string;
  };

  portaTemperos: {
    modelo: string;
    acabamento: string;
    quantidade: number;
    fornecedor: string;
  };

  divisorGavetas: {
    modelo: string;
    acabamento: string;
    quantidade: number;
    fornecedor: string;
  };

  tulha: {
    modelo: string;
    acabamento: string;
    quantidade: number;
    fornecedor: string;
  };

  corrediça: {
    modelo: string;
    acabamento: string;
  };

  tabuaPassar: {
    modelo: string;
    acabamento: string;
    quantidade: number;
    fornecedor: string;
  };

  pedra: {
    existente: boolean;
    espessura: string;
    altura: string;
    afastado: string;
  };

  box: {
    existente: boolean;
    margem: string;
    alturaFinal: string;
  };

  rodape: {
    modelo: string;
    recebe: string;
    altura: string;
    afastado: string;
  };

  rodaTeto: {
    modelo: string;
    recebe: string;
    altura: string;
    afastado: string;
  };

  eletrodomesticos: {
    nome: string;
    codigo: string;
    linkManual: string;
  }[];

  observacoes: string;
}
