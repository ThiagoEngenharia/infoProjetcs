import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  applyPrintVisibility() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      const parentCol = input.closest('.col');
      if (parentCol && (!input.value || input.value.trim() === '')) {
        parentCol.classList.add('hide-on-print');
      }
    });
  }

  clearPrintVisibility() {
    document.querySelectorAll('.hide-on-print').forEach((el) => {
      el.classList.remove('hide-on-print');
    });
  }

  printPage() {
    console.log('Preparando impressão...');
    setTimeout(() => {
      console.log('Iniciando a impressão...');
      window.print();
    }, 1000);
  }
}
