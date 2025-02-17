import { Component } from '@angular/core';
import { acabamentoPuxadorInferior } from 'src/app/data/acabamento-puxador-inferior';
import { acabamentoPuxador } from 'src/app/data/acabamento-puxador-Superior';
import { coresMDF } from 'src/app/data/cor-mdf';
import { Fornecedor } from 'src/app/data/fornecedor';
import { modeloPerfil } from 'src/app/data/modelo-perfil';
import { modeloPuxadorInferior } from 'src/app/data/modelo-puxador-inferior';
import { modeloPuxadorSuperior } from 'src/app/data/modelo-puxador-superior';
import { quantidadePuxadorInferior } from 'src/app/data/quantidade-puxador-inferior';
import { quantidadepuxadorsuperior } from 'src/app/data/quantidade-puxador-superior';
import { EletroService, EletroDTO } from 'src/app/services/eletro.service';
import { defaultForm } from 'src/app/models/default-form';
import { modelosPuxadorPerfil } from 'src/app/data/modelos-puxador-perfil';
import { espessuraPedra } from 'src/app/data/espessura-pedra';
import { coresPerfil } from 'src/app/data/cores-perfil';
import { acabamentosCorpo } from 'src/app/data/acabamentos-corpo';
import { espessurasVidro } from 'src/app/data/espessura-vidro';
import { acabamentosVidro } from 'src/app/data/acabamentos-vidro';
import { espessurasEspelho } from 'src/app/data/espessuras-espelho';
import { acabamentosEspelho } from 'src/app/data/acabamentos-espelho';
import { nomesSistemasPortaDeslizante } from 'src/app/data/nomes-sistemas-portas-deslizante';
import { corposPortaDeslizante } from 'src/app/data/corpos-porta-deslizante';
import { acabamentosPortaDeslizante } from 'src/app/data/acabamentos-porta-deslizante';
import { fechadurasPortaDeslizante } from 'src/app/data/fechaduras-porta-deslizante';
import { sistemasPortaDeslizante } from 'src/app/data/sistemas-porta-deslizante';
import { corposPortaPassagem } from 'src/app/data/corpos-porta-passagem';
import { sistemasPortaPassagem } from 'src/app/data/sistema-porta-passagem';
import { acabamentosPortaPassagem } from 'src/app/data/acabamentos-porta-passagem';
import { fechadurasPortaPassagem } from 'src/app/data/fechaduras-porta-passagem';
import { modelosEstofaria } from 'src/app/data/modelos-estofaria';
import { acabamentosEstofaria } from 'src/app/data/acabamentos-estofaria';
import { fornecedoresEstofaria } from 'src/app/data/fornecedores-estofaria';
import { fornecedoresPuxadorInferior } from 'src/app/data/fornecedores-puxador-inferior';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    standalone: false
})
export class FormComponent {

  form = defaultForm;

