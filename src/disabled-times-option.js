import { nameDirection } from './const';
import { allTimesOption } from './create-times-option';

const mainSelect = document.querySelector('#route');
const timeSelect = document.querySelector('#time');
const allOptionTime = timeSelect.getElementsByTagName('option');

const sectionTimeBack = document.querySelector('.time-back');
const timeBackSelect = sectionTimeBack.querySelector('#time-back');
const allOptiontimeBack = timeBackSelect.getElementsByTagName('option');


const blockAtoBOption = function() {
  for (let i = 0; i < allOptionTime.length; i++) {
    const optionDirection = `${allOptionTime[i].value[0]}${allOptionTime[i].value[1]}`;
    const direction = optionDirection.toString();
    if (direction === nameDirection.fromBtoA) {
      allOptionTime[i].selected = true;
      break;
    }
  }
  for (let i = 0; i < allOptionTime.length; i++) {
    const optionDirection = `${allOptionTime[i].value[0]}${allOptionTime[i].value[1]}`;
    const direction = optionDirection.toString();
    if (direction !== nameDirection.fromBtoA) {
      allOptionTime[i].disabled = true;
    } else {
      allOptionTime[i].disabled = false;
    }
  }
};

const blockBtoAOption = function() {
  for (let i = 0; i < allOptionTime.length; i++) {
    const optionDirection = `${allOptionTime[i].value[0]}${allOptionTime[i].value[1]}`;
    const direction = optionDirection.toString();
    if (direction === nameDirection.fromAtoB) {
      allOptionTime[i].selected = true;
      break;
    }
  }
  for (let i = 0; i < allOptionTime.length; i++) {
    const optionDirection = `${allOptionTime[i].value[0]}${allOptionTime[i].value[1]}`;
    const direction = optionDirection.toString();
    if (direction !== nameDirection.fromAtoB) {
      allOptionTime[i].disabled = true;
    } else {
      allOptionTime[i].disabled = false;
    }
  }
};

const removeDisableTimeBack = function() {
  for (let i = 0; i < allOptiontimeBack.length; i++) {
    allOptiontimeBack[i].disabled = false;
  }
};

const blockTimesInBtoA = function(idtarget) {
  let timeEndTarget;
  for (let i = 0; i < allTimesOption.length; i++ ) {
    if (idtarget === allTimesOption[i].id) {
      timeEndTarget = allTimesOption[i].dataLocalEnd;
      break;
    }
  }

  for (let i = 0; i < allOptiontimeBack.length; i++) {
    const idOption = allOptiontimeBack[i].id;
    const targetObject = allTimesOption.find((element) => (element.id === idOption));
    const dataTargetObject = targetObject.dataLocalStart;
    if (dataTargetObject >= timeEndTarget) {
      allOptiontimeBack[i].selected = true;
      break;
    }
  }

  for (let i = 0; i < allOptiontimeBack.length; i++) {
    const idOption = allOptiontimeBack[i].id;
    const targetObject = allTimesOption.find((element) => (element.id === idOption));
    const dataTargetObject = targetObject.dataLocalStart;

    if (dataTargetObject < timeEndTarget) {
      allOptiontimeBack[i].disabled = true;
    } else {
      allOptiontimeBack[i].disabled = false;
    }
  }

};

mainSelect.addEventListener('change', function() {
  const optionValue = this.value;
  if (optionValue === nameDirection.fromBtoA) {
    blockAtoBOption();
    sectionTimeBack.classList.add('visually-hidden');
  }

  if (optionValue === nameDirection.fromAtoB) {
    blockBtoAOption();
    sectionTimeBack.classList.add('visually-hidden');
  }

  if (optionValue === nameDirection.formAtoBthenA) {
    blockBtoAOption();
    removeDisableTimeBack();
    sectionTimeBack.classList.remove('visually-hidden');
  }
});

timeSelect.addEventListener('change', function() {
  if (mainSelect.value === 'ABA') {
    const optionValue = this.value;
    const optionObject = allTimesOption.find((element) => {
      const elementValue = `${element.direction} ${element.dataOption}`;
      if (elementValue === optionValue) {
        return element;
      }
    });
    blockTimesInBtoA(optionObject.id);
  }
});
