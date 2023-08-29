"use client";
import { Dispatch, SetStateAction } from "react";
import Select from "react-select";
const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

export default function SelectComp({
  id,
  setSelectOption,
  selectedOption,
  catagory,
}: {
  id: string;
  selectedOption: any;
  catagory: {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }[];
  setSelectOption:any;
}) {
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "white",
      maxWidth: "300px",
      minWidth: "300px",
    }),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles: any, { data }: any) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles: any, { data }: any) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles: any, { data }: any) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
    input: (styles: any) => ({ ...styles, ...dot() }),
    placeholder: (styles: any) => ({ ...styles, ...dot("#ccc") }),
    singleValue: (styles: any, { data }: any) => ({
      ...styles,
      ...dot(data.color),
    }),
  };
  const handleChange = (selectedOption: any, actionMeta: any) => {
    setSelectOption(selectedOption)
    // console.log(selectedOption);
  };


  return (
    <div className="App">
      <Select
        instanceId={id}
        defaultValue={selectedOption}
        onChange={handleChange}
        options={catagory}
        isClearable={true}
        styles={colorStyles}
        placeholder={"Select Category"}
      />
    </div>
  );
}
