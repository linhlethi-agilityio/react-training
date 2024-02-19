import { useState } from "react";
import { ActionIcon, Group, ColorSwatch, Text } from "@mantine/core";
import { IconColorPicker } from "@tabler/icons-react";
import { useEyeDropper } from "@mantine/hooks";

function Dropper() {
  const [color, setColor] = useState("");
  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    const { sRGBHex } = await open();
    setColor(sRGBHex);
  };

  if (!supported) {
    return (
      <Text ta="center">EyeDropper API is not supported in your browser</Text>
    );
  }

  return (
    <Group>
      <ActionIcon variant="default" onClick={pickColor}>
        <IconColorPicker size="1rem" stroke={1.5} />
      </ActionIcon>
      {color ? (
        <Group spacing="xs">
          <ColorSwatch color={color} />
          <Text>Picked color: {color}</Text>
        </Group>
      ) : (
        <Text>Click the button to pick color</Text>
      )}
    </Group>
  );
}

export { Dropper };
