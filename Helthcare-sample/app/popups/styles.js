import {StyleSheet} from 'react-native';
import {
  APP_MAIN_BLUE_COLOR,
  WHITE,
  APP_MAIN_COLOR,
  PANIC_TEXT_AREA_BG,
  BLACK,
} from '../constants/Colors';

const INPUT_BOX_HEIGHT = 35;
const BUTTON_HEIGHT = 50;
const TIMESHEET_ITEM_TEXT_SIZE = 15;
const PARENT_PADDING = 20;

const styles = StyleSheet.create({
  msgPopupTitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 20,
    color: APP_MAIN_BLUE_COLOR,
  },
  msgPopupDesc: {
    fontSize: 14,
    textAlign: 'center',
    color: APP_MAIN_BLUE_COLOR,
    paddingBottom: 20,
  },
  whiteDialog: {
    backgroundColor: WHITE,
  },
  popupTextArea: {
    marginTop: 5,
    marginBottom: 10,
  },
  panicPopupDialog: {
    backgroundColor: WHITE,
  },
  panicPopupTitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 10,
    color: APP_MAIN_COLOR,
  },
  panicTextArea: {
    backgroundColor: PANIC_TEXT_AREA_BG,
    height: 70,
    marginBottom: 10,
  },
  panicCancelButton: {
    marginTop: 2,
  },
  holidayDateView: {
    height: INPUT_BOX_HEIGHT,
    borderRadius: INPUT_BOX_HEIGHT / 2,
    backgroundColor: WHITE,
  },
  holidayDiffView: {
    color: WHITE,
    textAlign: 'center',
    paddingLeft: 2,
    paddingRight: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  availableHoursDiffView: {
    color: WHITE,
    textAlign: 'center',
    paddingLeft: 3,
    paddingRight: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  holidayDiffText: {
    fontSize: 11,
  },
  dayBoxStyle: {
    flex: 1.1,
    height: INPUT_BOX_HEIGHT,
    paddingLeft: 10,
    marginRight: 5,
    backgroundColor: WHITE,
  },
  monthBoxStyle: {
    flex: 0.8,
    height: INPUT_BOX_HEIGHT,
    paddingLeft: 10,
    marginRight: 5,
    backgroundColor: WHITE,
  },
  yearBoxStyle: {
    flex: 1.1,
    paddingLeft: 10,
    height: INPUT_BOX_HEIGHT,
    backgroundColor: WHITE,
  },
  timeButtonParent: {
    marginTop: 10,
  },
  otherButtonStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: APP_MAIN_COLOR,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
  },
  badgeLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -15,
  },
  timeText: {
    color: WHITE,
    fontSize: 11,
    marginLeft: 18,
  },
  textArea: {
    flex: 1,
    height: 150,
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  flexRowTimesheet: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  planHolidayPopupInputLabel: {
    fontSize: 13,
    color: WHITE,
    minWidth: '35%',
    alignSelf: 'center',
  },
  planHolidayPopupInputBoxStyle: {
    width: '65%',
    height: INPUT_BOX_HEIGHT,
    backgroundColor: WHITE,
  },
  planHolidaySelectedDay: {
    fontSize: 10,
  },
  availableHoursSelectedDay: {
    fontSize: 11,
  },
  editInputBoxStyle: {
    height: INPUT_BOX_HEIGHT,
    backgroundColor: WHITE,
    marginBottom: 15,
  },
  editInputTextStyle: {
    color: BLACK,
    fontSize: 12,
  },
  submitForReviewBtn: {
    marginTop: 15,
  },
  availableHoursPopupDateStyle: {
    height: INPUT_BOX_HEIGHT,
    backgroundColor: WHITE,
  },
  availableHoursCalImg: {
    marginRight: 10,
  },
  kinParentView: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  kinName: {
    fontSize: 22,
    color: WHITE,
    textAlign: 'center',
  },
  kinAddressText: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 14,
    color: WHITE,
    textAlign: 'center',
  },
  kinOtherText: {
    marginTop: 20,
    fontSize: 14,
    color: WHITE,
    textAlign: 'center',
  },
  timesheetParent: {
    padding: PARENT_PADDING,
  },
  timesheetTitle: {
    color: WHITE,
    fontSize: TIMESHEET_ITEM_TEXT_SIZE,
    textAlign: 'center',
  },
  timesheetOtherText: {
    color: WHITE,
    fontSize: TIMESHEET_ITEM_TEXT_SIZE,
    marginTop: 15,
  },
  totalHours: {
    color: WHITE,
    fontSize: TIMESHEET_ITEM_TEXT_SIZE,
    marginRight: 15,
    marginTop: -20,
  },
  timeLayoutMargin: {
    marginRight: 15,
    marginLeft: 0,
  },
  dummyTimeLayoutMargin: {
    marginRight: 15,
    marginLeft: 0,
    backgroundColor: 'transparent',
  },
  timeLayoutTitlesParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  popupGroupTextNameArea: {
    height: 40,
    width: "100%",
    paddingTop: 5,
  },
  simpleDropdownStyle:{
 

  },
  PopupDropdownstyle:{
    flex:1,
    width:'100%',
    backgroundColor:'white',
    borderRadius:30,
    paddingLeft:10
  },
});

export default styles;
