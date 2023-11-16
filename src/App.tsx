import { Dropdown } from "./component/dropdown";

const fruites = [
  "Apple",
  "Banana",
  "Orange",
  "Pineapple",
  "Grapes",
  "Watermelon",
  "Strawberry",
  "Cherry",
  "Peach",
  "Pear",
  "Papaya",
  "Guava",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Lime",
  "Lychee",
  "Mandarin",
  "Mango",
  "Melon",
  "Olive",
  "Pomegranate",
  "Raspberry",
  "Tomato",
];

function App() {
  return (
    <Dropdown
      list={fruites}
      defaultValue={fruites[0]}
      getSelectedValue={(value) => console.log(value)}
      isSearchable
    />
  );
}

export default App;
