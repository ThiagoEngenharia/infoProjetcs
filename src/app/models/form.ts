export interface Form {

  nomeCliente: string;
  vendedor: string;
  numeroPedido: string;
  nomeAmbiente: string;

  puxadorSuperior: { modelo: string; acabamento: string; fornecedor: string; quantidade: string;  };
  puxadorInferior: { modelo: string; acabamento: string; fornecedor: string; quantidade: string;  };
  coresProjeto: { cor1: string; cor2: string; cor3: string };
  vidro: { espessura: string; acabamento: string; fornecedor: string };
  espelho: { espessura: string; acabamento: string; fornecedor: string };
  portaPerfil: { modeloPerfil: string; modeloPuxador: string; corPerfil: string; corpoPorta: string; acabamentoCorpo: string };
  portaDeslizante: { nomeSistema: string; corpoPorta: string; acabamentoCorpo: string; quantidade: string; fechadura: string;  };
  portaPassagem: { nomeSistema: string; corpoPorta: string; acabamentoCorpo: string; quantidadePortaPassagem: string; fechadura: string;  };
  ventilacao: { modelo: string; acabamento: string };
  fechaduras: { modelo: string };
  estofaria: { modelo: string; acabamento: string; fornecedor: string; instalador: string;  };
  serralheria: { modelo: string; acabamento: string; fornecedor: string; instalador: string;  };
  iluminacao: { modelo: string; temperatura: string; fornecedor: string };
  tomada: { modelo: string; acabamento: string; quantidade: string; fornecedor: string;  };
  interruptor: { modelo: string; acabamento: string; quantidade: string; fornecedor: string;  };
  passaFio: { modelo: string; acabamento: string; quantidade: string; fornecedor: string;  };
  portaTempero: {  modelo: string; acabamento: string; quantidade: string; fornecedor: string;  };
  lixeira: { modelo: string; acabamento: string;    quantidade: string; fornecedor: string;  };
  divisorGaveta: { modelo: string; acabamento: string; quantidade: string; fornecedor: string;  };
  divisorAcrilico: { modelo: string; acabamento: string; quantidade: string; fornecedor: string;  };
  divisorTalher: { modelo: string; acabamento: string; quantidade: string; fornecedor: string;  };
  tulha: { modelo: string; acabamento: string; quantidade: string; fornecedor: string;  };
  corrediça: { modelo: string; acabamento: string };
  tabuaPassar: { modelo: string; acabamento: string; quantidade: string;    fornecedor: string;  };
  pedra: { existentePedra: string; espessura: string; alturaFinalPedra: string; afastado: string; fornecedoresPedra: string;  };
  box: { modelos: string ,existente: boolean; margemBox: string; alturaFinal: string };
  rodape: { modelo: string; recebe: string; alturaRodape: string; afastamentoRodape: string };
  rodaTeto: { modelo: string; alturaRodateto: string; afastamentoRodateto: string };
  eletrodomesticos: any[];
  observacoes: string;
  [key: string]: any; // Assinatura de índice
}