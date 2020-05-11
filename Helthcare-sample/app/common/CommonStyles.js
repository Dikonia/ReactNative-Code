import {StyleSheet} from 'react-native';
import {
  LIGHT_GREEN,
  APP_LIGHT_BLUE_COLOR,
  APP_MAIN_COLOR,
  BLACK,
  WHITE,
  LIGHTEST_GRAY,
  RED,
  APP_MAIN_BLUE_COLOR,
  DARK_GRAY,
} from '../constants/Colors';
import {
  ITEM_MARGIN_LEFT_RIGHT,
  SCREEN_ITEMS_MARGIN_LEFT_RIGHT,
  NOTIFICATION_LAYOUT_TITLE_TEXT,
  NOTIFICATION_DATE_TEXT,
  APP_COMMON_BORDER_RADIUS,
} from '../constants/Const';

const BADGE_WIDTH_HEIGHT = 8;
const INPUT_BOX_HEIGHT = 40;
const BUTTON_HEIGHT = 50;
const USER_IMAGE_SIZE = 50;
const ADD_NOTE_BTN = 40;
const NOTES_TEXT_PADDING = 25;
const YES_NO_BTN_MARGIN = 15;
const PARENT_PADDING = 20;
const USER_ROW_PADDING = 10;
const ADD_NEW_APPOINTMENT_TEXT_SIZE = 12;
const MENU_IMAGE_SIZE = 20;
const BUTTON_GROUP_CONTAINER_HEIGHT = 42;

