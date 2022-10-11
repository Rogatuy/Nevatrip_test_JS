import moment from 'moment';

const todayDate = new Date();

// функция переводит время поездки из исходных данных в часовой пояс установленный на ПО
const getLocalData = function(date) {
  const differenceGMT = todayDate.getTimezoneOffset();
  const startDate = new Date(date);
  const durationInminutes = Math.round(180 + differenceGMT);
  const newDate = moment(startDate).subtract(durationInminutes, 'm').toDate();
  return newDate;
};

export {getLocalData};
