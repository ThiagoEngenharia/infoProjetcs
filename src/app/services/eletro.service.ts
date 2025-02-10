import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definindo a estrutura de dados do Eletro
export interface EletroDTO {
  codigo: string;
  altura: number;
  largura: number;
  profundidade: number;
  linkManual: string;
}

@Injectable({
  providedIn: 'root',
})
export class EletroService {
  private apiUrl = 'http://localhost:8080/eletro/buscar'; // URL do seu backend

  constructor(private http: HttpClient) {}

  // Método para buscar eletro por código
  buscarEletroPorCodigo(codigo: string): Observable<EletroDTO> {
    return this.http.get<EletroDTO>(`${this.apiUrl}/${codigo}`);
  }
}
