const _form = document.getElementById("form")
const _email = document.getElementById("email")

_form.addEventListener("submit", event => {
    event.preventDefault();

    validateEmail();
})

validateEmail = () => {
    const email_value = _email.value.trim();
    const _small = document.getElementById("small")
    if (email_value === '') {
        _small.textContent = "Email cannot be empty";
        _form.className = 'form error';
    } else if (!isEmail(email_value)) {
        _small.textContent = "Please enter a valid email address";
        _form.className = 'form error';
    } else _form.className = 'form';

}

isEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}