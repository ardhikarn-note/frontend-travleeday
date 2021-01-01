// eslint-disable-next-line import/no-anonymous-default-export
export default (date) => {
  const newDate = new Date(date);
  const formatDate = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [{ value: month }, , { value: day }] = formatDate.formatToParts(
    newDate
  );

  return `${day} ${month}`;
};
