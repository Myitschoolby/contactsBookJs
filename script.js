const ContactsApp = function() {

    let contactsElem = null,
        contactsList = null;

    const add = function() {
        let inputName = contactsElem.querySelector('input[name="name"]').value,
            inputEmail = contactsElem.querySelector('input[name="email"]').value,
            inputPhone = contactsElem.querySelector('input[name="phone"]').value;
        
        if (!inputName || !inputEmail || !inputPhone) return;

        let contactElem = document.createElement('li'),
            contactElemName = document.createElement('div'),
            contactElemEmail = document.createElement('div'),
            contactElemPhone = document.createElement('div'),
            contactElemDelete = document.createElement('button');

        contactElemName.classList.add('contact_name');
        contactElemEmail.classList.add('contact_email');
        contactElemPhone.classList.add('contact_phone');
        contactElemDelete.classList.add('contact_delete');

        contactElemName.innerHTML = inputName;
        contactElemEmail.innerHTML = inputEmail;
        contactElemPhone.innerHTML = inputPhone;
        contactElemDelete.innerHTML = 'X';

        contactElem.appendChild(contactElemName);
        contactElem.appendChild(contactElemEmail);
        contactElem.appendChild(contactElemPhone);
        contactElem.appendChild(contactElemDelete);

        contactsList.appendChild(contactElem);

        contactElemDelete.addEventListener('click', deleteContact);
    };

    const clear = function() {
        contactsList.innerHTML = '';
    };

    const deleteContact = function() {
        this.closest('li').remove();
    };

    const init = function() {
        contactsElem = document.createElement('div');
        contactsElem.classList.add('contacts');

        let html = `
        <h2>Список контактов</h2>

        <div class="contacts_form_add">
            <h3>Новый контакт</h3>
            <input type="text" name="name" placeholder="Имя" />
            <input type="email" name="email" placeholder="Эл. почта" />
            <input type="phone" name="phone" placeholder="Телефон" />
            <button class="add">Добавить</button>
            <button class="clear">Очистить</button>
        </div>

        <div class="contacts_list">
            <ul>
                
            </ul>
        </div>`;

        contactsElem.innerHTML = html;

        document.body.appendChild(contactsElem);

        contactsList = contactsElem.querySelector('.contacts_list ul');

        let addButton = contactsElem.querySelector('button.add'),
            clearButton = contactsElem.querySelector('button.clear');

        addButton.addEventListener('click', add);
        clearButton.addEventListener('click', clear);

    }();

};

window.addEventListener('load', function() {

    new ContactsApp();

});