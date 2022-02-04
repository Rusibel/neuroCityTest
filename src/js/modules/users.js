import {getResource} from '../services/services';

export default function users() {
   
        class UserCard {
            constructor(id, email, avatar, firstName, lastName, parentSelector,...classes) {
                this.id = id;
                this.email = email;
                this.avatar = avatar;
                this.firstName = firstName;
                this.lastName = lastName;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
            }
    

            render() {
                const element = document.createElement('div');
    
                if (this.classes.length === 0) {
                    this.classes = "user__cards__item";
                    element.classList.add(this.classes);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
    
                element.innerHTML = `
                    <h4>${this.id} </h4>
                    <img src=${this.avatar} alt=${this.lastName}>
                    <h3>${this.firstName + " " +  this.lastName} </h3>
                    <div>${this.email}</div>
                    <div></div>
                `;
                this.parent.append(element);
            }
        }
    getResource('https://reqres.in/api/users')
        .then(data => {
            console.log(data.data)
            data.data.forEach(({id, email, avatar, first_name: firstName, last_name: lastName}) => {
                new UserCard(id, email, avatar, firstName, lastName, ".users .container").render();
            });
        });

} 