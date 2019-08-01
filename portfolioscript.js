function renderAboutMe() {
    $('.aboutme').on('click', function(e){
        e.preventDefault();
        $('body').html(aboutMe);
    })
}

function renderProjects() {
    $('.projects').on('click', function(e){
        e.preventDefault();
        $('body').html(projects);
    })
}

function renderContact() {
    $('.contact').on('click', function(e){
        e.preventDefault();
        $('body').html(contactPage);
    })
}

function goHome() {
    $('.realhomebutton').on('click', function(e){
        console.log('Is this button working?')
        $('body').html(landingPage);
    })
}

$(renderAboutMe);
$(renderProjects);
$(renderContact);
$(goHome);
