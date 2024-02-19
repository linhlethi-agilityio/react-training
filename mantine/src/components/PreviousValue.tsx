import { TextInput, Text } from "@mantine/core";
import { usePrevious, useInputState } from "@mantine/hooks";

const PreviousValue = () => {
  const [value, setValue] = useInputState("");
  const previousValue = usePrevious(value);

  return (
    <div>
      <TextInput
        label="Enter some text here"
        placeholder="Enter some text here"
        id="previous-demo-input"
        value={value}
        onChange={setValue}
      />
      <Text mt="md">Current value: {value}</Text>
      <Text>Previous value: {previousValue}</Text>
    </div>
  );
};

export { PreviousValue };
