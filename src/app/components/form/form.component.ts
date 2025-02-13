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
      modelo: '',
      acabamento: '',
      fornecedor: '',
      quantidade: '',
    },
    puxadorInferior: {
      modelo: '',
      acabamento: '',
      fornecedor: '',
      quantidade: '',
    },
    coresProjeto: { cor1: '*', cor2: '', cor3: '' },
    vidro: { espessura: '', acabamento: '', fornecedor: '' },
    espelho: { espessura: '', acabamento: '', fornecedor: '' },
    portaPerfil: {
      modeloPerfil: '',
      modeloPuxador: '',
      corPerfil: '',
      corpoPorta: '',
      acabamentoCorpo: '',
    },
    sistemaPortaDeslizante: {
      nomeSistema: '',
      corpoPorta: '',
      acabamentoCorpo: '',
      quantidade: '',
      fechadura: '',
    },
    portaPassagem: {
      nomeSistema: '',
      corpoPorta: '',
      acabamentoCorpo: '',
      quantidade: '',
      fechadura: '',
    },
    ventilacao: { modelo: '', acabamento: '' },
    fechaduras: { modelo: '' },
    estofaria: { modelo: '', acabamento: '', fornecedor: '', instalador: '' },
    serralheria: { modelo: '', acabamento: '', fornecedor: '', instalador: '' },
    iluminacao: { modelo: '', temperatura: '', fornecedor: '' },
    tomada: { modelo: '', acabamento: '', quantidade: '', fornecedor: '' },
    interruptor: { modelo: '', acabamento: '', quantidade: '', fornecedor: '' },
    passaFio: { modelo: '', acabamento: '', quantidade: '', fornecedor: '' },
    portaTempero: {
      modelo: '',
      acabamento: '',
      quantidade: '',
      fornecedor: '',
    },
    lixeira: { modelo: '', acabamento: '', quantidade: '', fornecedor: '' },
    divisorGaveta: {
      modelo: '',
      acabamento: '',
      quantidade: '',
      fornecedor: '',
    },
    divisorAcrilico: {
      modelo: '',
      acabamento: '',
      quantidade: '',
      fornecedor: '',
    },
    divisorTalher: {
      modelo: '',
      acabamento: '',
      quantidade: '',
      fornecedor: '',
    },
    tulha: { modelo: '', acabamento: '', quantidade: '', fornecedor: '' },
    corrediça: { modelo: '', acabamento: '' },
    tabuaPassar: { modelo: '', acabamento: '', quantidade: '', fornecedor: '' },
    pedra: {
      existente: [false],
      espessura: '',
      altura: '',
      afastado: '',
      responsavel: '',
    },
    box: { existente: false, margem: '', alturaFinal: '' },
    rodape: { modelo: '', recebe: '', altura: '', afastado: '' },
    rodaTeto: { modelo: '', altura: '', afastado: '' },
    eletrodomesticos: [],
    observacoes: '',
  };

  listasOpcoes = {
    // Defina as listas de opções para os campos
    modelosPuxadorSuperior: ['Modelo 1', 'Modelo 2', 'Modelo 3'],
    acabamentosPuxadorSuperior: ['Brilhante', 'Fosco', 'Texturizado'],
    fornecedoresPuxadorSuperior: [
      'Fornecedor A',
      'Fornecedor B',
      'Fornecedor C',
    ],
    modelosPuxadorInferior: ['Modelo 4', 'Modelo 5', 'Modelo 6'],
    acabamentosPuxadorInferior: ['Brilhante', 'Fosco', 'Texturizado'],
    fornecedoresPuxadorInferior: [
      'Fornecedor D',
      'Fornecedor E',
      'Fornecedor F',
    ],
    coresMDF: [

      'Branco TX',
      'Cinza Urbano',
      'Madeirado Carvalho',
      'Preto Ônix',
      'Nogueira',

    ],
    modelosPerfil: ['Perfil A', 'Perfil B', 'Perfil C'],
    modelosPuxadorPerfil: ['Puxador X', 'Puxador Y', 'Puxador Z'],
    coresPerfil: ['Preto', 'Branco', 'Alumínio'],
    corposPorta: ['Vidro', 'MDF', 'Acrílico'],
    acabamentosCorpo: ['Fosco', 'Brilhante', 'Texturizado'],
    espessurasVidro: ['4mm', '6mm', '8mm', '10mm'],
    acabamentosVidro: ['Incolor', 'Jateado', 'Fumê', 'Reflecta'],
    fornecedoresVidro: ['Fornecedor A', 'Fornecedor B', 'Fornecedor C'],
    espessurasEspelho: ['3mm', '4mm', '6mm'],
    acabamentosEspelho: ['Prata', 'Fumê', 'Bronze'],
    fornecedoresEspelho: ['Fornecedor A', 'Fornecedor B', 'Fornecedor C'],
    nomesSistemasPortaDeslizante: ['Sistema D', 'Sistema E', 'Sistema F'],
    corposPortaDeslizante: ['Vidro', 'MDF', 'Alumínio'],
    acabamentosPortaDeslizante: ['Brilhante', 'Fosco', 'Texturizado'],
    fechadurasPortaDeslizante: ['Fechadura X', 'Fechadura Y', 'Fechadura Z'],
    sistemasPortaPassagem: ['Sistema A', 'Sistema B', 'Sistema C'],
    corposPortaPassagem: ['MDF', 'Vidro', 'Alumínio'],
    acabamentosPortaPassagem: ['Branco', 'Preto', 'Amadeirado'],
    fechadurasPortaPassagem: ['Simples', 'Magnética', 'Eletrônica'],
    modelosEstofaria: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosEstofaria: ['Couro', 'Tecido', 'Sintético'],
    fornecedoresEstofaria: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    instaladoresEstofaria: ['Equipe Interna', 'Terceirizado', 'Cliente'],
    modelosSerralheria: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosSerralheria: ['Aço Inox', 'Alumínio', 'Bronze'],
    fornecedoresSerralheria: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    instaladoresSerralheria: ['Equipe Interna', 'Terceirizado', 'Cliente'],
    modelosIluminacao: ['LED', 'Halógeno', 'Incandescente'],
    temperaturasIluminacao: ['Fria', 'Neutra', 'Quente'],
    fornecedoresIluminacao: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    modelosTomada: ['Modelo A', 'Modelo B', 'Modelo C'],
    fornecedorTomada: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    acabamentosTomada: ['Branco', 'Preto', 'Inox'],
    modelosInterruptor: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosInterruptor: ['Branco', 'Preto', 'Inox'],
    fornecedoresInterruptor: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    modelosPassaFio: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosPassaFio: ['Branco', 'Preto', 'Inox'],
    fornecedoresPassaFio: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    modelosPortaTempero: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosPortaTempero: ['Branco', 'Preto', 'Inox'],
    fornecedoresPortaTempero: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    modelosLixeira: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosLixeira: ['Branco', 'Preto', 'Inox'],
    fornecedoresLixeira: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    modelosDivisorGaveta: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosDivisorGaveta: ['Branco', 'Preto', 'Inox'],
    fornecedoresDivisorGaveta: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    modelosDivisorAcrilico: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosDivisorAcrilico: ['Branco', 'Preto', 'Inox'],
    fornecedoresDivisorAcrilico: [
      'Fornecedor X',
      'Fornecedor Y',
      'Fornecedor Z',
    ],
    modelosDivisorTalher: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosDivisorTalher: ['Branco', 'Preto', 'Inox'],
    fornecedoresDivisorTalher: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    modelosTulha: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosTulha: ['Branco', 'Preto', 'Inox'],
    fornecedoresTulha: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    modelosCorrediça: ['Corrediça A', 'Corrediça B', 'Corrediça C'],
    acabamentosCorrediça: ['Branco', 'Preto', 'Inox'],
    modelosTabuaPassar: ['Modelo A', 'Modelo B', 'Modelo C'],
    acabamentosTabuaPassar: ['Branco', 'Preto', 'Inox'],
    fornecedorTabuaPassar: ['Fornecedor X', 'Fornecedor Y', 'Fornecedor Z'],
    modelosPedra: ['Granito', 'Mármore', 'Quartzito'],
    fornecedoresPedra: ['Fornecedor A', 'Fornecedor B', 'Fornecedor C'],
    modelosBox: ['Box A', 'Box B', 'Box C'],
    modelosRodape: ['Rodapé A', 'Rodapé B', 'Rodapé C'],
    modelosRodaTeto: ['Roda Teto A', 'Roda Teto B', 'Roda Teto C'],
    recebeRodape: ['Sim', 'Não'],
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

  printPage() {
    console.log('Preparando impressão...');

    setTimeout(() => {
      window.print();
    }, 1000); // Aguarda 1 segundo antes de imprimir
  }
}