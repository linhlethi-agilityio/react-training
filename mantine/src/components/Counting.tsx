import { useState, useEffect } from "react";
import { useInterval } from "@mantine/hooks";
import { Stack, Button, Text } from "@mantine/core";

const Counting = () => {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>
        Page loaded <b>{seconds}</b> seconds ago
      </Text>
      <Button
        onClick={interval.toggle}
        color={interval.active ? "red" : "teal"}
        variant="outline"
      >
        {interval.active ? "Stop" : "Start"} counting
      </Button>
    </Stack>
  );
};

export { Counting };
