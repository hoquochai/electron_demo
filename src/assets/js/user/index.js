import {UserService} from '../../../api/services/User.js';

const getUsers = () => {
    const userService = new UserService();
    userService.getUsers().then((res) => {
        renderUsers(res.data)
    });
}

const renderUsers = (users) => {
    const userListEle = document.querySelector('#user_list')
    users.forEach(user => {
        // const deleteButton = document.createElement('button')
        // deleteButton.addEventListener('click', event => remove(post.id, event))
        // deleteButton.innerText = 'delete'
        // const updateButton = document.createElement('button')
        // updateButton.addEventListener('click', event => update(post.id, event))
        // updateButton.innerText = 'update'

        const name = document.createElement('h2')
        name.innerText = user.name
        const email = document.createElement('p')
        email.innerText = user.body
        const div = document.createElement('div')
        div.id = user.id
        div.appendChild(name)
        div.appendChild(email)
        // div.appendChild(deleteButton)
        // div.appendChild(updateButton)
        userListEle.appendChild(div)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    getUsers();
})