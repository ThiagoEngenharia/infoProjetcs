import { Component } from '@angular/core';
import { EletroService, EletroDTO } from 'src/app/services/eletro.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Definição de tipos para o formulário
interface Form {
  nomeCliente: string;
  vendedor: string;
  numeroPedido: string;
  nomeAmbiente: string;
  puxadorSuperior: {
    modelo: string;
    acabamento: string;
    fornecedor: string;
    quantidade: string;
  };
  puxadorInferior: {
    modelo: string;
    acabamento: string;
    fornecedor: string;
    quantidade: string;
  };
  coresProjeto: { cor1: string; cor2: string; cor3: string };
  vidro: { espessura: string; acabamento: string; fornecedor: string };
  espelho: { espessura: string; acabamento: string; fornecedor: string };
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
    quantidade: string;
    fechadura: string;
  };
  portaPassagem: {
    nomeSistema: string;
    corpoPorta: string;
    acabamentoCorpo: string;
    quantidade: string;
    fechadura: string;
  };
  ventilacao: { modelo: string; acabamento: string };
  fechaduras: { modelo: string };
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
  iluminacao: { modelo: string; temperatura: string; fornecedor: string };
  tomada: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  interruptor: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  passaFio: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  portaTempero: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  lixeira: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  divisorGaveta: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  divisorAcrilico: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  divisorTalher: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  tulha: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  corrediça: { modelo: string; acabamento: string };
  tabuaPassar: {
    modelo: string;
    acabamento: string;
    quantidade: string;
    fornecedor: string;
  };
  pedra: {
    existente: boolean[];
    espessura: string;
    altura: string;
    afastado: string;
    responsavel: string;
  };
  box: { existente: boolean; margem: string; alturaFinal: string };
  rodape: { modelo: string; recebe: string; altura: string; afastado: string };
  rodaTeto: { modelo: string; altura: string; afastado: string };
  eletrodomesticos: any[];
  observacoes: string;

  [key: string]: any; // Assinatura de índice
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    standalone: false
})
export class FormComponent {
  form: Form = {
    nomeCliente: '',
    vendedor: '',
    numeroPedido: '',
    nomeAmbiente: '',
    puxadorSuperior: {
      modelo: '*',
      acabamento: '*',
      fornecedor: '*',
      quantidade: '*',
    },
    puxadorInferior: {
      modelo: '*',
      acabamento: '*',
      fornecedor: '*',
      quantidade: '*',
    },
    coresProjeto: { cor1: '*', cor2: '*', cor3: '*' },
    vidro: { espessura: '*', acabamento: '*', fornecedor: '*' },
    espelho: { espessura: '*', acabamento: '*', fornecedor: '*' },
    portaPerfil: {
      modeloPerfil: '*',
      modeloPuxador: '*',
      corPerfil: '*',
      corpoPorta: '*',
      acabamentoCorpo: '*',
    },
    sistemaPortaDeslizante: {
      nomeSistema: '*',
      corpoPorta: '*',
      acabamentoCorpo: '*',
      quantidade: '*',
      fechadura: '*',
    },
    portaPassagem: {
      nomeSistema: '*',
      corpoPorta: '*',
      acabamentoCorpo: '*',
      quantidade: '*',
      fechadura: '*',
    },
    ventilacao: { modelo: '*', acabamento: '*' },
    fechaduras: { modelo: '*' },
    estofaria: { modelo: '*', acabamento: '*', fornecedor: '*', instalador: '*' },
    serralheria: { modelo: '*', acabamento: '*', fornecedor: '*', instalador: '*' },
    iluminacao: { modelo: '*', temperatura: '*', fornecedor: '*' },
    tomada: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
    interruptor: { modelo: '*', acabamento: '*', quantidade: '', fornecedor: '*' },
    passaFio: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
    portaTempero: {
      modelo: '*',
      acabamento: '*',
      quantidade: '*',
      fornecedor: '*',
    },
    lixeira: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
    divisorGaveta: {
      modelo: '*',
      acabamento: '*',
      quantidade: '*',
      fornecedor: '*',
    },
    divisorAcrilico: {
      modelo: '*',
      acabamento: '*',
      quantidade: '*',
      fornecedor: '*',
    },
    divisorTalher: {
      modelo: '*',
      acabamento: '*',
      quantidade: '*',
      fornecedor: '*',
    },
    tulha: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
    corrediça: { modelo: '*', acabamento: '' },
    tabuaPassar: { modelo: '*', acabamento: '*', quantidade: '*', fornecedor: '*' },
    pedra: {
      existente: [false],
      espessura: '*',
      altura: '*',
      afastado: '*',
      responsavel: '*',
    },
    box: { existente: false, margem: '*', alturaFinal: '*' },
    rodape: { modelo: '*', recebe: '*', altura: '*', afastado: '*' },
    rodaTeto: { modelo: '*', altura: '*', afastado: '*' },
    eletrodomesticos: [],
    observacoes: '*',
  };


