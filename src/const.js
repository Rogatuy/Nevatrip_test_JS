import dayjs from 'dayjs';

const TIMES_AB = [
  dayjs('2022-10-21 18:00:00.000+03:00').format(),
  dayjs('2022-10-21 18:30:00.000+03:00').format(),
  dayjs('2022-10-21 18:45:00.000+03:00').format(),
  dayjs('2022-10-21 19:00:00.000+03:00').format(),
  dayjs('2022-10-21 19:15:00.000+03:00').format(),
  dayjs('2022-10-21 21:00:00.000+03:00').format(),
];

const TIMES_BA = [
  dayjs('2022-10-21 18:30:00.000+03:00').format(),
  dayjs('2022-10-21 18:45:00.000+03:00').format(),
  dayjs('2022-10-21 19:00:00.000+03:00').format(),
  dayjs('2022-10-21 19:15:00.000+03:00').format(),
  dayjs('2022-10-21 19:35:00.000+03:00').format(),
  dayjs('2022-10-21 21:50:00.000+03:00').format(),
  dayjs('2022-10-21 21:55:00.000+03:00').format(),
];

const nameDirection = {
  fromAtoB : 'AB',
  fromBtoA : 'BA',
  formAtoBthenA: 'ABA',
};

const directionForAnswer = {
  AB: 'из A в B',
  BA: 'из B в A',
  ABA: 'из A в B и обратно'
};

const graduationTickets = ['билет','билета','билетов'];

const TIME_DURATION_MINUTES = 50;

export {TIMES_AB, TIMES_BA, nameDirection, directionForAnswer, graduationTickets, TIME_DURATION_MINUTES};
