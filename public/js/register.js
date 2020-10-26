//Capture user input
$(document).ready(function () {
    const registerUser = $('#register');

    const usernameInput = $('input#username');
    const genderInput = $('input#gender');
    const ageInput = $('input#age');    
    const current_heightInput = $('input#current_height');    
    const current_weightInput = $('input#current_weight');
    const current_dateInput = $('input#current_date');
    const goal_weightInput = $('input#goal_weight');    
    const passwordInput = $('input#password');
    const password2Input = $('input#password2');

//Grab value of radio buttons 
    const gender = $("input[name='gender']:checked").val();   

// When form is submitted, validate all fields have been entered
    registerUser.on('click', function (event) {
      event.preventDefault();
      console.log("Add Info Clicked");

// Validate Fields
    if (!username|| !gender|| !age|| !current_height|| !current_weight|| !goal_weight|| !password|| !password2 ) {
        handleLoginErr(err);
    } else {
//Compare username
        User.findOne({ 
            username: username 
            }).then(user => {
                if (user) {
                    errors.push({ msg: 'Username already exists' });
                } else {
//Create API object
                    const newUser = {
                    username: usernameInput.val().trim(),
                    gender: gender, 
                    age: ageInput.val().trim(),
                    current_height: current_heightInput.val().trim(), 
                    current_weight: current_weightInput.val().trim(),
                    current_date: current_dateInput.val().trim(),
                    goal_weight: goal_weightInput.val().trim(),
                    password: passwordInput.val().trim(), 
                    password2: password2Input.val().trim(),
                    };
//POST to db 
                    function registerUser(newUser) {
                        $.post('/api/User', {
                        username: usernameInput.val().trim(),
                        gender: gender, 
                        age: ageInput.val().trim(),
                        current_height: current_heightInput.val().trim(), 
                        current_weight: current_weightInput.val().trim(),
                        current_date: current_dateInput.val().trim(),
                        goal_weight: goal_weightInput.val().trim(),
                        password: password.val().trim(), 
                        password2: password2.val().trim(),
                     }).then(function (data) {
                        window.location.replace('/dashboard');

                    }).catch(handleLoginErr);
                }
            });
    }); 
});   
// If there's an error, handle it by throwing up a bootstrap alert 
function handleLoginErr(err) {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
}





