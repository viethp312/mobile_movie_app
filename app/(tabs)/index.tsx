import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1">
      <Text className="text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/">
        <Text>Onboarding</Text>
      </Link>
    </View>
  );
}
