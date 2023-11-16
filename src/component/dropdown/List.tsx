type Props = {
  filteredList: string[];
  setQuery: (item: string) => void;
  getSelectedValue?: (selectedValue: string) => void;
  placeholder?: string;
};

export const List = ({
  filteredList,
  setQuery,
  getSelectedValue,
  placeholder = "No items found",
}: Props) => (
  <div className="absolute w-full top-11 border rounded-md max-h-[300px] overflow-x-auto">
    <ul role="listbox">
      {filteredList.map((item) => (
        <li
          key={item}
          className="px-2 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            setQuery(item);
            getSelectedValue?.(item);
          }}
          role="option"
        >
          {item}
        </li>
      ))}
      {filteredList.length === 0 && (
        <li className="px-2 py-2" role="option">
          {placeholder}
        </li>
      )}
    </ul>
  </div>
);
