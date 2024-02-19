import { useState } from "react";
import { YearPickerInput } from "@mantine/dates";

const YearInput = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
};

export { YearInput };
