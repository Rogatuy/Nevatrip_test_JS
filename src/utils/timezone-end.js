import moment from 'moment';

// функция прибавляет минуты к заданному времени
const getEndData = function(date, durationInMinutes) {
  const newDate = moment(date).add(durationInMinutes, 'm').toDate();
  return newDate;
};

export {getEndData};
