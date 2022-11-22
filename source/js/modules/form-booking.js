import Inputmask from '../vendor/inputmask';

const initBookingForm = () => {

  const bookingForm = document.querySelector('.form-booking');

  if (bookingForm) {
    bookingForm.addEventListener('submit', onBookingFormSubmit);

    const agreementCheckbox = bookingForm.querySelector('[name="agreement"]');
    agreementCheckbox.required = false;
  }

  Inputmask({regex: '[+]*(\\d\\s?)*'}).mask('.form-booking input[type="tel"]'); //eslint-disable-line
};

const onBookingFormSubmit = (evt) => {
  const agreementCheckbox = evt.target.querySelector('.form-booking__checkbox > input[type="checkbox"]');

  if (!agreementCheckbox.checked) {
    evt.preventDefault();
    agreementCheckbox.classList.add('error');
  } else {
    agreementCheckbox.classList.remove('error');
  }

  const phonePattern = /[+]*(\d\s?)*/gm;
  const phoneNumberInput = evt.target.querySelector('.form-booking input[type="tel"]');
  if (!phonePattern.test(phoneNumberInput.value)) {
    evt.preventDefault();
    phoneNumberInput.classList.add('error');
  } else {
    phoneNumberInput.classList.remove('error');
  }
};

export {initBookingForm};
