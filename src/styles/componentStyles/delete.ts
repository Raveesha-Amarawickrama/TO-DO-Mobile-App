import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    width: '75%',
    borderTopWidth: 4,
    borderTopColor: '#A35709',
    zIndex: 999,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  yesButton: {
    borderWidth: 1,
    borderColor: '#A35709',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  noButton: {
    borderWidth: 1,
    borderColor: '#FF8303',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  yesText: {
    color: '#D9D9D9',
    fontWeight: 'bold',
  },
  noText: {
    color: '#D9D9D9',
  },
});

export default styles;