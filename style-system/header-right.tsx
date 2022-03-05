import type { HeaderButtonProps } from "@react-navigation/elements";
import * as React from "react";
import { Alert, Image, Pressable, StyleSheet } from "react-native";
import { getAvatarSource } from "../features/profile/data";
import Box from "../style-system/box";

const styles = StyleSheet.create({
  avatar: { borderRadius: 20 }
});
const avatarSource = getAvatarSource();

function HeaderRight({ pressOpacity }: HeaderButtonProps): JSX.Element {
  function handlePress(): void {
    Alert.alert("Go to profile screen");
  }

  return (
    <Pressable onPress={handlePress}>
      {({ pressed }): JSX.Element => (
        <Box marginRight="m" opacity={pressed ? pressOpacity : 1}>
          <Image
            source={avatarSource}
            width={45}
            height={45}
            style={styles.avatar}
          />
        </Box>
      )}
    </Pressable>
  );
}

export default HeaderRight;