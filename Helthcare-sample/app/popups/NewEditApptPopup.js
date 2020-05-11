'use strict';

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {View, ScrollView} from 'react-native';
import BaseDialog from '../components/BaseDialog';
import {Badge} from 'react-native-elements';
import BoldText from '../components/BoldText';
import ButtonDefault from '../components/ButtonDefault';
import DateAndTimePicker from '../components/DateAndTimePicker';
import InputBox from '../components/InputBox';
import SimpleDropdown from '../components/SimpleDropdown';
import {formatAMPM, format24} from '../util/utils';
import Toast from 'react-native-simple-toast';
import CommonStyles from '../common/CommonStyles';
import moment from 'moment';
import styles from './styles';
import {addAppointment, getPatientList} from '../redux/reducers/patient';
import { showErrorPopup } from '../util/utils';
import StoreDB from '../storage/StoreDB';
import OverlaySpinner from '../components/OverlaySpinner';
import {WHITE} from '../constants/Colors';

class NewEditApptPopup extends PureComponent {
  static defaultProps = {
    isVisible: false,
    isEdit: false,
    editDetails: {},
  };

  state = {
    isShow: false,
    appointmentDay: '',
    appointmentMonth: '',
    appointmentYear: '',
    startTime: '',
    endTime: '',
    userName: '',
    id: '',
    showLoading: false,
    patientList: [],
    currentSelectedPatient: 0,
    dropdownPlaceHolder: 'Select Patient'
  };

  componentDidMount() {
    this.init();
    
  }

  componentDidUpdate(prevProps, prevState) {
    const {editDetails} = this.props;
    if (prevProps.editDetails !== editDetails) {
      this.updateDefaultValues();
    }
  }

  updateDefaultValues = () => {
    const {editDetails} = this.props;
    let startTime = moment(editDetails.startTime);
    let endTime = moment(editDetails.endTime);
    this.setState({
      appointmentDay: startTime.get('date'),
      appointmentMonth: startTime.get('month') + 1,
      appointmentYear: startTime.get('year'),
      startTime: startTime.toDate(),
      endTime: endTime.toDate(),
    });
  };

  handleStartTime = date => {
    this.setState({startTime: date});
  };

  handleEndTime = date => {
    this.setState({endTime: date});
  };

  async init() {
    const userData = await StoreDB.loggedInUserData();
    this.setState({
      userName: userData.name,
      id: userData.id,
    });
    this.readPatientList();
  }

  readPatientList = () => {
    this.setState({showLoading: true});
    this.props
      .getPatientList()
      .then((response) => {
        this.setState({showLoading: false});
        this.prepareListData(response.data);
      })
      .catch(error => {
        console.log("Error: " + error);
      });
  };

  prepareListData = (patientIdList) => {
    let userList = [];
    let patientName = '';
    if (patientIdList) {
      patientIdList.map((item, index) => {
        if (!patientName) {
          patientName = item.first_name;  
        }
        userList.push(item.first_name); 
      });
      this.setState({patientList: userList, dropdownPlaceHolder: patientName});
    }
  };

  addAppointment = () => {
    const {currentSelectedPatient} = this.state;
    let patientObj = this.props.patientIdList[currentSelectedPatient];
    const name = patientObj.first_name;
    const patient_id = patientObj.id;
    const {
      appointmentDay,
      appointmentMonth,
      appointmentYear,
      startTime,
      endTime,
    } = this.state;
    if (!appointmentDay) {
      Toast.show('Please enter Appointment Day');
    } else if (!appointmentMonth) {
      Toast.show('Please enter Appointment Month');
    } else if (!appointmentYear) {
      Toast.show('Please enter Appointment Year');
    } else if (!startTime) {
      Toast.show('Please enter Appointment Start Time');
    } else if (!endTime) {
      Toast.show('Please enter Appointment End Time');
    } else if (endTime.getTime() <= startTime.getTime()) {
      Toast.show('Appointment End Time should be grater than Start Time');
    } else {
      this.setState({showLoading: true});
      const sTime = format24(startTime);
      const eTime = format24(endTime);
      const startDate = appointmentYear + '-' + appointmentMonth + '-' + appointmentDay + ' ' + sTime ;
      const endtDate = appointmentYear + '-' + appointmentMonth + '-' + appointmentDay + ' ' + eTime ;
      this.props
        .addAppointment(name, patient_id, '' ,startDate, endtDate)
        .then(response => {
          if (response.code === 200) {
            Toast.show('Appointment added successfully');
          } else {
            Toast.show(response.message);
          }
          this.setState({showLoading: false});
          this.props.dismissDialog();
        })
        .catch(error => {
          this.setState({ showLoading: false });
          this.props.dismissDialog();
          if (error.code === 'unauthorized') {
            showErrorPopup(
              "Couldn't validate those credentials.\nPlease try again",
            );
          } else {
            showErrorPopup(
              'There was an unexpected error.\nPlease wait a few minutes and try again.',
            );
          }
        });
    }
  };

