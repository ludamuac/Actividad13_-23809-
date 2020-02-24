import { Component } from '@angular/core';
import {textareaAutoResize} from 'materialize-css';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  notas = [];

  ngOnInit(): void{
    $('.collapsible').collapsible();
  }

  addNote(input1: HTMLInputElement, input2: HTMLInputElement){
    const titulo = input1.value;
    const texto = input2.value;

    if (titulo === '') {
      alert('Ingresa titulo');
    } else if (texto === '') {
      alert('Ingresa texto');
    } else {
      const nota = {
        title: titulo,
        body: texto
      };
      this.notas.unshift(nota);
      $('#titulo').val('')
      // input2.value = '';
      $('#textarea1').val('');
      textareaAutoResize($('#textarea1'));
    }
  }
}