  // Defina as listas de opções para os campos
  listasOpcoes = {

    modeloPuxadorSuperior: modeloPuxadorSuperior,
    acabamentoPuxador : acabamentoPuxador,
    Fornecedor : Fornecedor,
    quantidadepuxadorsuperior : quantidadepuxadorsuperior,
    modeloPuxadorInferior : modeloPuxadorInferior,
    acabamentoPuxadorInferior : acabamentoPuxadorInferior,
    coresMDF : coresMDF,
    quantidadePuxadorInferior : quantidadePuxadorInferior,
    modeloPerfil : modeloPerfil,
    modelosPuxadorPerfil:  modelosPuxadorPerfil,
    espessuraPedra: espessuraPedra,
    coresPerfil: coresPerfil,
    acabamentosCorpo: acabamentosCorpo,
    espessurasVidro: espessurasVidro,
    acabamentosVidro: acabamentosVidro,
    espessurasEspelho: espessurasEspelho,
    acabamentosEspelho: acabamentosEspelho,
    nomesSistemasPortaDeslizante: nomesSistemasPortaDeslizante,
    corposPortaDeslizante: corposPortaDeslizante,
    acabamentosPortaDeslizante: acabamentosPortaDeslizante,
    fechadurasPortaDeslizante: fechadurasPortaDeslizante,
    sistemasPortaDeslizante: sistemasPortaDeslizante,
    corposPortaPassagem: corposPortaPassagem,
    sistemasPortaPassagem: sistemasPortaPassagem,
    acabamentosPortaPassagem: acabamentosPortaPassagem,
    fechadurasPortaPassagem: fechadurasPortaPassagem,
    modelosEstofaria: modelosEstofaria,
    acabamentosEstofaria: acabamentosEstofaria,
    fornecedoresEstofaria: fornecedoresEstofaria,
    fornecedoresPuxadorInferior: fornecedoresPuxadorInferior,



    corposPorta: ['MDF', 'Vidro', ''],
    fornecedoresVidro: ['Cliente', 'Fabrica', ''],
    fornecedoresEspelho: ['Cliente','Fabrica', ''],
    quantidadePortaDeslizante: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''],
    quantidadePortaPassagem: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''],


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
      quantidadeTomada: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
      ],
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
    quantidadeInterruptor: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
      ],

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
      quantidadePassaFio: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
      ],

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
    quantidadePortaTempero: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
      ],

    //Lixeira
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
    quantidadeLixeira: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
      ],

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
    quantidadeDivisorGaveta: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
        ],
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
    quantidadeDivisorAcrilico: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
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
    quantidadeDivisorTalher: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
        ],
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
    quantidadeTulha: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
        ],
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
    quantidadeTabuaPassar: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ''
        ],
    //Pedra
    existentePedra:['Sim', 'Não', ''],
    modelosPedra: [
      'Granito',
      'Mármore',
      'Quartzito', ''],
    fornecedoresPedra: [
      'Cliente',
      'Fabrica', ''],


    alturafinalPedra:[
      '84cm',
      '85cm',
      '86cm',
      '87cm',
      '88cm',
      '89cm',
      '90cm',
      '91cm',
      '92cm',
      '93cm',
      '94cm',
      '95cm',
      '96cm',
      '97cm',
      '98cm',
      '99cm',
      '100cm',
      '',

    ],

    //Box
    modelosBox: [
      'Até o Teto',
      'Sob Medida',
      'Sem Box', ""],
    margemBox:[
      '6cm', '8cm', ""
    ],

    //Rodapé
    modelosRodape: [
      'Liso',
      'Com Friso', ''
      ],
    alturaRodape:[
      '40mm',
      '50mm',
      '60mm',
      '70mm',
      '80mm',
      '90mm',
      '100mm',
      '110mm',
      '120mm',
      '130mm',
      '140mm',
      '150mm',
      '160mm',
      '170mm',
      '180mm',
      '190mm',
      '200mm',
      '210mm',
      '220mm',
      '230mm',
      '240mm',
      '250mm',
      '260mm',
      '270mm',
      '280mm',
      ''
    ],
    afastamentoRodape:[
      '1cm',
      '2cm',
      '3cm',
      '4cm',
      '5cm',
      '6cm',
      '7cm',
      '8cm',
      '9cm',
      '10cm',
      '',
    ],
    recebeRodape: ['Sim', 'Não', ''],

    //Roda Teto
    modelosRodaTeto: [
      'Liso',
      'Com Detalhes', ''
    ],
    alturaRodateto:[
      '80mm',
      '90mm',
      '100mm',
      '110mm',
      '120mm',
      '130mm',
      '140mm',
      '150mm',
      '160mm',
      '170mm',
      '180mm',
      '190mm',
      '200mm',
      '210mm',
      '220mm',
      '230mm',
      '240mm',
      '250mm',
      '260mm',
      '270mm',
      '280mm',
      ''
    ],
    afastamentoFrontalRodateto:[
      '1cm',
      '2cm',
      '3cm',
      '4cm',
      '5cm',
      '6cm',
      '7cm',
      '8cm',
      '9cm',
      '10cm',
      '',]

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