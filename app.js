const app = Vue.createApp({
    data() {
        return {
            name_error: '',
            nameInput: 'Franck JONES',
            number_error: '',
            numberInput: '4587 9632 4102 5998',
            cvc_error: '',
            cvcInput: '458',
            exp_error: '',
            expInput: '10/26',
        };
    },
    methods: {
        formatNameInput() {
            const regexName = /^[^0-9]+$/;
            if (!regexName.test(this.nameInput)) {
                this.name_error = 'The name must not contain numbers';
            } else {
                this.name_error = '';
            }
        },
        formatNumberInput() {
            const regexNumber = /^\d{4} \d{4} \d{4} \d{4}$/;
            if (!regexNumber.test(this.numberInput)) {
                this.number_error = 'The format is invalid. Example: 1234 5678 9012 3456';
            } else {
                this.number_error = '';
            }
        },
        formatCvcInput() {
            const regexCvc = /^\d{3}$/;
            if (!regexCvc.test(this.cvcInput)) {
                this.cvc_error = 'The field must contain exactly 3 digits';
            } else {
                this.cvc_error = '';
            }
        },
        formatExpInput() {
            const regexExp = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (!regexExp.test(this.expInput)) {
                this.exp_error = 'The format must be mm/yy';
            } else {
                this.exp_error = '';
            }
        }
    }
});

app.mount('#app');