  selectPatient = (patientIndex) => {
    this.setState({currentSelectedPatient: patientIndex});
  }

  handleDismissDialog = () => {
    this.setState({startTime: '', endTime: ''});
    this.props.dismissDialog();
  };

  render() {
   
    const {isVisible, isEdit} = this.props;
    const {
      startTime,
      endTime,
      appointmentDay,
      appointmentMonth,
      appointmentYear,
      showLoading,
      patientList,
      dropdownPlaceHolder
    } = this.state;
    let isShowPatientDropDown = false;
    if (patientList.length != 1) {
      isShowPatientDropDown = true;
      
    }
    return (
      <BaseDialog onClose={this.handleDismissDialog} visible={isVisible}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={CommonStyles.addPopupParent}>
            <View style={CommonStyles.addPopupBadgeLayout}>
              <Badge badgeStyle={CommonStyles.badgeElement} />
              <BoldText style={CommonStyles.addPopupBadgeTitle}>
                {isEdit ? 'Edit Appointment' : 'Add New Appointment'}
              </BoldText>
            </View>
            {isShowPatientDropDown && (
              <View style={CommonStyles.addPopupInputLayoutParent}>
                <BoldText style={CommonStyles.addPopupInputLabel}>
                  Patient
                </BoldText>
                <View style={styles.PopupDropdownstyle}>
                <SimpleDropdown
                  onSelect={this.selectPatient}
                  placeHolder={dropdownPlaceHolder}
                  drowdownArray={patientList}
                  style={styles.simpleDropdownStyle}
                  textStyle={styles.nurseAppotNotesAndOtherText}
                  
                />
                </View>
              </View>
            )}
            <View style={CommonStyles.addPopupInputLayoutParent}>
              <BoldText style={CommonStyles.addPopupInputLabel}>Date</BoldText>
              <InputBox
                onChangeText={text => this.setState({appointmentDay: text})}
                maxLength={2}
                keyboardType="numeric"
                placeHolder=""
                value={'' + appointmentDay}
                boxStyle={styles.dayBoxStyle}
                inputStyle={CommonStyles.inputBoxTextCenter}
              />
              <InputBox
                onChangeText={text => this.setState({appointmentMonth: text})}
                maxLength={2}
                keyboardType="numeric"
                placeHolder=""
                value={'' + appointmentMonth}
                boxStyle={styles.monthBoxStyle}
                inputStyle={CommonStyles.inputBoxTextCenter}
              />
              <InputBox
                onChangeText={text => this.setState({appointmentYear: text})}
                maxLength={4}
                keyboardType="numeric"
                placeHolder=""
                value={'' + appointmentYear}
                boxStyle={styles.yearBoxStyle}
                inputStyle={CommonStyles.inputBoxTextCenter}
              />
            </View>
            <View style={CommonStyles.addPopupInputLayoutParent}>
              <BoldText style={CommonStyles.addPopupInputLabel}>Time</BoldText>
              <DateAndTimePicker
                value={startTime ? startTime : new Date()}
                time={startTime ? formatAMPM(startTime) : ''}
                dateChanged={this.handleStartTime}
                style={CommonStyles.startTime}
                label="Start Time"
              />
              <DateAndTimePicker
                value={endTime ? endTime : new Date()}
                time={endTime ? formatAMPM(endTime) : ''}
                dateChanged={this.handleEndTime}
                style={CommonStyles.endTime}
                label="Finish Time"
              />
            </View>
            <OverlaySpinner
              cancelable
              visible={showLoading}
              color={WHITE}
              textContent="Please wait..."
              textStyle={{ color: WHITE }}
            />
            <ButtonDefault
              onPress={this.addAppointment}
              textStyle={CommonStyles.greenButtonText}
              style={CommonStyles.addPopupButtonStyle}>
              {isEdit ? 'Submit' : 'Add Appointment'}
            </ButtonDefault>
          </View>
        </ScrollView>
      </BaseDialog>
    );
  }
}

const mapStateToProps = ({patient: {patientIdList}}) => ({
  patientIdList
});
const mapDispatchToProps = {
  addAppointment,
  getPatientList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewEditApptPopup);
