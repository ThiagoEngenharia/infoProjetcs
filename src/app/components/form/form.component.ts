import { Component, HostListener } from '@angular/core';
import { EletroService, EletroDTO } from 'src/app/services/eletro.service';
import { defaultForm } from 'src/app/models/default-form';
import { ListasOpcoesService } from 'src/app/services/listas-opcoes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: false
})
export class FormComponent {
  form = { ...defaultForm }; // Cópia do formulário para evitar alterações diretas
  listasOpcoes: any;
  lastField: { field: string, value: any } | null = null; // Armazena a última alteração
  historyStack: { field: string; oldValue: any }[] = []; // Pilha para armazenar as últimas alterações (permite múltiplos "Ctrl+Z")

  constructor(private listaopcoesService: ListasOpcoesService, private eletroService: EletroService) {
    this.listasOpcoes = this.listaopcoesService.getListaopcoes();
  }

    // Otimiza a renderização do *ngFor
    trackByFn(index: number, item: any): number {
      return index;
    }

    // Verifica se o campo está vazio e deve ser escondido
    isFieldEmpty(value: any): boolean {
      return value === null || value === undefined ||
             (typeof value === 'string' && value.trim() === '') ||
             (Array.isArray(value) && value.length === 0) ||
             (typeof value === 'object' && Object.keys(value).length === 0);
    }

    eletroCodigo: string = '';
    eletroInfo: EletroDTO | null = null;
    loading: boolean = false;

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
        }
      );
    }

    saveForm() {
      if (this.loading) return;

      this.loading = true;
      console.log('Formulário sendo salvo:', this.form);

      setTimeout(() => {
        this.loading = false;
        alert('Formulário salvo com sucesso!');
      }, 2000);
    }

    printPage() {
      console.log('Preparando impressão...');
      setTimeout(() => {
        window.print();
      }, 1000);
    }
  }