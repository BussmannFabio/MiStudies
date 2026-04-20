import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './planos.html',
})
export class Planos {}
