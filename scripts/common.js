
function createNewUser() {
    var user = {

        getLogin(){
            let login = firstName[0].toLowerCase() + lastName.toLowerCase();
            return login;
        },
        getAge(){
            return 'your age: ' + (new Date(Date.now() - birthday).getUTCFullYear() - 1970);
        },
        getPassword(){
          return "Your password: "+ firstName[0].toUpperCase() + lastName.toLowerCase() + birthday.getFullYear();
        }
    };
    var firstName, lastName, d, m, y, l, birth;
    user.setFirstName = function (newFirstName) {
        firstName = newFirstName;
    };
    user.setLastName = function (newLastName) {
        lastName = newLastName;
    };
    user.setBirth = function (date) {
        birthday = date;
    };
    user.setFirstName(prompt('Write your first name'));
    user.setLastName(prompt('Write your last name'));
    birth = prompt('write you birthday like dd.mm.yyyy:');
    l=birth.length;
    while(l!=10 || birth[2]!='.' || birth[5]!='.'){
        birth = prompt('write you birthday like dd.mm.yyyy:');
        l=birth.length;
    }
    d = parseInt(birth[0]+birth[1]);
    m = parseInt(birth[3]+birth[4])-1;
    y = parseInt(birth[6]+birth[7]+birth[8]+birth[9]);
    var Birthday = new Date(y,m,d);

   user.setBirth(Birthday);
    return console.log( user.getLogin()),console.log(user.getAge()),console.log( user.getPassword());
}
createNewUser();
