import { directionForAnswer, graduationTickets, TIMES_AB, TIME_DURATION_MINUTES } from './const';
import { allTimesOption } from './create-times-option';
import { getEndData } from './utils/timezone-end';
import dayjs from 'dayjs';
import { declOfNum } from './utils/graduation-ticket';
import { getLocalData } from './utils/timezone-diff';

const PRICE_AB = 700;
const PRICE_ABA = 1200;

const priceObject = {
  direction: 'AB',
  priceTicket: 700,
  amountTicket: 1,
  fullPrice: 700,
  dateStart: getLocalData(TIMES_AB[0]),
  dateEnd: getEndData(TIMES_AB[0],TIME_DURATION_MINUTES),
  dateStartBack: {},
  dateEndBack: {},
  durationMinutes: 50,
};

const mainSelect = document.querySelector('#route');
const timeSelect = document.querySelector('#time');
const timeBackSelect = document.querySelector('#time-back');
const inputAmount = document.querySelector('#num');
const buttonAnswer = document.querySelector('#answer');
const sectionAnswer = document.querySelector('.answer');

const deleteChildNodes = (element) => {
  if (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
};

const calculatePrice = function() {
  priceObject.direction = mainSelect.value;
  priceObject.amountTicket = Number(inputAmount.value);

  if (priceObject.direction === 'ABA') {
    priceObject.priceTicket = PRICE_ABA;
  } else {
    priceObject.priceTicket = PRICE_AB;
  }

  priceObject.fullPrice = priceObject.priceTicket * priceObject.amountTicket;

  let startId = '';
  for (let i = 0; i < timeSelect.length; i++) {
    if (timeSelect[i].selected) {
      startId = timeSelect[i].id;
      const targetObject = allTimesOption.find((element) => (element.id === startId));
      priceObject.dateStart = targetObject.dataLocalStart;
      priceObject.dateEnd = getEndData(priceObject.dateStart,TIME_DURATION_MINUTES);
      break;
    }
  }

  let endId = '';
  if (priceObject.direction === 'ABA') {
    for (let i = 0; i < timeBackSelect.length; i++) {
      if (timeBackSelect[i].selected) {
        endId = timeBackSelect[i].id;
        const targetObject = allTimesOption.find((element) => (element.id === endId));
        priceObject.dateStartBack = targetObject.dataLocalStart;
        priceObject.dateEndBack = getEndData(priceObject.dateStartBack,TIME_DURATION_MINUTES);
        break;
      }
    }
  } else {
    priceObject.dateStartBack = {};
    priceObject.dateEndBack = {};
  }

  if (priceObject.direction === 'ABA') {
    const minutesDuration = (priceObject.dateEndBack - priceObject.dateStart)/ 60000;
    priceObject.durationMinutes = minutesDuration;
  } else {
    const minutesDuration = (priceObject.dateEnd - priceObject.dateStart)/ 60000;
    priceObject.durationMinutes = minutesDuration;
  }

};

const isButtonDisabled = function() {
  return (inputAmount.value <= 0);
};

const createAnswer = function() {
  const firstStringAnswer = `Вы выбрали ${priceObject.amountTicket} ${declOfNum((priceObject.amountTicket), graduationTickets)} по маршруту ${directionForAnswer[priceObject.direction]} стоимостью ${priceObject.fullPrice}р.
    Это путешествие у вас займет ${priceObject.durationMinutes} минут.
    Теплоход отправляется в ${dayjs(priceObject.dateStart).format('HH:mm')}, а прибудет в ${dayjs(priceObject.dateEnd).format('HH:mm')}.`;
  let secontStringAnswer = '';
  if (priceObject.direction === 'ABA') {
    secontStringAnswer = ` Теплоход в обратную сторону отправляется в ${dayjs(priceObject.dateStartBack).format('HH:mm')}, а прибудет в ${dayjs(priceObject.dateEndBack).format('HH:mm')}.`;
  }
  return (firstStringAnswer + secontStringAnswer);
};

mainSelect.addEventListener('change', () => {
  calculatePrice();
  deleteChildNodes(sectionAnswer);
});

timeSelect.addEventListener('change', () => {
  calculatePrice();
  deleteChildNodes(sectionAnswer);
});

timeBackSelect.addEventListener('change', () => {
  calculatePrice();
  deleteChildNodes(sectionAnswer);
});

inputAmount.addEventListener('change', () => {
  calculatePrice();
  deleteChildNodes(sectionAnswer);
  buttonAnswer.disabled = isButtonDisabled();
});

buttonAnswer.addEventListener('click', () => {
  deleteChildNodes(sectionAnswer);
  const newP = document.createElement('P');
  newP.textContent = `${createAnswer()}`;
  sectionAnswer.appendChild(newP);
});

