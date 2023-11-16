# Simple React Dropdown

A simple, easy-to-use dropdown component for React applications.

## Features

- **Customizable**: The dropdown list is fully customizable. You can pass in your own list of strings to be displayed as options in the dropdown.
- **Accessible**: The dropdown component is built with accessibility in mind. It includes ARIA roles and attributes.
- **Lightweight**: The component is lightweight and has minimal dependencies, making it a fast and efficient choice for any React application.
- **Easy to Use**: The component is easy to use and integrate into your existing React application. Just import the component, pass in your list, and you're good to go.
- **Interactive**: The dropdown list provides an interactive user experience. It opens when clicked, and closes when an option is selected or when clicked outside.
- **Filterable**: The dropdown includes a filter functionality. When the user types into the input, the list of options is filtered based on the input.
- **Modern Styling**: The component uses Tailwind CSS for modern, sleek styling that fits into any application design.


## Props

The Dropdown component accepts the following props:

- `list`: An array of strings that will be the options in the dropdown.
- `setQuery`: A function that sets the selected option.
- `getSelectedValue`: An optional function that gets the selected value.
- `placeholder`: An optional string that sets a placeholder when the list is empty.

Here's an example of how to use these props:

```jsx
<Dropdown
  list={['Option 1', 'Option 2', 'Option 3']}
  setQuery={setQuery}
  getSelectedValue={getSelectedValue}
  placeholder="No items found"
/>

## Installation

Install the package using npm:

```bash
npm install simple-react-dropdown