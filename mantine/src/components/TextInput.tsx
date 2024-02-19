import { useDebouncedState } from "@mantine/hooks";
import { TextInput, Text } from "@mantine/core";

const Input = () => {
  const [value, setValue] = useDebouncedState("", 200);

  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </>
  );
};

export { Input };