const CommonStyles = StyleSheet.create({
  ketboardAvoidingContainer: {
    flex: 1,
  },
  screenBGImage: {
    width: '100%',
    height: '100%',
  },
  authScreensParent: {
    flex: 1,
    marginLeft: ITEM_MARGIN_LEFT_RIGHT,
    marginRight: ITEM_MARGIN_LEFT_RIGHT,
    justifyContent: 'center',
  },
  scroll: {flexGrow: 1},
  authScreensLogo: {
    width: 326,
    alignSelf: 'center',
    height: 112,
    marginTop: 30,
    marginBottom: 30,
  },
  otherScreensParent: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginLeft: SCREEN_ITEMS_MARGIN_LEFT_RIGHT,
    marginRight: SCREEN_ITEMS_MARGIN_LEFT_RIGHT,
    marginTop: SCREEN_ITEMS_MARGIN_LEFT_RIGHT,
  },
  badgeElement: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: LIGHT_GREEN,
    borderWidth: 0,
    width: BADGE_WIDTH_HEIGHT,
    height: BADGE_WIDTH_HEIGHT,
    borderRadius: BADGE_WIDTH_HEIGHT / 2,
  },
  startTime: {
    marginRight: 5,
  },
  endTime: {
    marginLeft: 5,
    backgroundColor: APP_LIGHT_BLUE_COLOR,
  },
  totalTime: {
    marginLeft: 5,
    backgroundColor: WHITE,
  },
  notificationTitleText: {
    fontSize: NOTIFICATION_LAYOUT_TITLE_TEXT,
    color: APP_MAIN_BLUE_COLOR,
    flex: 1,
    marginRight: 10,
  },
  notificationDateText: {
    fontSize: NOTIFICATION_DATE_TEXT,
    color: BLACK,
  },
  notificationBadgeLayout: {
    marginTop: 7,
  },
  errorMessage: {
    fontSize: 16,
    color: APP_MAIN_COLOR,
  },
  addPopupInputLayoutParent: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  addPopupNotesLayoutParent: {
    width: '100%',
    marginBottom: 20,
  },
  addPopupBadgeLayout: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
  },
  addPopupBadgeTitle: {
    fontSize: 14,
    color: WHITE,
    marginRight: 10,
  },
  addPopupInputLabel: {
    fontSize: 13,
    color: WHITE,
    minWidth: '30%',
    alignSelf: 'center',
  },
  addPopupInputBoxStyle: {
    width: '70%',
    height: INPUT_BOX_HEIGHT,
  },
  addPopupButtonStyle: {
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: APP_MAIN_COLOR,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
  },
  dangerButtonStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: RED,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
  },
  addPopupParent: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    paddingTop: 10,
  },
  addPopupNoteText: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  userImage: {
    width: USER_IMAGE_SIZE,
    height: USER_IMAGE_SIZE,
    marginRight: 10,
    borderRadius: USER_IMAGE_SIZE / 2,
    borderWidth: 1,
    borderColor: APP_MAIN_BLUE_COLOR,
  },
  shadowLayout: {
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: ADD_NOTE_BTN / 2,
    flex: 1,
    shadowColor: LIGHTEST_GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    elevation: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: NOTES_TEXT_PADDING,
  },
  nurseAppotNotesAndOtherText: {
    fontSize: 12,
    color: APP_MAIN_BLUE_COLOR,
    paddingTop: 3,
    paddingBottom: 3,
  },
  buttonNo: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    backgroundColor: APP_MAIN_BLUE_COLOR,
    alignSelf: 'center',
    marginRight: YES_NO_BTN_MARGIN,
    flex: 1,
  },
  buttonYes: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    alignSelf: 'center',
    marginLeft: YES_NO_BTN_MARGIN,
    flex: 1,
    backgroundColor: APP_MAIN_COLOR,
  },
  yesNoBtnText: {
    color: WHITE,
  },
  editDetailsButtonStyle: {
    backgroundColor: APP_MAIN_BLUE_COLOR,
    marginTop: 10,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
  },
  completeAppointmentBtn: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    marginTop: 5,
    backgroundColor: APP_MAIN_COLOR,
  },
  notificationScreenHeaderStyle: {
    fontSize: 13,
  },
  greenButtonText: {
    color: WHITE,
  },
  appointmentRowParent: {
    backgroundColor: WHITE,
    borderRadius: APP_COMMON_BORDER_RADIUS,
    minHeight: 140,
    paddingLeft: PARENT_PADDING,
    paddingRight: PARENT_PADDING,
    marginBottom: 20,
  },
  appointmentUserRow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  appointmentUserImage: {
    width: USER_IMAGE_SIZE,
    height: USER_IMAGE_SIZE,
    marginRight: 10,
    borderRadius: USER_IMAGE_SIZE / 2,
    borderWidth: 1,
    borderColor: APP_MAIN_BLUE_COLOR,
  },
  appointmentPatientName: {
    fontSize: 16,
    color: APP_MAIN_BLUE_COLOR,
  },
  appointmentMedicationTypeAndTime: {
    fontSize: 12,
    color: DARK_GRAY,
  },
  appointmentButtonStyle: {
    backgroundColor: APP_MAIN_COLOR,
    marginTop: 20,
    marginBottom: 15,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
  },
  apptDetailsUserRow: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    paddingLeft: 30,
    paddingRight: USER_ROW_PADDING,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: USER_ROW_PADDING,
    paddingBottom: USER_ROW_PADDING,
  },
  addImage: {
    width: ADD_NEW_APPOINTMENT_TEXT_SIZE,
    height: ADD_NEW_APPOINTMENT_TEXT_SIZE,
    marginRight: 5,
  },
  addAppointmentText: {
    color: APP_MAIN_BLUE_COLOR,
    fontSize: ADD_NEW_APPOINTMENT_TEXT_SIZE,
  },
  menuImage: {
    width: MENU_IMAGE_SIZE,
    height: MENU_IMAGE_SIZE,
  },
  noMarginLeftRight: {
    marginLeft: 0,
    marginRight: 0,
  },
  flexRowNoMargin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonGroupParent: {
    backgroundColor: WHITE,
    borderRadius: BUTTON_GROUP_CONTAINER_HEIGHT / 2,
    height: BUTTON_GROUP_CONTAINER_HEIGHT,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  buttonGroupContainer: {
    height: BUTTON_GROUP_CONTAINER_HEIGHT,
    backgroundColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 0,
  },
  buttonGroupDefault: {
    backgroundColor: 'transparent',
  },
  buttonGroupSelected: {
    backgroundColor: APP_MAIN_COLOR,
    borderWidth: 1,
    borderColor: WHITE,
    shadowColor: BLACK,
    borderRadius: BUTTON_GROUP_CONTAINER_HEIGHT / 2,
    shadowRadius: APP_COMMON_BORDER_RADIUS - 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    elevation: 2,
    marginLeft: 2,
    marginRight: 2,
  },
  buttonGroupTextStyle: {
    color: APP_MAIN_COLOR,
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonGroupTextApptDetails: {
    color: APP_MAIN_COLOR,
    fontSize: 10,
    fontWeight: 'bold',
  },
  buttonGroupInnerBorderStyle: {
    width: 0,
  },
  inputBoxTextCenter: {
    textAlign: 'center',
  },
  errorMessageHome: {
    fontSize: 16,
    color: 'white',
  },
});

export default CommonStyles;
