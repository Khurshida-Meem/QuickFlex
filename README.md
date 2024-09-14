# React QuickFlex

`quickflex` is a lightweight, customizable Flexbox component built with React and Emotion. It simplifies the usage of Flexbox in your React applications by providing an easy-to-use component with flexible options.

## Features

- Simple, declarative API to manage Flexbox layouts
- Full control over flex properties (`justify`, `align`, `direction`, `wrap`, `gap`)
- Written in TypeScript, with full type safety
- Lightweight and fast, optimized for performance
- Easily extendable with `className` or inline `style` props
- Not dependent on any CSS libraries or frameworks

## Installation

You can install the package via npm:

```bash
npm i react-quickflex
```

## Usage

The QuickFlex component is a wrapper around a div element with flex properties passed as props. Here’s an example of how to use it in a React project:

<!-- prettier-ignore -->
```js
import React from 'react';
import { QuickFlex } from 'quickflex';

const App = () => {
  return (
    <QuickFlex
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      gap="16px"
      style={{ height: '100vh' }}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </QuickFlex>
  );
};

export default App;
```

## Example Explanation

- The QuickFlex component allows you to set the justify, align, direction, wrap, and gap properties via props.
- Additional styles can be passed using the style or className prop.

## Props

Here are the available props for the QuickFlex component:

| Prop      | Type                | Options                                                                                                       | Default        | Description                                                              |
| --------- | ------------------- | ------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------ |
| justify   | string              | <br>`"flex-start"`<br>`"flex-end"`<br>`"center"`<br>`"space-between"`<br>`"space-around"`<br>`"space-evenly"` | `"flex-start"` | Refers: Justify-content                                                  |
| align     | string              | <br>`"stretch"`<br>`"flex-start"`<br>`"flex-end"`<br>`"center"`<br>`"baseline"`                               | `"stretch"`    | Refers: align-items                                                      |
| direction | string              | <br>`"row"`<br>`"row-reverse"`<br>`"column"`<br>`"column-reverse"`                                            | `"row"`        | Defines the direction in which <br> the container's children are placed. |
| wrap      | string              | <br>`"nowrap"`<br>`"wrap"`<br>`"wrap-reverse"`                                                                | `"nowrap"`     | Controls whether the children should <br> wrap onto multiple lines.      |
| gap       | string              | -                                                                                                             | `"0"`          | Specifies the gap between the child elements. <br> (e.g., gap="16px").   |
| className | string              | -                                                                                                             | `undefined`    | Optional class name to add custom classes.                               |
| style     | React.CSSProperties | -                                                                                                             | `undefined`    | Optional inline styles for custom layout                                 |

## Customization

The QuickFlex component is highly customizable through props. If you need more flexibility, you can also pass additional styles or classes:

### Example with Custom Class

```js
import React from 'react';
import { QuickFlex } from 'quickflex';

const App = () => {
  return (
    <QuickFlex className="custom-flex">
      <div>Custom styled item</div>
    </QuickFlex>
  );
};

// custom.css
.custom-flex {
  background-color: lightgray;
  padding: 20px;
  border-radius: 8px;
}
```

### Example with Inline Styles

```js
<QuickFlex
  justify="center"
  align="center"
  style={{ backgroundColor: "lightblue", padding: "20px" }}
>
  <div>Inline styled item</div>
</QuickFlex>
```

## TypeScript Support

quickflex is written in TypeScript, providing full type safety and intellisense for all props.

```js
import React from "react";
import { QuickFlex } from "quickflex";

const App: React.FC = () => {
  return (
    <QuickFlex justify="center" align="center" gap="10px">
      <div>Item 1</div>
      <div>Item 2</div>
    </QuickFlex>
  );
};
```

## Development

Feel free to contribute or modify the package, just clone the repository and install dependencies:

```bash
git clone https://github.com/Khurshida-Meem/QuickFlex.git
cd QuickFlex
npm install
```

You can build the project with:

```bash
npm run build
```

## Contributing

You are welcome for any contributions and ideas! Feel free to open issues or submit pull requests. Before contributing, make sure to run the tests and ensure that everything works as expected.

- Fork the repository
- Create a new branch (git checkout -b feature/your-feature)
- Make your changes and commit them (git commit -am 'Add new feature')
- Push the branch (git push origin feature/your-feature)
- Create a pull request

## Repository

You can find the source code at: [GitHub Repo](https://github.com/Khurshida-Meem/QuickFlex).

## License

QuickFlex is [MIT licensed](./LICENSE.md).
