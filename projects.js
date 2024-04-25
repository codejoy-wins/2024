document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { title: "Homepage",
         description: "The homepage to my personal website.  The index.html to maxjann.com.",
         imageUrl: "static/img/elamforever.png",
         linkURL:"index.html",
         videoembed:"",
         date:"2020-current",

         },
        
        { title: "OneDate",
         description: "A single-page web application that uses artificial intelligence to generate a date for you in between you and your date's current location.", 
         imageUrl: "static/img/1d.jpg",
         linkURL:"onedate.html",
         videoembed:"",
         date:"2024",
         },
         { title: "Mewthree",
         description: "A single-page web application that uses artificial intelligence and a pokemon API to let you pick a team of any 6 pokemon and challenge Mewthree to a battle.", 
         imageUrl: "static/img/mewthree.png",
         linkURL:"pokedex.html",
         videoembed:"",
         date:"2024",
         },
         { title: "Blog",
         description: "A dynamically styled blog that automatically displays all my blog posts from that month", 
         imageUrl: "static/img/blogexample.png",
         linkURL:"blog.html",
         videoembed:"",
         date:"2020-2024",
         },
         { title: "DJ Aliens",
         description: "An iPod type App that simulates 2 Alien DJ's for you, a male and a female with different tastes",
         imageUrl: "static/img/alienapp.png",
         linkURL:"alien.html",
         videoembed:"",
         date:"2021-2023",

         },
         { title: "Starbros",
         description: "A game with original assets / level design and mechanics",
         imageUrl: "static/img/starbros.png",
         linkURL:"game.html",
         videoembed:"",
         date:"2018",

         },
     { title: "Fantasy Football Apps", 
        description: "The video is a demo of a fullstack web application I built with Python and the Django Framework. The 'Try App' Link will take you to my power rankings where I used a parallax effect to make a fun article for my league to read weekly. ", 
        imageUrl: "static/img/henry.jpg",
        linkURL: "fantasy.html",
        videoembed:"https://www.youtube.com/embed/0Lo2n8dznWY?si=0TGl5-Qkxk-GM36D",
        date:"2019",
     },
         { title: "Meme Creator",
         description: "A primitive app that let's you pair images with text... I should revisit this with A.I.s help and add functionality for users to download created custom memes.",
         imageUrl: "static/img/meme.jpg",
         linkURL:"meme.html",
         videoembed:"",
         date:"2022",

         },
         { title: "Facebook Clone",
         description: "A fully functional previously deployed fullstack web application that let's users log in, customize their wall background and colors, and post on other users walls.  Used Django / Python / AWS.  Eventually had to take it down due to complications with pythonanywhere.  This project best shows my actual backend skillset.",
         imageUrl: "static/img/fakebook.png",
         linkURL:"",
         videoembed:"https://www.youtube.com/embed/cGj6XZNMmQc?si=-ldn3nU6vq1L0pWK",
         date:"2020",

         },

         { title: "Cards",
         description: "A pokemon app where you choose moves and fight a non-ai enemy but it's a well balanced prototype.",
         imageUrl: "static/img/mew.jpg",
         linkURL:"cards.html",
         videoembed:"",
         date:"2023",

         },
         { title: "LuckyBid",
         description: "A fullstack web application where you can log on to bid on items for a chance to win them in a raffle",
         imageUrl: "static/img/luckybid.png",
         linkURL:"",
         videoembed:"https://www.youtube.com/embed/qEnke76S4pw?si=_y25WIuQir1co2Y6",
         date:"2019",
         },
         { title: "Unreal Cloudland", 
        description: "I'm learning Unreal Engine 5.3 with my new Macbook Pro M3", 
        imageUrl: "static/img/elamcloud.png",
        linkURL: "",
        videoembed:"https://www.youtube.com/embed/IJySvOjJwqI?si=67r2SfNbG8auAmmF",
        date:"2024",
     },
     { title: "React Portfolio", 
        description: "This is a React app that dynamically reacts to user typing and filters a list of my react apps I made at the time.  This was before I had maxjann.com and was experimenting with React.  I will probably make a new React App Soon.", 
        imageUrl: "static/img/react.png",
        linkURL: "https://modest-poitras-0f59e2.netlify.app/",
        videoembed:"",
        date:"2020",
     },
        // I should also add video demos for each project, as well as a link
        // videos/ reviews / music  / homepage
    ];

    const sideprojects = [
        {
            title:"React Speed",
            description: "A React Application that lets you save and load states without reloading the webpage, and also can adjust the colors and speed of the logo",
            linkURL:"admiring-allen-88af04.netlify.app",
        },
        {
            title:"React Colors",
            description:"A React App that lets you type in and test out any HTML5 color.",
            linkURL:"kind-babbage-529fc.netlify.app",
        },
        {
            title:"Old Portfolio",
            description:"An old portfolio where I link to all of my apps I had built at the time, and an old resume",
            linkURL:"modest-poitras-0f59e2.netlify.app",
        }
    ]

    const projectsList = document.getElementById('projects-list');

    projects.forEach(project => {
        const item = document.createElement('div');
        item.classList.add('project-item');

        const image = document.createElement('img');
        image.src = project.imageUrl;
        image.classList.add('project-image');

        const date = document.createElement('div');
        date.classList.add('project-date');
        date.textContent = project.date;

        const title = document.createElement('div');
        title.classList.add('project-title');
        title.textContent = project.title;

        const description = document.createElement('div');
        description.classList.add('project-description');
        description.textContent = project.description;

        const linkButton = document.createElement('a');
        linkButton.href = project.linkURL;
        linkButton.textContent = "Try App";
        linkButton.classList.add('project-link', 'hidden');
        linkButton.target = "_blank"; // Opens the link in a new tab

        const video = document.createElement('div');
        video.innerHTML = `
        <iframe width="100%" height="315" src="${project.videoembed}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
        video.classList.add('project-vid', 'hidden');
        item.appendChild(date);
        item.appendChild(image);
        item.appendChild(title);
        item.appendChild(description);

        if(project.linkURL){
            item.appendChild(linkButton);
        }
        if(project.videoembed){
            item.appendChild(video);
        }else{
            console.log("not");
        }

        item.addEventListener('click', function() {
            // Toggle the visibility of the description and link together
            const isDescriptionVisible = description.style.display === 'block';
            description.style.display = isDescriptionVisible ? 'none' : 'block';
            linkButton.style.display = isDescriptionVisible ? 'none' : 'inline-block'; // Toggle link visibility
            date.style.display = isDescriptionVisible ? 'none' : 'inline-block'; // Toggle link visibility

            video.style.display = isDescriptionVisible ? 'none' : 'inline-block';
        });

        projectsList.appendChild(item);
    });
});
