import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: 5,
    fontSize: 30,
    color: '#0066CC',
    fontWeight: '300',
    backgroundColor: '#fc0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  buttonList: {
    flexDirection: 'row',
  },
  loginButton: {
    backgroundColor: '#3a3a3a',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  loginButtonText: {
    fontWeight: '700',
    color: '#fc0',
  },
  registerButton: {
    backgroundColor: '#008d33',
    padding: 10,
    borderRadius: 5,
  },
  registerButtonText: {
    fontWeight: '700',
    color: '#fff',
  },
});
