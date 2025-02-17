import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DropdownOption } from '../models/dropdown-option.model';
import { UpdateResponse } from '../models/updateresponse.model';
import { DeleteResponse } from '../models/delete-response.model';
import { SubmissionResponse } from '../models/submission-response.model';


@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://localhost:8080/api/form'; // Ajuste conforme o backend

  constructor(private http: HttpClient) {}

  /**
   * Envia os dados do formulário para o backend (novo formulário)
   */
  submitForm(data: FormData): Observable<SubmissionResponse> {
    return this.http.post<SubmissionResponse>(`${this.apiUrl}/submit`, data);
  }

  /**
   * Obtém todas as opções de um determinado campo das listas suspensas
   */
  getDropdownOptions(endpoint: string): Observable<DropdownOption[]> {
    return this.http.get<DropdownOption[]>(`${this.apiUrl}/dropdown/${endpoint}`);
  }

  /**
   * Recupera um formulário salvo pelo ID (para edição ou visualização)
   */
  getFormDataById(id: number): Observable<FormData> {
    return this.http.get<FormData>(`${this.apiUrl}/${id}`);
  }

  /**
   * Atualiza um formulário já existente no banco de dados
   */
  updateForm(id: number, data: FormData): Observable<UpdateResponse> {
    return this.http.put<UpdateResponse>(`${this.apiUrl}/update/${id}`, data);
  }

  /**
   * Exclui um formulário do banco de dados
   */
  deleteForm(id: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${this.apiUrl}/delete/${id}`);
  }
}
