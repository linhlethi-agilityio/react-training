import { useState } from "react";
import { Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

const Picker = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        defaultDate={new Date(2015, 1)}
        value={value}
        onChange={setValue}
      />
    </Group>
  );
};

export { Picker };
