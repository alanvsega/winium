import { StyleSheet } from 'react-native';

import COLORS from '../constants/Colors';

export default MainStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    paddingTop: 35,
    paddingBottom: 65,
  },
  blueBody: {
    flex: 1,
    backgroundColor: COLORS.mediumBlue,
    paddingTop: 35,
    paddingBottom: 65,
  },
  content: {
    paddingHorizontal: 15,
  },
  centerView: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  row: {
    flexDirection: 'row',
    maxWidth: '100%',
  },
  darkTitle: {
    fontWeight: 'bold',
    fontSize: 21,
    color: COLORS.darkGrey,
    textAlign: 'center',
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
  leftText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.darkGrey,
    textAlign: 'left',
  },
  gridText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.darkGrey,
    textAlign: 'center',
  },
  gridText2: {
    fontSize: 14,
    color: COLORS.darkGrey,
    textAlign: 'center',
  },
  gridText3: {
    fontSize: 13,
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
  fullPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.mediumBlue,
  },
  detailsItem: {
    width: '100%',
    maxWidth: '100%',
    padding: 5,
    marginTop: 10,
    backgroundColor: COLORS.mediumBlue,
  },
  detailsScore: {
    backgroundColor: COLORS.yellow,
    position: 'absolute',
    left: 15,
    top: 15,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  detailsImage: {
    alignSelf: 'center',
    width: 100,
    height: 240,
    marginBottom: 5,
  },
  detailsText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
  },
  detailsText2: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  detailsText3: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  reviews: {
    width: '100%',
    maxWidth: '100%',
    padding: 5,
    marginTop: 10,
    backgroundColor: '#FFF',
  },
});

