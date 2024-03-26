import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  @Input() informacaofilho: string = '';
  quebrado: boolean = false;
  frases: string[] = [
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso está mais próximo do que você imagina.",
    "Grandes conquistas começam com pequenos passos.",
    "A sorte favorece os corajosos.",
    "Seja a mudança que você deseja ver no mundo.",
    "A vida é uma aventura; ouse explorá-la.",
    "A persistência é a chave para alcançar seus objetivos.",
    "Aprenda com o passado, viva no presente, sonhe com o futuro.",
    "Seja gentil, pois cada ato de bondade faz a diferença.",
    "O amor é a resposta para todas as perguntas.",
    
  ];
  fraseAleatoria: string = '';

  ngOnChanges() {
    if (this.informacaofilho !== "inteiro") {
      this.quebrar();
    }
  }

  quebrar() {
    this.quebrado = true;
    this.fraseAleatoria = this.frases[Math.floor(Math.random() * this.frases.length)];
  }

  alternarImagem() {
    this.quebrado = !this.quebrado;
    if (this.quebrado) {
      this.fraseAleatoria = this.frases[Math.floor(Math.random() * this.frases.length)];
    } else {
      this.fraseAleatoria = '';
    }
  }
}
