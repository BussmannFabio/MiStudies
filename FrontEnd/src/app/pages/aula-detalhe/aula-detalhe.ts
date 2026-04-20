import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aula-detalhe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aula-detalhe.html',
})
export class AulaDetalhe implements OnInit {
  slug = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }
}
