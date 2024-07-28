import * as SystemUI from "expo-system-ui";
import { Input } from "@rneui/themed";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@rneui/themed";

export default () => {
  const userName = React.createRef();
  const passWord = React.createRef();

  return (
    <>
      <View style={styles.contentView}>
        <View>
          <Input
            ref={userName}
            placeholder="输入账号"
            errorStyle={{ color: "red" }}
          ></Input>
          <Input
            ref={passWord}
            placeholder="输入密码"
            errorStyle={{ color: "red" }}
          ></Input>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title="LOG IN"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});
