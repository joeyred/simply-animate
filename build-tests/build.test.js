// const animationSeries = require('simply-animate');
const {animationSeries} = require('../dist/simply-animate');

describe('Build Test of Simply Animate', () => {
  it('Should import properly', () => {
    expect(animationSeries).toBeTruthy();
    expect(animationSeries({
      seriesClassName: 'demo',
      steps:           [
        {
          name:     'hello',
          duration: 300
        }
      ]
    })).toBeUndefined();
  });
});
