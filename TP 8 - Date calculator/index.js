const dateParser = (chaine) => {
  let newDate = new Date(chaine).toISOString().split("T")[0];
  return newDate;
};

const today = dateParser(new Date());

const dateOneMore = (chaine) => {
  let [y, m, d] = chaine.split("-");
  [y, m, d] = [y, m, parseInt(d) + 1];
  return [y, m, d].join("-");
};

const mseconds = (date) => {
  const dateObj = new Date(date);
  const milliseconds = dateObj.getTime();
  return milliseconds;
};

const compare = (date1, date2) => {
  const mday = 24 * 60 * 60 * 1000;

  const startDate = mseconds(date1);
  const endDate = mseconds(date2);

  const mdiff = endDate - startDate;

  const ddiff = mdiff / mday;
  return ddiff;
};

start_date.addEventListener("input", () => {
  if (start_date.value.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/)) {
    const selectedDate = start_date.value;
    if (selectedDate >= today) {
      end_date.value = dateOneMore(start_date.value);
      total.textContent =
        compare(start_date.value, end_date.value) *
        parseInt(nightPrice.textContent);
    } else {
      start_date.value = today;
      end_date.value = dateOneMore(today);
    }
  }
});

end_date.addEventListener("input", () => {
  if (end_date.value > start_date.value) {
    total.textContent =
      compare(start_date.value, end_date.value) *
      parseInt(nightPrice.textContent);
  } else {
    end_date.value = dateOneMore(start_date.value);
    total.textContent =
      compare(start_date.value, end_date.value) *
      parseInt(nightPrice.textContent);
  }
});

start_date.value = today;
end_date.value = dateOneMore(start_date.value);
total.textContent =
  compare(start_date.value, end_date.value) * parseInt(nightPrice.textContent);
