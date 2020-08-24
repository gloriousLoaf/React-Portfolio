// ready to add new projects to this db!
const db = {
    Projects: [
        {
            "title": "Emoji Runner",
            "url": "http://emoji-runner.herokuapp.com/",
            "imgSrc": require("./img/emoji.png"),
            "imgAlt": "Emoji Runner with determined smile.",
            "text": "A fun twist on the classic runner game, with secure user login and score tracking.",
            "tech": "P5JS, Express & MySQL - ",
            "repoURL": "https://github.com/gloriousLoaf/Emoji-Runner"
        },
        {
            "title": "Covid-19 Tracker",
            "url": "https://gloriousloaf.github.io/Covid-19-Tracker/",
            "imgSrc": require("./img/covid.png"),
            "imgAlt": "Covid-19 Tracker with green virus molecule.",
            "text": "A global tracker information and resources. Includes statewide testing information.",
            "tech": "JS / jQuery & Multiple APIs - ",
            "repoURL": "https://github.com/gloriousLoaf/Covid-19-Tracker"
        },
        {
            "title": "Burger Cravings",
            "url": "https://maple-whistler-67367.herokuapp.com/",
            "imgSrc": require("./img/Burger-Cravings.png"),
            "imgAlt": "Burger Cravings with cartoon burger and fries.",
            "text": "A fun demo of the MVC design pattern with persistent database. Do you want fries with that?",
            "tech": "Handlebars, MySQL & ORM - ",
            "repoURL": "https://github.com/gloriousLoaf/burger"
        }
    ]
};

export default db;