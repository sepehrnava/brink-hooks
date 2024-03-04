# Brink Hooks Documentation

A collection of useful React hooks for handling various web functionalities such as window size, debounce, media queries, click away, throttle, and mobile detection.

## Hooks

### `useWindowSize`

Tracks and returns the size of the browser window.

**Returns**

- `windowSize`: An object containing `width` and `height` of the window. Both values are numbers or `null` if the window size is not available.

### `useDebounce`

Creates a debounced function that delays invoking the callback until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.

**Parameters**

- `callback`: The function to debounce.
- `delay`: The number of milliseconds to delay.

**Returns**

- A debounced version of the provided `callback` function.

### `useMediaQuery`

Evaluates a CSS media query string and returns a boolean indicating if the document currently matches the media query.

**Parameters**

- `query`: The media query string to evaluate.

**Returns**

- `matches`: Boolean indicating whether the document matches the media query.

### `useClickAway`

Triggers a callback when a click is detected outside the specified element.

**Parameters**

- `ref`: A React ref object pointing to the element to detect clicks outside of.
- `callback`: Function to call when a click outside is detected.

### `useThrottle`

Creates a throttled function that only invokes the callback at most once per every `delay` milliseconds.

**Parameters**

- `callback`: The function to throttle.
- `delay`: The number of milliseconds to throttle calls to `callback`.

**Returns**

- A throttled version of the provided `callback` function.

### `useIsMobile`

Detects if the device is a mobile device based on the navigator's user agent.

**Returns**

- `isMobile`: Boolean indicating whether the device is a mobile device.

## Installation

To use these hooks in your project, first install the package:

```bash
npm install brink-hooks
```
