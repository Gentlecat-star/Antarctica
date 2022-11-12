import Inputmask from '../vendor/inputmask';

const initBookingForm = () => {

  const bookingForm = document.querySelector('.form-booking');

  if (bookingForm) {
    bookingForm.addEventListener('submit', onBookingFormSubmit);

    const agreementCheckbox = bookingForm.querySelector('[name="agreement"]');
    agreementCheckbox.required = false;
  }

  let inputMask = new Inputmask('9{11}');
  inputMask.mask('.form-booking input[type="tel"]');
};

const onBookingFormSubmit = (evt) => {
  const agreementCheckbox = evt.target.querySelector('.form-booking__checkbox > input[type="checkbox"]');

  if (!agreementCheckbox.checked) {
    evt.preventDefault();
    agreementCheckbox.classList.add('error');
  } else {
    agreementCheckbox.classList.remove('error');
  }

  const phonePattern = /[+]*[1-9]\s*\(*[0-9]{3}\)*\s*[0-9]{3}\s*[0-9]{2}\s*[0-9]{2}/gm;
  const phoneNumberInput = evt.target.querySelector('.form-booking input[type="tel"]');
  if (!phonePattern.test(phoneNumberInput.value)) {
    evt.preventDefault();
    phoneNumberInput.classList.add('error');
  } else {
    phoneNumberInput.classList.remove('error');
  }
};

export {initBookingForm};
