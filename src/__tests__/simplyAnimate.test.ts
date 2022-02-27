import {animationSeries} from '../simply-animate';

// const properHookOrder = [
//   'series:before',
//   'series:before'
// ]
// const getOrderOfFunctionsFired = (name) => {}

describe('animationSeries', () => {



  // beforeEach(() => {
  //   // eslint-disable-next-line no-undef
  //   jest.spyOn(window, 'requestAnimationFrame').mockImplementation();
  // });
  // afterEach(() => {
  //   window.requestAnimationFrame.mockRestore();
  // });

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
  // css classes should update properly

  it('Should fire the before hook', () => {
    // eslint-disable-next-line no-undef
    const mockCallback = jest.fn(() => 1);

    animationSeries({
      seriesClassName: 'testBefore',
      hooks:           {
        before: () => mockCallback()
      },
      steps: [
        {
          duration: 200
        }
      ]
    });

    expect(mockCallback.mock.calls.length).toBe(1);
  });
  // run hooks in order
  // it('Should run when element is passed');
  it('Should properly execute hooks', () => {
    let timesFired = 0;
    // eslint-disable-next-line no-undef
    jest.useFakeTimers();
    // eslint-disable-next-line no-undef
    jest.spyOn(global, 'setTimeout');
    // eslint-disable-next-line no-undef
    const shouldFire = jest.fn((fired = false) => {
      timesFired += 1;
      console.log(timesFired);
      return expect(fired).toBe(true);
    });

    

    animationSeries({
      seriesClassName: 'hello',
      hooks:           {
        before:         () => shouldFire(true),
        beforeEachStep: () => shouldFire(true),
        // afterEachClassNameChange: () => {},
        onEachFrame:    () => shouldFire(true),
        afterEachStep:  () => shouldFire(true),
        after:          () => {
          shouldFire(true);
          

        }
      },
      steps: [
        {
          duration: 100,
          hooks:    {
            before:      () => shouldFire(true),
            // during: () => mockCallback(),
            onEachFrame: () => shouldFire(true),
            after:       () => shouldFire(true)
          }
        }
      ]
    });
    setTimeout(() => {
      expect(shouldFire.mock.calls.length).toBe(20);
    }, 100);
  });
});