  // Defina as listas de opções para os campos
  listasOpcoes = {

    modelosPuxadorSuperior: [
    'Cava no MDF',
    'Cava no MDF uzinado',
    'Cava por baixo',
    'Cava Uzinado',
    'Chanfro 45º MDF',
    'Em Madeira maciça',
    'Facetado',
    'Fecho-Toque',
    'Frente Passando 2cm',
    'Perfil 2013T Gola ponteira aberta',
    'Perfil 2013T Gola ponteira fechada',
    'Perfil 2013T Gola sem ponteira',
    'Perfil 2038 Alternativa',
    'Perfil 2038 Cava',
    'Perfil 2322 Cava Fixa',
    'Perfil 4023 Cava',
    'Perfil 4023 Cava c/ fita',
    'Perfil 4023 Cava c/ fita e pintado',
    'Perfil 4023 Cava pintado',
    'Perfil 45°',
    'Perfil 45° fora a fora',
    'Perfil A 38 ou Sottile reto',
    'Perfil A 4015 Cunha',
    'Perfil A 4015 Cunha de fora a fora',
    'Perfil A 4018 Cunha',
    'Perfil A 4018 Cunha de fora a fora',
    'Perfil A 4020 Cunha',
    'Perfil A 4020 Cunha de fora a fora',
    'Perfil A0424 - Hor. 20 Meio',
    'Perfil A0424 - Hor. 8 Final MDF',
    'Perfil A0424 - Ver e hor. 20 Meio MDF',
    'Perfil A0424 - Ver e hor. 8 Final MDF',
    'Perfil A0424 - Ver. 20 Meio MDF',
    'Perfil A0424 - Ver. 20x20x110 Meio MDF',
    'Perfil A0424 - Ver. 8 Final ALU',
    'Perfil A2418 - Hor. 20 Meio',
    'Perfil A2418 - Hor. 8 Final MDF',
    'Perfil A2418 - Ver e hor. 20 Meio MDF',
    'Perfil A2418 - Ver e hor. 8 Final MDF',
    'Perfil A2418 - Ver. 20 Meio MDF',
    'Perfil A2418 - Ver. 20x20x110 Meio MDF',
    'Perfil A2418 - Ver. 8 Final MDF',
    'Perfil Mezzo fora a fora',
    'Perifil Mezzo',
    'Porta avança 2cm para baixo',
    'Porta avança 2cm para cima',
    'Porta passante 0,8 pelo lado',
    'Porta passante 0,8 por baixo',
    'Porta passante 0,8 por cima',
    'Ranhura 1,8x0,6 ao lado',
    'Ranhura 1,8x0,6 por baixo',
    'Ranhura 1,8x0,6 por baixo e lado',
    'Ranhura 1,8x0,6 por cima',
    'Ranhura 1,8x0,6 por cima e baixo',
    'Ranhura 1,8x0,6 por cima, baixo e lado',
    'Sobreposto',
    'Ver observações',
    '?',
    '',
],
    acabamentosPuxadorSuperior: [
    'Anodizado',
    'C/ fita',
    'C/ fita e pintado',
    'Dourado',
    'Em MDF',
    'Inox fosco',
    'Inox polido',
    'Lâminado',
    'Pintado',
    'Pintado Bronze Alumistar',
    'Pintado de branco',
    'Pintado de preto brilho',
    'Pintado de preto fosco',
    'Pintado Jaspe Alumistar',
    'Pintado na cor do MDF',
    'Ver observações',
    '?', ''  ],
    fornecedoresPuxadorSuperior: [
      'Cliente',
      'Fabrica', ''
    ],
    modelosPuxadorInferior: [
    'Cava no MDF',
    'Cava no MDF uzinado',
    'Cava por baixo',
    'Cava Uzinado',
    'Chanfro 45º MDF',
    'Em Madeira maciça',
    'Facetado',
    'Fecho-Toque',
    'Frente Passando 2cm',
    'Perfil 2013T Gola ponteira aberta',
    'Perfil 2013T Gola ponteira fechada',
    'Perfil 2013T Gola sem ponteira',
    'Perfil 2038 Alternativa',
    'Perfil 2038 Cava',
    'Perfil 2322 Cava Fixa',
    'Perfil 4023 Cava',
    'Perfil 4023 Cava c/ fita',
    'Perfil 4023 Cava c/ fita e pintado',
    'Perfil 4023 Cava pintado',
    'Perfil 45°',
    'Perfil 45° fora a fora',
    'Perfil A 38 ou Sottile reto',
    'Perfil A 4015 Cunha',
    'Perfil A 4015 Cunha de fora a fora',
    'Perfil A 4018 Cunha',
    'Perfil A 4018 Cunha de fora a fora',
    'Perfil A 4020 Cunha',
    'Perfil A 4020 Cunha de fora a fora',
    'Perfil A0424 - Hor. 20 Meio',
    'Perfil A0424 - Hor. 8 Final MDF',
    'Perfil A0424 - Ver e hor. 20 Meio MDF',
    'Perfil A0424 - Ver e hor. 8 Final MDF',
    'Perfil A0424 - Ver. 20 Meio MDF',
    'Perfil A0424 - Ver. 20x20x110 Meio MDF',
    'Perfil A0424 - Ver. 8 Final ALU',
    'Perfil A2418 - Hor. 20 Meio',
    'Perfil A2418 - Hor. 8 Final MDF',
    'Perfil A2418 - Ver e hor. 20 Meio MDF',
    'Perfil A2418 - Ver e hor. 8 Final MDF',
    'Perfil A2418 - Ver. 20 Meio MDF',
    'Perfil A2418 - Ver. 20x20x110 Meio MDF',
    'Perfil A2418 - Ver. 8 Final MDF',
    'Perfil Mezzo fora a fora',
    'Perifil Mezzo',
    'Porta avança 2cm para baixo',
    'Porta avança 2cm para cima',
    'Porta passante 0,8 pelo lado',
    'Porta passante 0,8 por baixo',
    'Porta passante 0,8 por cima',
    'Ranhura 1,8x0,6 ao lado',
    'Ranhura 1,8x0,6 por baixo',
    'Ranhura 1,8x0,6 por baixo e lado',
    'Ranhura 1,8x0,6 por cima',
    'Ranhura 1,8x0,6 por cima e baixo',
    'Ranhura 1,8x0,6 por cima, baixo e lado',
    'Sobreposto',
    'Ver observações',
    '?', ''
],
    acabamentosPuxadorInferior: [
    'Anodizado',
    'C/ fita',
    'C/ fita e pintado',
    'Dourado',
    'Em MDF',
    'Inox fosco',
    'Inox polido',
    'Lâminado',
    'Pintado',
    'Pintado Bronze Alumistar',
    'Pintado de branco',
    'Pintado de preto brilho',
    'Pintado de preto fosco',
    'Pintado Jaspe Alumistar',
    'Pintado na cor do MDF',
    'Ver observações',
    '?', '' ],
    fornecedoresPuxadorInferior: [
      'Cliente',
      'Fabrica', ''],
    coresMDF: [
    'Acácia Carmel - Arauco',
    'Acácia Volcano - Arauco',
    'Amendoeira - Bold - Arauco',
    'Areal Bold - Arauco',
    'Areia - Colors - Guararapes',
    'Arizona - cross - Duratex',
    'Atenna - Liso - Arauco',
    'Aurora - Trama - Duratex',
    'Azul Petróleo - Colors - Guararapes',
    'Azul Vel - Berneck',
    'Beige - Matt - Arauco',
    'Beton Matt - Nuances - Arauco',
    'Borgonha - Cristallo - Duratex',
    'Branco Ártico - Original - Duratex - 6/15/18/25',
    'Branco Ártico - Original - Duratex (ult) - 6/15/18',
    'Branco Ártico - Trama - Duratex',
    'Branco Diamante - Acetinatta - Duratex',
    'Branco Diamante - Cristalo - Duratex',
    'Branco Diamante - Essencial - Duratex (ult)',
    'Branco Diamante - Trama - Duratex',
    'Branco Supremo - Chess - Arauco',
    'Branco Supremo - Matt - Arauco',
    'Brise - Design - Duratex',
    'Bufalo Couro - Arauco',
    'Cacao Matt - Arauco',
    'Cafelatte - Sethos - New Color - Arauco',
    'Calacata Singular - Duratex (ult)',
    'Camuru Raiz - Essencial - Duratex',
    'Canela - Chess - Arauco',
    'Cânion Rústico - Prisma - Duratex',
    'Carbono - Trama - Duratex',
    'Carvalho - Poro - Arauco',
    'Carvalho - treviso - Design - Berneck',
    'Carvalho Avelã - Design - Duratex',
    'Carvalho Batur - Essencial Wood - Duratex',
    'Carvalho Berlin - Design - Duratex',
    'Carvalho Évora - Prisma - Duratex',
    'Carvalho Hanover - Design - Duratex',
    'Carvalho Malva - Design - Duratex',
    'Carvalho Minuque - Design - Duratex',
    'Carvalho Natural - Guararapes',
    'Castanho Poro - Arauco',
    'Chamois - Telalino - Arauco',
    'Cinza Cobalto - Vel - Berneck',
    'Cinza Cristal - Chess - Arauco',
    'Cinza Fóssil - Velluto - Duratex',
    'Cinza Perfeito - Colors - Guararapes',
    'Cinza Puro - Matt - Arauco',
    'Cinza Sagrado - Essencial - Duratex',
    'Cinzell - Matt - Arauco',
    'Cobre - Metalic - Guararapes',
    'Concreto - Decor Matt - Arauco',
    'Connect - Chess - Arauco',
    'Cumaru Raiz - Essencial Wood - Duratex',
    'Damasco - Matt - Arauco',
    'Ébano - Chess - Arauco',
    'Elmo Suíço - Genuino - Arauco',
    'Escarlate Trend - Arauco',
    'Fendi - Comfort - Guararapes',
    'Fontana - Magma - Guararapes',
    'Fórmica - Ouro AD308',
    'Frapê Sethos - Arauco',
    'Freijó - Mad. Brasil - Guararapes - 6/15/18/25',
    'Freijó Puro - Essencial - Duratex',
    'Gaia - Sethos - Arauco',
    'Gianduia - Brilho - Cristallo - Duratex',
    'Gianduia - Natural - Velluto - Duratex',
    'Gianduia - Puro - Sense - Duratex',
    'Gianduia - Trama - Duratex (ult)',
    'Grafite - Guararapes - 6/15/18/25',
    'Grafite - Trama - Duratex',
    'Grafito Chess - Arauco',
    'Ibiza - Design - Duratex',
    'Imbuia - Mad. Brasil - Guararapes - 6/15/18',
    'Ipê Amarelo Poro - Arauco',
    'Itapuã - Essencial Wood - Duratex (ult)',
    'Jequitibá - Trende - Arauco',
    'Jequitidá Rosa - Essencial Woond - Duratex',
    'Kashmir - Chess - Arauco',
    'Laca - H 109 - Sayerlack',
    'Laca - H 162 - Sayerlack',
    'Laca - JG 1157 - Sayerlack',
    'Laca - JM 1168 - Sayerlack',
    'Laca - Preta brilho',
    'Laca - Preta fosca',
    'Laca - V 155 - Sayerlack',
    'Laca - Y 099 - Sayerlack',
    'Lâmina - Natural Carvalho Americano Branco',
    'Lâmina - Natural Carvalho Americano Vermelho',
    'Lâmina - Natural Cinza Metal Recomposto R404',
    'Lâmina - Natural Freijó',
    'Lâmina - Natural Imbuia Medio',
    'Lana - Conceito - Duratex',
    'Larnaca - Prisma - Duratex',
    'Linho Belga - Sense - Duratex',
    'Louro Freijó - Poro - Arauco',
    'Louro Freijó - Trend - Arauco',
    'Madeira de demolição',
    'Mármara Kahve - Revelo Natural - Arauco',
    'Maya - Brilho Cristallo - Duratex (ult)',
    'MDF - Rovere Marsala - Essencial Wood - Duratex (ult)',
    'MDF - Rovere Sereno - Essencial - Duratex',
    'Mint - Essencial - Duratex',
    'Mocca Sethos - Arauco',
    'Nazca - Velluto - Duratex',
    'Névoa - Relevo - Arauco (Fora de linha)',
    'New Cherry - Natural - Guararapes',
    'Noce California - Essencial - Duratex',
    'Nogal Malaga - Design - Berneck',
    'Nogal Terracota - Nature - Arauco',
    'Nogueira Cadiz - Prisma - Duratex',
    'Nogueira Caiena - Design - Duratex',
    'Nogueira Flórida - Design - Duratex',
    'Nogueira Thare - Design - Duratex',
    'Nova Imbuia - Poro - Arauco',
    'Nudel Vel - Berneck',
    'Oásis Essencial Woold - Duratex',
    'Off.White Suave - Duratex',
    'Opala - Brilho Cristallo - Duratex',
    'Orion - Essencial - Duratex',
    'Orla Vert - Arauco',
    'Orvalho Vert - Arauco',
    'Palha - Trama - Duratex',
    'Pau Ferro Trend - Arauco',
    'Portoro - Essencial - Duratex (ult)',
    'Preto - Cristallo - Duratex',
    'Preto - Original - Duratex',
    'Preto - Trama - Duratex',
    'Preto Silk - Comfort - Guararapes',
    'Provence - Tatto - Berneck',
    'Quartz - Magma - Guararapes',
    'Reali - Arauco',
    'Rícori Nativo - Trende - Arauco',
    'Rosa Glamour - Essencial - Duratex',
    'Rosa Infinito - Essencial - Duratex',
    'Rosa Milkshake - Guararapes',
    'Sal Rosa - Matt - Arauco',
    'Savana - Dual Syncro - Guararapes',
    'Sibéria - Dual Syncro - Guararapes',
    'Silício - Veret - Arauco',
    'Sirena - Trama - Duratex',
    'Tartufo - Acetinatta - Duratex',
    'Tauari - Mad. Brasil - Guararapes',
    'Thassos - Essencial - Duratex (ult)',
    'Titânio - Brilho Cristallo - Duratex - 6/15/18',
    'Titânio - Trama - Duratex (ult)',
    'Tokai Nature - Arauco - 6/15/18',
    'Tramato - Conceito - Duratex',
    'Ultramarino - Brilho Cristallo - Duratex (ult)',
    'Verde Floresta - Velluto - Duratex',
    'Verde Jade - Matt - Arauco',
    'Verde Real - Essencial - Duratex (Fora de linha)',
    'Verti - Micro - Berneck',
    'Ver observações',
    '?',
    '',
],
    //Porta Perfil
    modelosPerfil: [
    'A 172 Dublin',
    'A -25',
    'Existente',
    'Linha 0mm',
    'Linha 5mm',
    'Ver observações',
    '?',''
],
    modelosPuxadorPerfil: [
    'Cava no MDF',
    'Cava no MDF uzinado',
    'Cava por baixo',
    'Cava Uzinado',
    'Chanfro 45º MDF',
    'Em Madeira maciça',
    'Facetado',
    'Fecho-Toque',
    'Frente Passando 2cm',
    'Perfil 2013T Gola ponteira aberta',
    'Perfil 2013T Gola ponteira fechada',
    'Perfil 2013T Gola sem ponteira',
    'Perfil 2038 Alternativa',
    'Perfil 2038 Cava',
    'Perfil 2322 Cava Fixa',
    'Perfil 4023 Cava',
    'Perfil 4023 Cava c/ fita',
    'Perfil 4023 Cava c/ fita e pintado',
    'Perfil 4023 Cava pintado',
    'Perfil 45°',
    'Perfil 45° fora a fora',
    'Perfil A 38 ou Sottile reto',
    'Perfil A 4015 Cunha',
    'Perfil A 4015 Cunha de fora a fora',
    'Perfil A 4018 Cunha',
    'Perfil A 4018 Cunha de fora a fora',
    'Perfil A 4020 Cunha',
    'Perfil A 4020 Cunha de fora a fora',
    'Perfil A0424 - Hor. 20 Meio',
    'Perfil A0424 - Hor. 8 Final MDF',
    'Perfil A0424 - Ver e hor. 20 Meio MDF',
    'Perfil A0424 - Ver e hor. 8 Final MDF',
    'Perfil A0424 - Ver. 20 Meio MDF',
    'Perfil A0424 - Ver. 20x20x110 Meio MDF',
    'Perfil A0424 - Ver. 8 Final ALU',
    'Perfil A2418 - Hor. 20 Meio',
    'Perfil A2418 - Hor. 8 Final MDF',
    'Perfil A2418 - Ver e hor. 20 Meio MDF',
    'Perfil A2418 - Ver e hor. 8 Final MDF',
    'Perfil A2418 - Ver. 20 Meio MDF',
    'Perfil A2418 - Ver. 20x20x110 Meio MDF',
    'Perfil A2418 - Ver. 8 Final MDF',
    'Perfil Mezzo fora a fora',
    'Perifil Mezzo',
    'Porta avança 2cm para baixo',
    'Porta avança 2cm para cima',
    'Porta passante 0,8 pelo lado',
    'Porta passante 0,8 por baixo',
    'Porta passante 0,8 por cima',
    'Ranhura 1,8x0,6 ao lado',
    'Ranhura 1,8x0,6 por baixo',
    'Ranhura 1,8x0,6 por baixo e lado',
    'Ranhura 1,8x0,6 por cima',
    'Ranhura 1,8x0,6 por cima e baixo',
    'Ranhura 1,8x0,6 por cima, baixo e lado',
    'Sobreposto',
    'Ver observações',
    '?', ''
],
    coresPerfil: [
    'Pintado',
    'Anodizado',
    'Bronze',
    'Cor MDF',
    'Dourado',
    'Existente',
    'Inox polido',
    'Inox fosco',
    'Ouro império',
    'Pintado Bronze Alumistar',
    'Pintado Bronze médio DUBLIN',
    'Pintado Chandon DUBLIN',
    'Pintado Império DUBLIN',
    'Pintado Jaspe Alumistar',
    'Pintado London DUBLIN',
    'Pintado Ouro Minas DUBLIN',
    'Pintado Prisma DUBLIN',
    'Pintado Titânium DUBLIN',
    'Pintado Veludo DUBLIN',
    'Pintado Vintage DUBLIN',
    'Preto brilho',
    'Preto fosco',
    'Ver observações',
    '?', ''
],
    corposPorta: [
    'MDF', 'Vidro', ''
],
    acabamentosCorpo: [
      'Reflecta Fume',
    'Espelho Bronze',
    'Espelho Fume',
    'Espelho Prata',
    'Reflecta Bronze',
    'Existente',
    'MDF',
    'Reflecta Champagne',
    'Reflecta Incolor',
    'Reflecta Prata',
    'Vidro Incolor',
    'Vidro na cor MDF',
    'Ver observações',
    '?', ''],

    //Vidro
    espessurasVidro: [
    '25 mm',
    '4 mm',
    '6 mm',
    '8 mm',
    '15 mm',
    '10 mm',
    '12 mm',
    '20 mm',
    '30 mm',
    'Bisote 10 mm',
    'Bisote 15 mm',
    'Bisote 20 mm',
    'Bisote 25 mm',
    'Bisote 30 mm',
    'Bisote 35 mm',
    'Bisote 40 mm',
    'Ver observações',
    '?', ''
],
    acabamentosVidro: [
    'Reflecta Prata',
    'Canelado',
    'Existente',
    'Extra Clear',
    'Reflecta Bronze',
    'Fume',
    'Incolor',
    'Reflecta Fume',
    'Ver observações',
    '?', ''
],
    fornecedoresVidro: [
      'Cliente',
      'Fabrica', ''],
    //Espelho
    espessurasEspelho: [
      '25 mm',
      '4 mm',
      '6 mm',
      '8 mm',
      '15 mm',
      '10 mm',
      '12 mm',
      '20 mm',
      '30 mm',
      'Bisote 10 mm',
      'Bisote 15 mm',
      'Bisote 20 mm',
      'Bisote 25 mm',
      'Bisote 30 mm',
      'Bisote 35 mm',
      'Bisote 40 mm',
      'Ver observações',
      '?', ''],
    acabamentosEspelho: [
      'Bronze',
      'Existente',
      'Fume',
      'Prata',
      'Ver observações',
      '?', ''
  ],
    fornecedoresEspelho: [
      'Cliente',
      'Fabrica', ''],
    //Porta Deslizante
    nomesSistemasPortaDeslizante: [
      'RO 82 (casa)',
      'Ezdoor 4 Plus (suspença)',
      'CD30 cx (embutida)',
      'Junior 6 (interno armário)',
      'Linea',
      'TL 110 (Interno trilho superior)',
      'Ver observações',
      '?', ''],
    corposPortaDeslizante: [
      'Vidro',
      'MDF',
      'Alumínio' ,''],
    acabamentosPortaDeslizante: [
      'Reflecta Fume',
      'Espelho Bronze',
      'Espelho Fume',
      'Espelho Prata',
      'Reflecta Bronze',
      'Existente',
      'MDF',
      'Reflecta Champagne',
      'Reflecta Incolor',
      'Reflecta Prata',
      'Vidro Incolor',
      'Vidro na cor MDF',
      'Ver observações',
      '?', '' ],

    fechadurasPortaDeslizante: [
      'STAM 1006 Chave-JM02 (deslisante e convecon)',
      'STAM 1006 Tranqueta-JM01 (deslisante)', '' ],
    sistemasPortaPassagem: [
      'RO 82 (casa)',
      'Ezdoor 4 Plus (suspença)',
      'CD30 cx (embutida)',
      'Junior 6 (interno armário)',
      'Existente',
      'Giro',
      'Linea',
      'TL 110 (Interno trilho superior)',
      'Pivotante',
      'Ver observações',
      '?',' '],

    //Porta Passagem
    corposPortaPassagem: [
      'MDF',
      'Vidro',
      'Alumínio', ''],
    acabamentosPortaPassagem: [
      'Reflecta Fume',
      'Espelho Bronze',
      'Espelho Fume',
      'Espelho Prata',
      'Reflecta Bronze',
      'Existente',
      'MDF',
      'Reflecta Champagne',
      'Reflecta Incolor',
      'Reflecta Prata',
      'Vidro Incolor',
      'Vidro na cor MDF',
      'Ver observações',
      '?', '' ],
    fechadurasPortaPassagem: [
      'Não',
      'Cliente Fornece',
      'Fechadura digital (cliente fornecera)',
      'Fecho rolete-JM05',
      'Lafonte 277-JM04 (topo puxar)',
      'STAM 1005 -JM04 (fechadura)',
      'STAM 1006 Tranqueta-JM01/Fecho rolete-JM05',
      'STAM 1025 -JM03 (fechadura)',
      'Ver observações',
      '?', ''
],

    //Modelo Estofado
    modelosEstofaria: [
      'Chesterfield',
      'Moderno',
      'Retrátil e Reclinável',
      'Boho',
      'Clássico',
      'Minimalista',
      'Escandinavo',
      'Camurça',
      'De Couro',
      'Imperial', ''],
    acabamentosEstofaria: [
      'Couro',
      'Tecido Veludo',
      'Linho',
      'Jacquard',
      'Suede',
      'Couro Sintético',
      'Microfibra',
      'Plush',
      'Algodão',
      'Veludo Acetinato', ''],
    fornecedoresEstofaria: [
      'Fabrica',
      'Cliente',
      'Cliente e Fabrica',
      'Terceirizado', ''],
    instaladoresEstofaria: [
      'Fabrica',
      'Terceirizado',
      'Cliente', ''],

    //Serralheria
    modelosSerralheria: [
      'Ferro 1,5cm x 1,5cm',
      'Ferro 2cm x 2cm',
      'Ferro 3cm x 3cm',
      'Ferro 4cm x 4cm',
      'Existente',
      'Ver observações',
      '?', ''],
    acabamentosSerralheria: [
      'Preto brilho',
      'Anodizado',
      'Bronze',
      'Dourado',
      'Inox fosco',
      'Inox polido',
      'Existente',
      'Inox polido',
      'Pintado cor do MDF',
      'Preto fosco',
      'Areia M3609',
      'Rose Gold',
      'Dourado 2,5',
      'Champanhe',
      'Ver observações',
      '?', ''],
    fornecedoresSerralheria: [
      'Fabrica',
      'Terceirizado',
      'Cliente', ''],
    instaladoresSerralheria: [
      'Fabrica',
      'Terceirizado',
      'Cliente', ''],

    //Iluminação
    modelosIluminacao: [
      'LED',
      'Paflon',
      'Luminária',
      'Spot',
      'Trilho',
      'Sobrepor', ''],
    temperaturasIluminacao: [
      '3000K',
      '4000K',
      '4500K',
      '5000K',
      '6000K', ''],
    fornecedoresIluminacao: [
      'Fabrica',
      'Cliente', ''
      ],
    //Tomada
    modelosTomada: [
      'Existente',
      'Lumiteck',
      'Na cor do MDF',
      'Régua',
      'Torre',
      'Veer no local',
      'Ver observações',
      '?', ''],
    fornecedorTomada: [
      'Fabrica',
      'Cliente', ''],
    acabamentosTomada: [
      'Branco',
      'Preto',
      'Cinza', ''],
    //Interruptor
    modelosInterruptor: [
      'Bola.',
      'Existente.',
      'Lumiteck.',
      'Na cor do MDF.',
      'Ver no local.',
      'Toch.',
      'Ver observações',
      '?', ''],
    acabamentosInterruptor: [
      'Branco',
      'Preto',
      'Cinza', ''],
    fornecedoresInterruptor: [
      'Fabrica',
      'Cliente',''],

    //Passa Fio
    modelosPassaFio: [
      '30mm',
      '45mm',
      '60mm', ''],
    acabamentosPassaFio: [
      'Branco',
      'Preto',
      'Cinza', ''],
    fornecedoresPassaFio: [
      'Fabrica',
      'Cliente', ''],

    //Porta Tempero
    modelosPortaTempero: [
      'Padrão Fabrica',
      'Aramado',
      'Outro Modelo', ''],
    acabamentosPortaTempero: [
      'Branco',
      'Preto',
      'Inox', ''],
    fornecedoresPortaTempero: [
      'Fabrica',
      'Cliente', ''],

    //Porta Talher
    modelosLixeira: [
      'Padrão Fabrica',
      'Hafele',
      'Outro Modelo', ''],
    acabamentosLixeira: [
      'Branco',
      'Preto',
      'Cinza', ''],
    fornecedoresLixeira: [
      'Fabrica',
      'Cliente', ''],
    //Divisor Gaveta
    modelosDivisorGaveta: [
      'Pdrão Fabrica',
      'Revestido',
      'Outro Modelo', ''],
    acabamentosDivisorGaveta: [
      'Branco',
      'Preto',
      'Tecido', ''],
    fornecedoresDivisorGaveta: [
      'Fabrica',
      'Cliente', ''],
    //Divisor Acrilico
    modelosDivisorAcrilico: [
      'Padrão Fabrica',
      'Outro Modelo', ''
    ],

    acabamentosDivisorAcrilico: [
      'Transparente',
      'Branco',
      'Preto',
      'Outra Cor',
      'Pintado', ''],
    fornecedoresDivisorAcrilico: [
      'Fabrica',
      'Cliente', ''
    ],
    //Divisor Talher
    modelosDivisorTalher: [
      'Padrão Fabrica',
      'Revestido',
      'Outro Modelo', ''],
    acabamentosDivisorTalher: [
      'Madeira',
      'Estofado',
      'Plastico',
      'Outro Material', ''],
    fornecedoresDivisorTalher: [
      'Fabrica',
      'Cliente', ''],

    //Tulha
    modelosTulha: [
      'Gavetão',
      'Ferragem',
      'Aramado', ''],
    acabamentosTulha: [
      'MDF',
      'Branco',
      'Preto',
      'Inox', ''],
    fornecedoresTulha: [
      'Fabrica',
      'Cliente', ''],

    //Corrediça
    modelosCorrediça: [
      'FGVTN',
      'Hafele',
      'Blum',
      'Hettich',
      'Outra Marca', ''],
    acabamentosCorrediça: [
      'Branco',
      'Preto',
      'Inox',
      'Outra Cor', ''],

    //Tabua Passar
    modelosTabuaPassar: [
      'FGVTN',
      'Hafele',
      'Blum',
      'Hettich',
      'Outra Marca', ''],
    acabamentosTabuaPassar: [
      'Branco',
      'Preto',
      'Cinza',
      'Outra Cor', ''],
    fornecedorTabuaPassar: [
      'Fabrica',
      'Cliente', ''],

    //Pedra
    modelosPedra: [
      'Granito',
      'Mármore',
      'Quartzito', ''],
    fornecedoresPedra: [
      'Cliente',
      'Fabrica', ''],

    //Box
    modelosBox: [
      'Até o Teto',
      'Sob Medida',
      'Sem Box', ''],

    //Rodapé
    modelosRodape: [
      'Liso',
      'Com Friso', ''
      ],
    modelosRodaTeto: [
      'Liso',
      'Com Detalhes', ''
    ],
    recebeRodape: ['Sim', 'Não', ''],
  };

  // Função para salvar o formulário
  saveForm() {
    console.log('Formulário salvo:', this.form);
    alert('Formulário salvo com sucesso!');
  }

  // Função trackBy para otimizar a renderização do *ngFor
  trackByFn(index: number, item: any) {
    return index;
  }

  eletroCodigo: string = ''; // Código do eletro
  eletroInfo: EletroDTO | null = null; // Armazena as informações do eletro
  loading: boolean = false; // Indicador de carregamento

  constructor(private eletroService: EletroService) {}

  buscarEletro() {
    this.loading = true;
    this.eletroService.buscarEletroPorCodigo(this.eletroCodigo).subscribe(
      (data: EletroDTO) => {
        this.eletroInfo = data;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
        this.eletroInfo = null;
      },
    );
  }

  isFieldEmpty(value: any): boolean {
    if (value === null || value === undefined) {
      return true;
    }
    if (typeof value === 'string' && value.trim() === '') {
      return true;
    }
    if (Array.isArray(value) && value.length === 0) {
      return true;
    }
    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return true;
    }
    return false;
  }

  printPage() {
    console.log('Preparando impressão...');

    setTimeout(() => {
      window.print();
    }, 1000); // Aguarda 1 segundo antes de imprimir
  }
}