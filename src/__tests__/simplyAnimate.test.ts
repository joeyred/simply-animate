import {animationSeries} from '../simply-animate';

describe('animationSeries', () => {
  it('should import', () => {
    expect(animationSeries).toBeTruthy();
  });
  it('should run in most basic form', () => {
    animationSeries({
      seriesClassName: 'hello',
      steps:           [
        {
          duration: 500
        }
      ]
    });
  });
  it('Should run when element is passed');
  it('Should properly execute hooks');
});
