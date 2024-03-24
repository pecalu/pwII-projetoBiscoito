import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  @Input() informacaofilho: string = '';
  quebrado: boolean = false;

  ngOnChanges() {
    if (this.informacaofilho !== "inteiro") {
      this.quebrar();
    }
  }

  quebrar() {
    this.quebrado = true;
  }
}
