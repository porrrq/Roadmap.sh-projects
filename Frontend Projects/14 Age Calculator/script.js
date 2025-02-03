const result = document.querySelector('.result');
const DateTime = luxon.DateTime;
const DatePicker = new datepicker('#datepicker',{
    formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
    },
    position: 'bl',
});
console.log(DatePicker.dateSelected)