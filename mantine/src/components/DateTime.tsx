import { DateTimePicker } from "@mantine/dates";

const DateTime = () => {
  return (
    <DateTimePicker
      withSeconds
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
  );
};

export { DateTime };
