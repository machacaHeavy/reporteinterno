import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const fadeInAnimation: AnimationEntryMetadata = trigger('routerAnimation', [
  state('*', style({
      opacity: 1
  })),
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('0.7s ease-in')
  ]),
  transition(':leave', [
      style({
          opacity: 0
      }),
      animate('0s ease-out')
  ])
]);