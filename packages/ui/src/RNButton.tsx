/** @jsxImportSource nativewind */
import { Text, TouchableHighlight, View } from "react-native";

export const RNButton = () => {
  return (
    <TouchableHighlight
      className="rounded-md overflow-hidden"
      onPress={() => alert("Hello NativeWind!")}
    >
      <View className="bg-blue-500 dark:bg-red-500 text-white px-4 py-2">
        <Text className="text-center text-2xl font-bold">
          Hello NativeWind!
        </Text>
      </View>
    </TouchableHighlight>
  );
};
