import animationSeries from '../src/simply-animate';

animationSeries({
  seriesClassName: 'demo',
  steps:           [
    {
      name:     'hello',
      duration: 300
    }
  ]
});
