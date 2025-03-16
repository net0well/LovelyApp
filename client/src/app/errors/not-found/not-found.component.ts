import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }


  triggerEasterEgg(): void {
    this.createHeartConfetti();

  }


  createHeartConfetti(): void {
    const container = document.querySelector('.hearts-container');
    if (!container) return;


    container.innerHTML = '';


    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        this.createHeart(container as HTMLElement);
      }, i * 50);
    }
  }


  createHeart(container: HTMLElement): void {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 100;


    const size = Math.random() * 15 + 10;


    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.opacity = '1';
    heart.style.position = 'fixed';


    container.appendChild(heart);


    const animationDuration = Math.random() * 3 + 2; // 2-5 segundos
    const xMovement = (Math.random() - 0.5) * 200; // Movimento horizontal aleatório


    heart.animate(
      [
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${xMovement}px, -${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ],
      {
        duration: animationDuration * 1000,
        easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)',
        fill: 'forwards'
      }
    ).onfinish = () => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    };
  }

}
