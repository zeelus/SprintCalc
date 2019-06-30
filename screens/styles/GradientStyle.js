import {StyleSheet} from "react-native";

export default StyleSheet.create({
  welcome: {
    position: 'absolute',
    top: 50,
    fontSize: 50,
    fontStyle: 'italic',
    fontFamily: 'Roboto-Italic',
    color: "#FFFFFF"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
  },
  button: {
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: 'Roboto-Regular'
  },
  buttonView: {
    width: 200,
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#00C9A7',
    borderRadius: 30,
    margin: 10
  },
  buttonView2: {
    width: 200,
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#845EC2',
    borderRadius: 30,
    margin: 10
  }
});
