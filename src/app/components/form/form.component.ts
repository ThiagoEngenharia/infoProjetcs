import { Component, HostListener } from '@angular/core';
import { EletroService, EletroDTO } from 'src/app/services/eletro.service';
import { defaultForm } from 'src/app/models/default-form';
import { ListasOpcoesService } from 'src/app/services/listas-opcoes.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: false
})
export class FormComponent {
  form = { ...defaultForm }; // Cópia do formulário para evitar alterações diretas
  listasOpcoes: any;
  loading: boolean = false;

  constructor(private listaopcoesService: ListasOpcoesService, private eletroService: EletroService, private http: HttpClient) {
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
      this.http.post('http://localhost:8080/api/form', this.form).subscribe(
        (response)=> {
          console.log("Salvo", response);
          this.loading = false;
          alert('SALVO');
        },
        (error)=>{
          console.error('ERRO', error);
          this.loading = false;
          alert('ERRO');

        }
      )
    }

    printPage() {
      console.log('Preparando impressão...');
      setTimeout(() => {
        window.print();
      }, 1000);
    }
  }