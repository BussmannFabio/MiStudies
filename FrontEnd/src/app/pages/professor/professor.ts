import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './professor.html',
})
export class Professor implements OnInit {
  slug = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }
}
