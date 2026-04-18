import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Platform } from "react-native";
const { height } = Dimensions.get("window");

export const style = StyleSheet.create({

  filmesHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  filmesLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },

  cinemaCardContainer: {
    height: 145, 
    backgroundColor: '#D9D9D9',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 12,
    elevation: 3,
    overflow: 'hidden',
  },
  cinemaDetailsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    position: 'relative',
    marginRight: 10,
  },
  cinemaHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  cinemaNameText: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  partnerBadgeIcon: {
    width: 76,
    height: 40,
    marginTop: 5,
    marginRight: 5,
  },
  redDividerLine: {
    height: 2,
    width: '90%', 
    backgroundColor: '#FF0000',
    marginVertical: 1,
  },
  cinemaAddressText: {
    fontSize: 9,
    color: '#555',
    fontFamily: 'Poppins-Regular',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  cinemaDistanceText: {
    fontSize: 10,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },

  cinemaStarsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cinemaSingleStarContainer: {
    position: 'relative',
    width: 14,
    height: 14,
  },
  cinemaStarBackground: {
    color: '#0c0000', 
    fontSize: 14,
    position: 'absolute',
  },
  cinemaStarOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  cinemaStarForeground: {
    color: '#FF0000', 
    fontSize: 14,
  },

  moviesRowBottom: {
    flexDirection: 'row',
    gap: 8,
    position: 'absolute',
    bottom: 2,
    left: 100,
  },
  miniPosterImage: {
    width: 45,
    height: 60,
    borderRadius: 4,
    backgroundColor: '#000',
  },

  cinemaRightActionContainer: {
    width: 130,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainerWithButton: {
    width: 125,
    height: 100,
    position: 'relative', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  cinemaMainImageRight: {
    width: "100%",
    height: "130%",
    borderRadius: 6,
    marginTop: 5,
    backgroundColor: '#000',
    left: 10,
  },
  seeMoreBtnOverlay: {
    position: 'absolute',
    bottom: -15,           
    backgroundColor: '#B22300',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 10,          
    elevation: 5,
    left: 35,    
  },
  seeMoreBtnText: {
    color: '#FFFEB2',
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  },
  mapButtom:{
    width: 280, 
    height: 70, 
    resizeMode: 'contain' 
  }
})