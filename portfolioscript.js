function renderLanding() {
    $('body').html(landingPage);
    renderAboutMe()
    renderProjects()
    renderContact()
}


function renderAboutMe() {
    $('.aboutme').on('click', function(e){
        e.preventDefault();
        $('body').html(aboutMe);
        goHome()        
    })

}

function renderProjects() {
    $('.projects').on('click', function(e){
        e.preventDefault();
        $('body').html(projects);
        goHome()

    })
}

function renderContact() {
    $('.contact').on('click', function(e){
        e.preventDefault();
        $('body').html(contactPage);
        goHome()

    })
}

function goHome() {
    $('.realhomebutton').on('click', function(e){
        console.log('Is this button working?')
        renderLanding();
    })
}

$(renderLanding);
