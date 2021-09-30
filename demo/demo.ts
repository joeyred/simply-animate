import {animationSeries} from '../src/simply-animate';

animationSeries({
  seriesClassName: 'demo',
  hooks:           {
    before: () => console.log('before!'),
    after:  () => console.log('after!')
  },
  steps: [
    {
      name:     'hello',
      duration: 300
    }
  ]
});
