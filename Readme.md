# Simply Animate

A small utility function for handling multi-step animations. Can handle everything from the most simple use cases to much more complex ones with an extremely robust hook system. All without sacrificing speed.

Currently built for use with HTMLElements, but can also just be used purely for it's hooks, making it easy to use with libraries like React, Redux, Vue, and so on.

## Getting Started

TODO add the install instructions and such

```js
import animationSeries from 'simply-animate';

// INCLUDE EXAMPLE HERE
```

## The Main Function

The `animationSeries` function takes an object as its argument.

| Props | Type | Required | Description |
| ----- | ---- | :------: | ----------- |
| `element` | HTMLElement |  | HTMLElement object that the animation classes will be applied to. |
| `namespaceClass` | string |  | The first namespace in the CSS class name. This is meant to allow for replacing the globally used namespace at a function by function level. |
| `seriesClassName` | string | ✅ | The function level namespace for the animation. |
| `hooks` | object |  | See function Hooks for more info. |
| `steps` | array | ✅ | An array of `Step` objects. At least one must be passed. |

## Step Object

| Props | Type | Required | Description |
| ----- | ---- | :------: | ----------- |
| `name` | string | ✅ | Name of the step to be used in the CSS class name. |
| `duration` | number | ✅ | duration of the step in milliseconds. |
| `hooks` | object | | Hooks specific to the animation step. See Step Hooks below. |

## Hooks

### Series Hooks (object)

These hooks apply to the entire series. Use Step Hooks to hook into individual steps in the animation series.

| Props | Type | Required | Description |
| ----- | ---- | :------: | ----------- |
| `before` | function | | Fires before the first animation frame is requested. |
| `beforeEachStep` | function | | Fires at the beginning of each step, before the css classes are updated. |
| `duringEachStep` | function | | Fires after css classes are updated for each step. |
| `beforeEachFrame` | function | | Fires before every frame. |
| `afterEachFrame` | function | | Fires after every frame, but before `afterEachStep` hook is fired when the hooks share a frame. |
| `afterEachStep` | function | | Fires at the end of each step, at the same time the step index is being incremented. |
| `after` | function | | Fires at the end of all the steps, in place of requesting another animation frame. |

### Step Hooks (object)

| Props | Type | Required | Description |
| ----- | ---- | :------: | ----------- |
| `before` | function | | Fires at the beginning of the step, before classes are updated, but after `beforeEachFrame` when the hooks share a frame. |
| `during` | function | | Fires after classes have been updated, but after the `duringEachStep` series hook. |
| `beforeEachFrame` | function | | Fires at the beginning of each frame but after the `beforeEachFrame` series hook.  |
| `afterEachFrame` | function | | Fires at the end of each frame, after all step hooks that share the frame. |
| `after` | function | | Fires at the end of each step, but after `afterEachStep` series hook. |

### Hook Function Param

All hook functions are passed an object as a single param.

| Props | Type | Description |
| ----- | ---- | ----------- |
| `element` | HTMLElement | Element passed to the AnimationSeries function. This will only be present if an element was passed to the `animationSeries` function. |
| `progress` | object | Object containing different progresses of the animation. |
| `progress.series` | number | Progress of entire animation series represented as a number between 0 and 1. |
| `progress.step` | number | Progress of the active step represented as a number between 0 and 1. |
