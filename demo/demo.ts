import {animationSeries} from '../dist/simply-animate';

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
