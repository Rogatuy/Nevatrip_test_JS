import dayjs from 'dayjs';
import { TIMES_AB, TIMES_BA, TIME_DURATION_MINUTES } from './const';
import { getLocalData } from './utils/timezone-diff';
import { getEndData } from './utils/timezone-end';

const allTimesOption = [];


const minDateToBack = getEndData(getLocalData(TIMES_AB[0]), TIME_DURATION_MINUTES);


for (let i = 0; i < TIMES_AB.length; i++) {
  const dataLocalStart = getLocalData(TIMES_AB[i]);
  const dataLocalEnd = getEndData(dataLocalStart,TIME_DURATION_MINUTES);
  const dataOption = dayjs(dataLocalStart).format('HH:mm');
  const direction = 'AB';
  const id = `time${i}`;
  allTimesOption.push({id: id, dataEvent: new Date(TIMES_AB[i]), dataLocalStart: dataLocalStart, dataLocalEnd: dataLocalEnd, dataOption: dataOption, direction: direction});
}

for (let i = 0; i < TIMES_BA.length; i++) {
  const dataLocalStart = getLocalData(TIMES_BA[i]);
  const dataLocalEnd = getEndData(dataLocalStart,TIME_DURATION_MINUTES);
  const dataOption = dayjs(dataLocalStart).format('HH:mm');
  const direction = 'BA';
  const id = `time-back${i}`;
  allTimesOption.push({id: id, dataEvent: new Date(TIMES_BA[i]), dataLocalStart: dataLocalStart, dataLocalEnd: dataLocalEnd, dataOption: dataOption, direction: direction});
}

// формируем все option с корректным временем

const selectTimes = document.querySelector('#time');
for (let i = 0; i < allTimesOption.length; i++) {
  const newOption = document.createElement('OPTION');
  newOption.value = `${allTimesOption[i].direction } ${allTimesOption[i].dataOption}`;
  newOption.text = `${allTimesOption[i].dataOption }(из ${allTimesOption[i].direction[0] } в ${allTimesOption[i].direction[1]})`;
  newOption.id = allTimesOption[i].id;

  if(allTimesOption[i].direction === 'BA') {
    newOption.disabled = true;

  }
  selectTimes.appendChild(newOption);
}

const newSelect = document.createElement('SELECT');
newSelect.name = 'time-back';
newSelect.id = 'time-back';
const sectionForSelect = document.querySelector('.time-back');
sectionForSelect.appendChild(newSelect);
const selectTimesBack = sectionForSelect.querySelector('#time-back');

for (let i = 0; i < allTimesOption.length; i++) {
  if(allTimesOption[i].direction === 'BA' && allTimesOption[i].dataLocalStart >= minDateToBack) {
    const newOption = document.createElement('OPTION');
    newOption.value = `${allTimesOption[i].direction } ${allTimesOption[i].dataOption}`;
    newOption.text = `${allTimesOption[i].dataOption }(из ${allTimesOption[i].direction[0] } в ${allTimesOption[i].direction[1]})`;
    newOption.id = allTimesOption[i].id;
    selectTimesBack.appendChild(newOption);
  }
}

export {allTimesOption};
