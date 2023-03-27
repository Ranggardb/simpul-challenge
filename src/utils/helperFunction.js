const getDateDDMMYYYY = (ISOString) =>
  `${new Date(ISOString).getDate()}/${
    new Date(ISOString).getMonth() + 1
  }/${new Date(ISOString).getFullYear()}`;

const getRemainingDay = (ISOString) =>
  Math.floor((new Date(ISOString) - new Date()) / (1000 * 60 * 60 * 24));

export { getDateDDMMYYYY, getRemainingDay };
