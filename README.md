# Penthouse Design system
This is a pack of UI components, colors and animation presets for use in React projects. Everything is documented in TypeScript.

## Installation

```bash
npm install penthouse-design
# or
yarn add penthouse-design
```

You also need tailwind installed at a minimum version of 2.2


Then add this to y

## Exports
Import any of these desctructured from "penthouse-design". Example:
```javascript
import { CheckboxButton } from "penthouse-design"
```
### UI components
- `Text`
- `Button`
- `CheckboxButton`
- `Input`

### Theme
- `tailwindPreset`

### Animations
- `clickable`
- `clickableWithScale`
- `appear`
- `basicStaggering`
- `slowStaggering`

## Local testing

Run TSDX in one terminal:

```bash
npm start # or yarn start
```

Then run Storybook inside another terminal:

```bash
yarn storybook
```

To do a one-off build, use `npm run build` or `yarn build`.
To run tests with Jest, use `npm test` or `yarn test`.
