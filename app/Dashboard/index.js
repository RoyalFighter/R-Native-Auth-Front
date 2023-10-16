import { View, Text } from "react-native";
import React, { useContext } from "react";
import GlobalContext from "../../GlobalContext";
import text from "../../components/text";

const index = () => {
  const { loginRes, loading } = useContext(GlobalContext);
  return (
    <View className="flex-1 flex-row justify-center items-center">
      <Text className="font-bold text-5xl">
  hello brother,{loginRes ? loginRes.name : null}!
  
      </Text>
    </View>
  );
};

export default index;
