import { trigger, style, animate, transition, query, group } from '@angular/animations';

//setting
export const pageSwitchTransition = trigger('pageSwitchTransition', [
  transition(':enter',
    query('div.full-screen', [
      style({ transform: 'translate3d(0, 15%, 0)', opacity: 0 }),
      animate('200ms 200ms')
    ])
  ),
  transition(':leave',
    query('div.full-screen', [
      animate('200ms', style({ transform: 'translate3d(0, 15%, 0)', opacity: 0 }))
    ])
  )
]);

//右侧栏
export const detailTransition = trigger('detailTransition', [
    transition(
      ':enter',
      group([
        query('div.mask', [ style({ opacity: 0 }), animate('400ms linear') ]),
        query('div.container', [
          style({ transform: 'translate3d(100%, 0, 0)' }),
          animate('400ms ease')
        ])
      ])
    ),
    transition(
      ':leave',
      group([
        query('div.mask', animate('400ms linear', style({ opacity: 0 }))),
        query(
          'div.container',
          animate('400ms ease', style({ transform: 'translate3d(100%, 0, 0)' }))
        )
      ])
    )
  ]);

  //日历页
  export const SammaryPageSwitchTransition = trigger('SammaryPageSwitchTransition', [
    transition(':enter',
      query('nz-layout.full-screen', [
        style({ transform: 'translate3d(0, 15%, 0)', opacity: 0 }),
        animate('200ms 200ms')
      ])
    ),
    transition(':leave',
      query('nz-layout.full-screen', [
        animate('200ms', style({ opacity: 0, transform: 'translate3d(0, -2px, 0)' }))
      ])
    )
  ]);