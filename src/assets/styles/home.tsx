import {useMemo, memo} from 'react';
import {Platform, StyleSheet} from 'react-native';

const getStyles = () => {
  return StyleSheet.create({
    parentContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 24,
      paddingRight: 24,
      height: 80,
      backgroundColor: '#fff',
    },
    headerTextStyle: {
      color: 'rgba(0, 26, 26, 1)',
    },
    categories: {
      backgroundColor: 'rgba(230, 242, 242, 1)',
      padding: 16,
      paddingTop: 24,
      paddingBottom: 100,
    },
    categoriesSubBlockHeader: {
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 20,
      fontFamily: 'IBMPlexMono',
      marginBottom: 8,
    },
    categoryCards: {
      alignSelf: 'stretch',
      borderRadius: 8,
      padding: 24,
      flexDirection: 'row',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    blocks: {
      gap: 8,
    },
    travelGuideCard: {
      borderRadius: 8,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      alignSelf: 'stretch',
      padding: 16,
      // height: 170,
    },
    guideInfo: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      alignItems: 'flex-start',
    },
    guideInfoDetails: {
      flex: 1,
      gap: 8,
    },
    guideName: {
      fontWeight: 700,
      fontSize: 24,
      fontFamily: 'IBMPlexMono',
      // lineHeight: 20,
      color: 'rgba(0, 26, 26, 1)',
    },
    guideSubText: {
      fontFamily: 'IBMPlexMono',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 20,
      color: 'rgba(0, 26, 26, 1)',
    },
    contactBtn: {
      borderWidth: 1,
      borderColor: 'rgba(0, 128, 128, 1)',
      borderRadius: 8,
      width: 116,
      alignItems: 'center',
      paddingTop: 9,
      paddingRight: 24,
      paddingBottom: 11,
      paddingLeft: 24,
      marginTop: 8,
    },
    highlights: {
      alignSelf: 'stretch',
      paddingTop: 24,
      paddingBottom: 24,
      paddingLeft: 16,
      paddingRight: 16,
    },
    horizontalContainer: {gap: 12},
    highLightCards: {
      width: 304,
      height: 340,
      // backgroundColor: 'rgba(255, 255, 255, 1)',
      backgroundColor: 'white',
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: 'rgba(0, 128, 128, 1)',

      // // iOS shadow properties
      // shadowColor: 'rgba(0, 128, 128, 1)',
      // shadowOffset: {width: 0, height: 0},
      // shadowOpacity: 0.16,
      // shadowRadius: 16,
      // // Android shadow properties
      // elevation: 16,
    },
    cardInfoContainer: {
      padding: 18,
      gap: 8,
    },
    cardTitletext: {
      fontWeight: 700,
      fontSize: 24,
      color: 'rgba(0, 128, 128, 1)',
      fontFamily: 'IBMPlexMono',
    },
    cardSubttitletext: {
      fontFamily: 'IBMPlexMono',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 20,
      color: 'rgba(0, 26, 26, 1)',
    },
    rightBtnContainer: {
      alignSelf: 'stretch',
      alignItems: 'flex-end',
    },
    rightBtn: {
      width: 40,
      height: 40,
      borderRadius: 100,
      backgroundColor: 'rgba(230, 242, 242, 1)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    commonTextBlock: {
      marginTop: 24,
      padding: 16,
      paddingTop: 8,
    },
    longText: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'IBMPlexMono',
    },
    topCard: {
      alignSelf: 'stretch',
      borderRadius: 4,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 1,
      alignItems: 'center',
      paddingLeft: 16,
      flexDirection: 'row',
    },
    topCardLabelText: {
      flex: 1,
      color: 'rgba(0, 128, 128, 1)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'IBMPlexMono',
    },
    topImageHolder: {
      position: 'relative',
    },
    topAbsoluteTextContainer: {
      position: 'absolute',
      zIndex: 99,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    topAbsoluteText: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 56,
      fontFamily: 'IBMPlexMono',
    },
    stickyBtnContianer: {
      position: 'absolute',
      width: '100%',
      paddingLeft: 16,
      paddingRight: 16,
      bottom: 8,
    },
    stickyBtn: {
      flex: 1,
      backgroundColor: 'rgba(0, 128, 128, 1)',
      paddingTop: 9,
      paddingRight: 24,
      paddingBottom: 11,
      paddingLeft: 24,
      borderRadius: 20,
      justifyContent: 'center',
    },
    stickyText: {
      color: 'rgba(255, 255, 255, 1)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'IBMPlexMono-Bold',
      textAlign: 'center',
    },
  });
};

const useStyledComponents = () => {
  const styles = getStyles();
  return styles;
};

export default useStyledComponents;
