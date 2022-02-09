import {animationSeries} from '../src/simply-animate';
// import {animationSeries} from './simply-animate';

animationSeries({
  seriesClassName: 'hello',
  hooks:           {
    before:          () => console.log('series:before'),
    beforeEachStep:  () => console.log('series:beforeEachStep'),
    duringEachStep:  () => console.log('series:duringEachStep'),
    beforeEachFrame: () => console.log('series:beforeEachFrame'),
    afterEachFrame:  () => console.log('series:afterEachFrame'),
    afterEachStep:   () => console.log('series:afterEachStep'),
    after:           () => console.log('series:after')
  },
  steps: [
    {
      duration: 1,
      hooks:    {
        before:          () => console.log('step:before'),
        during:          () => console.log('step:during'),
        beforeEachFrame: () => console.log('step:beforeEachFrame'),
        afterEachFrame:  () => console.log('step:afterEachFrame'),
        after:           () => console.log('step:after')
      }
    }
  ]
});

// animationSeries({
//   seriesClassName: 'demo',
//   hooks:           {
//     before: () => console.log('before!'),
//     after:  () => console.log('after!')
//   },
//   steps: [
//     {
//       name:     'hello',
//       duration: 300
//     }
//   ]
// });
