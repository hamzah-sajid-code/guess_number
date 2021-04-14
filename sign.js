function addUser(){
    uname = document.getElementById('user_name_input').value;
    user_password_input = document.getElementById('user_password_input').value;
    user_repassword_input = document.getElementById('user_repassword_input').value;
    if(user_password_input != user_repassword_input){
        alert('Your password does not match. you typed password is '+user_password_input+' and you typed in the retype password '+user_repassword_input)
    }else{
        localStorage.setItem('Name', uname);
        localStorage.setItem('Password', user_password_input);
        window.location = 'game_index.html';
    }
}