export const maxLengthCreator = maxLength => value => 
                                            (value && value.length < maxLength ? undefined : `Max length is ${maxLength}`);
export const required = value => value ? undefined: 'Required';
export const onlySymbolsAllowed = value => /[0-9]/.test(value) ? 'Only alphabetical symbols allowed': undefined;
export const onlyFuture = value => {
    if (!value) return;

    let date = value.split('-');
    let now = new Date();

    if (new Date(date[0], date[1] - 1, date[2]) < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
        return 'You can not fly into the past';
    }
};

export const isActualEmail = value => {
    if (!value) return;

    let emails = ['@mail.ru', '@yandex.ru', '@gmail.com', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'];

    for (let email of emails) {
        if (value.endsWith(email)) return;
    }

    return 'Email must end with @..ru/com';
};

export const isActualPhoneNumber = value => {
    if (!value) return;

    if (value.startsWith('+7') && value.length === 12) return;

    return 'Invalid number';
};

export const composeValidators = (...validators) => value => {
    return validators.reduce((error, validator) => error || validator(value), undefined);
}

