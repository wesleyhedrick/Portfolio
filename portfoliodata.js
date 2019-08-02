const homebutton = `
    <div class="homebutton">
        <button class="realhomebutton">Go home</button>
    </div>
`
const aboutMeButton = `
    <div>
        <button class="aboutme">Next</button>
    </div>`


const contactButton = `<div>
    <button class="aboutme">Next</button>
    </div>`


const contactButtons = `
    <div class="buttoncontainer">
        <a href="tel:+1-610-757-5876"><button>Call me</button></a>
        <a href="mailto:wesley.hedrick@gmail.com"><button>Email me</button></a>
    </div>`


const landingPage = `

    <div class="landingContainer">
        <h1><span class="w">W</span><span class="e">e</span><span class="s">s</span>
        <span class="h">H</span><span class="e">e</span><span class="d">d</span><span class="r">r</span><span class="i">i</span><span class="c">c</span><span class="k">k</span></h1>   
        <div class = "linkcontainer">
            <a class="aboutme" href="">About Me</a>
            <a class="projects" href="">Projects</a>
            <a class="contact" href="">Contact</a>
        </div>
    </div>`


const aboutMe = `
    <div class="container">
        
        <h1>Hi, my name is <span class="w">W</span><span class="e">e</span><span class="s">s</span>.</h1>
        <p>I like to read, analyze movies, play with my cats, and do adventure rides on my motorcycle.</p>
        <br>
        <p>I also like to <code>code.</code></p>
        <br>
        <p><span class = "longago">A long time ago in an office far, far away,</span> I created a VBA script to solve an administrative problem. I pressed the play button and watched in wonderment as my computer crunched a two-hour task in a few seconds. From that moment, I was hopelessly, irrevocably hooked on using code to make computers do things.</p>
        ${contactButtons}
        ${homebutton}
    </div>`;

const projects = `
    <div class="projectPageContainer">
        <div class="projectcontainer projectcontainerone">
            <img src="QuizAppMontyPython.png" alt="screen shot of landing page for Monty Python quiz app">
            <div class="projectbuttons">
                <a href="https://wesleyhedrick.github.io/QuizAppFinal/QuizApp.html" target="_blank">Take the quiz</a>
                <a href="https://github.com/wesleyhedrick/QuizAppFinal.git" target="_blank">See the code.</a>
            </div>
        </div>
        <p class="projectdescription">How well do you know the greatest comedy of all time? Take the quiz to find out.</p>
        <div class="projectcontainer projectcontainertwo">
            <img class = "imagetwo" src="LoadSheetHelper.png" alt="screen shot of landing page for Monty Python quiz app">
            <div class="projectbuttons">
                <a href="https://wesleyhedrick.github.io/DragandDrop/draganddrop.html" target="_blank">Use the app</a>
                <a href="https://github.com/wesleyhedrick/DragandDrop.git" target="_blank">See the code.</a>
            </div>
        </div>
        <p class="projectdescriptiontwo">This app significantly reduces the time it takes to make loading diagrams.</p>
        ${contactButtons}
        ${homebutton}
    </div>
    `


const contactPage = `
    <div>
        <h1>There are several ways to reach me.</h1>
        <div class="contactscontainer">
            <a href="tel:+1-610-757-5876"><img src="https://img.icons8.com/ios/50/000000/phone-not-being-used.png" alt="Telephone icon"></a>
            <a href="mailto:wesley.hedrick@gmail.com"><img src="https://img.icons8.com/ios/50/000000/email-open.png" alt="Envelop icon representing email"></a>
            <a href="www.linkedin.com/in/wesleyhedrick"><img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="LinkedIn icon"></a>
        </div>
        ${homebutton}
    </div>`



