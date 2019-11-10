import { StyleSheet } from 'react-native';

import COLORS from '../constants/Colors';

export default MainStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    paddingTop: 30,
  },
  blueBody: {
    flex: 1,
    backgroundColor: COLORS.mediumBlue,
    paddingTop: 30,
  },
  content: {
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    maxWidth: '100%',
  },
  gridItem: {
    width: '50%',
    maxWidth: '50%',
    padding: 5,
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  gridImage: {
    alignSelf: 'center',
    width: 50,
    height: 120,
    marginBottom: 5,
  },
  gridText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLORS.darkGrey,
    textAlign: 'center',
  },
  gridScore: {
    backgroundColor: COLORS.yellow,
    position: 'absolute',
    left: 0,
    top: 0,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  centerText: {
    textAlign: 'center',
  },
  whiteText: {
    color: '#FFF',
  },
  blueText: {
    color: COLORS.mediumBlue,
  },
  yellowText: {
    color: COLORS.yellow,
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 30,
  },
});

