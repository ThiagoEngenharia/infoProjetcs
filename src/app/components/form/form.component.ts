import { Component } from '@angular/core';
import { EletroService, EletroDTO } from 'src/app/services/eletro.service';
import { defaultForm } from 'src/app/models/default-form';
import * as listasOpcoes from 'src/app/data/index';



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

    modeloPuxadorSuperior: listasOpcoes.modeloPuxadorSuperior,
    acabamentoPuxador: listasOpcoes.acabamentoPuxador,
    Fornecedor: listasOpcoes.Fornecedor,
    quantidadepuxadorsuperior: listasOpcoes.quantidadepuxadorsuperior,
    modeloPuxadorInferior: listasOpcoes.modeloPuxadorInferior,
    acabamentoPuxadorInferior: listasOpcoes.acabamentoPuxadorInferior,
    coresMDF: listasOpcoes.coresMDF,
    quantidadePuxadorInferior: listasOpcoes.quantidadePuxadorInferior,
    modeloPerfil: listasOpcoes.modeloPerfil,
    modelosPuxadorPerfil: listasOpcoes.modelosPuxadorPerfil,
    espessuraPedra: listasOpcoes.espessuraPedra,
    coresPerfil: listasOpcoes.coresPerfil,
    acabamentosCorpo: listasOpcoes.acabamentosCorpo,
    espessurasVidro: listasOpcoes.espessurasVidro,
    acabamentosVidro: listasOpcoes.acabamentosVidro,
    espessurasEspelho: listasOpcoes.espessurasEspelho,
    acabamentosEspelho: listasOpcoes.acabamentosEspelho,
    nomesSistemasPortaDeslizante: listasOpcoes.nomesSistemasPortaDeslizante,
    corposPortaDeslizante: listasOpcoes.corposPortaDeslizante,
    acabamentosPortaDeslizante: listasOpcoes.acabamentosPortaDeslizante,
    fechadurasPortaDeslizante: listasOpcoes.fechadurasPortaDeslizante,
    sistemasPortaDeslizante: listasOpcoes.sistemasPortaDeslizante,
    corposPortaPassagem: listasOpcoes.corposPortaPassagem,
    sistemasPortaPassagem: listasOpcoes.sistemasPortaPassagem,
    acabamentosPortaPassagem: listasOpcoes.acabamentosPortaPassagem,
    fechadurasPortaPassagem: listasOpcoes.fechadurasPortaPassagem,
    modelosEstofaria: listasOpcoes.modelosEstofaria,
    acabamentosEstofaria: listasOpcoes.acabamentosEstofaria,
    fornecedoresEstofaria: listasOpcoes.fornecedoresEstofaria,
    fornecedoresPuxadorInferior: listasOpcoes.fornecedoresPuxadorInferior,
    corposPorta: listasOpcoes.corposPorta,
    fornecedoresVidro: listasOpcoes.fornecedoresVidro,
    fornecedoresEspelho: listasOpcoes.fornecedoresEspelho,
    quantidadePortaDeslizante: listasOpcoes.quantidadePortaDeslizante,
    quantidadePortaPassagem: listasOpcoes.quantidadePortaPassagem,
    instaladoresEstofaria: listasOpcoes.instaladoresEstofaria,
    modelosSerralheria: listasOpcoes.modelosSerralheria,
    acabamentosSerralheria: listasOpcoes.acabamentosSerralheria,
    fornecedoresSerralheria: listasOpcoes.fornecedoresSerralheria,
    instaladoresSerralheria: listasOpcoes.instaladoresSerralheria,
    modelosIluminacao: listasOpcoes.modelosIluminacao,
    temperaturasIluminacao: listasOpcoes.temperaturasIluminacao,
    fornecedoresIluminacao: listasOpcoes.fornecedoresIluminacao,
    modelosTomada: listasOpcoes.modelosTomada,
    fornecedorTomada: listasOpcoes.fornecedorTomada,
    acabamentosTomada: listasOpcoes.acabamentosTomada,
    quantidadeTomada: listasOpcoes.quantidadeTomada,
    modelosInterruptor: listasOpcoes.modelosInterruptor,
    acabamentosInterruptor: listasOpcoes.acabamentosInterruptor,
    fornecedoresInterruptor: listasOpcoes.fornecedoresInterruptor,
    quantidadeInterruptor: listasOpcoes.quantidadeInterruptor,
    modelosPassaFio: listasOpcoes.modelosPassaFio,
    acabamentosPassaFio: listasOpcoes.acabamentosPassaFio,
    fornecedoresPassaFio: listasOpcoes.fornecedoresPassaFio,
    quantidadePassaFio: listasOpcoes.quantidadePassaFio,
    modelosPortaTempero: listasOpcoes.modelosPortaTempero,
    acabamentosPortaTempero: listasOpcoes.acabamentosPortaTempero,
    fornecedoresPortaTempero: listasOpcoes.fornecedoresPortaTempero,
    quantidadePortaTempero: listasOpcoes.quantidadePortaTempero,
    modelosLixeira: listasOpcoes.modelosLixeira,
    acabamentosLixeira: listasOpcoes.acabamentosLixeira,
    fornecedoresLixeira: listasOpcoes.fornecedoresLixeira,
    alturaRodape: listasOpcoes.alturaRodape,
    afastamentoRodape: listasOpcoes.afastamentoRodape,
    alturaRodateto: listasOpcoes.alturaRodateto,
    afastamentoFrontalRodateto: listasOpcoes.afastamentoFrontalRodateto,
    alturafinalPedra: listasOpcoes.alturafinalPedra,
    quantidadeLixeira: listasOpcoes.quantidadeLixeira,
    modelosDivisorGaveta: listasOpcoes.modelosDivisorGaveta,
    acabamentosDivisorGaveta: listasOpcoes.acabamentosDivisorGaveta,
    fornecedoresDivisorGaveta: listasOpcoes.fornecedoresDivisorGaveta,
    quantidadeDivisorGaveta: listasOpcoes.quantidadeDivisorGaveta,
    modelosDivisorAcrilico: listasOpcoes.modelosDivisorAcrilico,
    acabamentosDivisorAcrilico: listasOpcoes.acabamentosDivisorAcrilico,
    fornecedoresDivisorAcrilico: listasOpcoes.fornecedoresDivisorAcrilico,
    quantidadeDivisorAcrilico: listasOpcoes.quantidadeDivisorAcrilico,
    modelosDivisorTalher: listasOpcoes.modelosDivisorTalher,
    acabamentosDivisorTalher: listasOpcoes.acabamentosDivisorTalher,
    fornecedoresDivisorTalher: listasOpcoes.fornecedoresDivisorTalher,
    quantidadeDivisorTalher: listasOpcoes.quantidadeDivisorTalher,
    modelosTulha: listasOpcoes.modelosTulha,
    acabamentosTulha: listasOpcoes.acabamentosTulha,
    fornecedoresTulha: listasOpcoes.fornecedoresTulha,
    quantidadeTulha: listasOpcoes.quantidadeTulha,
    modelosCorrediça: listasOpcoes.modelosCorrediça,
    acabamentosCorrediça: listasOpcoes.acabamentosCorrediça,
    modelosTabuaPassar: listasOpcoes.modelosTabuaPassar,
    acabamentosTabuaPassar: listasOpcoes.acabamentosTabuaPassar,
    fornecedorTabuaPassar: listasOpcoes.fornecedorTabuaPassar,
    quantidadeTabuaPassar: listasOpcoes.quantidadeTabuaPassar,
    existentePedra: listasOpcoes.existentePedra,
    modelosPedra: listasOpcoes.modelosPedra,
    fornecedoresPedra: listasOpcoes.fornecedoresPedra,
    margemBox: listasOpcoes.margemBox,
    modelosBox: listasOpcoes.modelosBox,
    modelosRodape:listasOpcoes.modelosRodape,
    recebeRodape:listasOpcoes.recebeRodape,
    modelosRodaTeto: listasOpcoes.modelosRodaTeto

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