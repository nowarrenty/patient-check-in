import Image from "next/image";
import doneSVG from "../public/done.svg";
import { useController, Control } from "react-hook-form";
import { useState } from "react";
import { CheckListProps } from "../types";

const CheckList = ({
  options,
  control,
  name,
  tailwind,
  required,
}: CheckListProps) => {
  const { field } = useController({
    control,
    name,
    rules: { required: required || false },
  });
  const [value, setValue] = useState(field.value || []);
  const [checkedItems, setCheckedItems] = useState(
    options.map((option) => value.includes(option))
  );

  const labelCSS = `flex items-center rounded-lg h-12 text-sm indent-4 font-normal`;
  return (
    <div className={`flex flex-col space-y-3 h-full ${tailwind || ""}`}>
      {options.map((option, index) => {
        return (
          <label
            key={option}
            className={
              checkedItems[index]
                ? `${labelCSS} bg-blue-800 border-2 border-blue-700 text-white`
                : `${labelCSS} bg-white`
            }
          >
            {option}
            <div className="flex items-center grow justify-end relative">
              <input
                type="checkbox"
                checked={checkedItems[index]}
                value={option}
                onChange={(e) => {
                  const valueSet = new Set(value);

                  const clickedValue = e.target.value;
                  if (valueSet.has(clickedValue)) {
                    valueSet.delete(clickedValue);
                  } else {
                    valueSet.add(clickedValue);
                  }

                  const checkedItemsCopy = [...checkedItems];
                  checkedItemsCopy[index] = !checkedItemsCopy[index];

                  // send data to react hook form
                  field.onChange(Array.from(valueSet));

                  // update local state
                  setValue(Array.from(valueSet));
                  setCheckedItems(checkedItemsCopy);
                }}
                className={`appearance-none h-6 w-6 mr-3`}
              />

              <span className="absolute right-4">
                <Image
                  src={doneSVG}
                  alt="Done check mark"
                  className={`${!checkedItems[index] && "opacity-0"}`}
                />
              </span>
            </div>
          </label>
        );
      })}
    </div>
  );
};

export { CheckList };
