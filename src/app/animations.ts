import { transition, query, style, animate, trigger } from "@angular/animations";

// LEFT TO RIGHT AKA PREVIOUS
export const routerAnimation = trigger('routerAnimation', [
transition('* => 1', [
  // Initial state of new route
  query(':enter',
    style({
      position: 'fixed',
      width: '100%',
      transform: 'translateX(-100%)'
    }), { optional: true }),
  // move page off screen right on leave
  query(':leave',
    animate('150ms ease',
      style({
        position: 'fixed',
        width: '100%',
        transform: 'translateX(100%)',
      })
    ), { optional: true }),
  // move page in screen from left to right
  query(':enter',
    animate('150ms ease',
      style({
        opacity: 1,
        transform: 'translateX(0%)'
      })
    ), { optional: true }),
  ]),

  transition('1 => *', [
    // Initial state of new route
    query(':enter',
      style({
        position: 'fixed',
        width: '100%',
        transform: 'translateX(100%)'
      }), { optional: true }),
    // move page off screen right on leave
    query(':leave',
      animate('150ms ease',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(-100%)',
        })
      ), { optional: true }),
    // move page in screen from left to right
    query(':enter',
      animate('150ms ease',
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        })
      ), { optional: true }),
    ])
])
