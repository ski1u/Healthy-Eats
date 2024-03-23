/* DARK MODE */
let darkbutton = document.querySelector("#header nav img")

let clickmodifications = {
    "body": {
        "backgroundColor": "#1a1a1a"
    },
    "h1": {
        "color": "#4CAF50"
    },
    "#logo h1": {
        "background-image": "linear-gradient(to bottom, #4CAF50, #7AE582)",
        "background-clip": "text",
        "-webkit-background-clip": "text",
        "color": "transparent"
    },
    ".main-left h1": {
        "background-image": "linear-gradient(to top, #4CAF50, #7AE582)",
        "background-clip": "text",
        "-webkit-background-clip": "text",
        "color": "transparent"
    },
    "#header": {
        "border-bottom": "1px solid white"
    }
}
let unclickmodifications = {
    "body": {
        "backgroundColor": "#4CAF50",
        "backgroundImage": "linear-gradient(to top, #4CAF50, #86BF88)"
    },
    "h1": {
        "color": "black"
    },
    "#logo h1": {
        "background-image": "none",
        "color": "white"
    },
    "#header": {
        "border-bottom": "1px solid black"
    }
}

function changeproperties(obj) {
    for (let [k,v] of Object.entries(obj)) {
        for (let element of document.querySelectorAll(k)) {
            for (let [prop, color] of Object.entries(v)) {
                element.style[prop] = color
            }
        }
    }
}
let on = false
darkbutton.addEventListener("click", function(event) {
    if (!on) {
        on = true
        document.querySelector("body").style.backgroundImage = "none"
        changeproperties(clickmodifications)
    } else {
        on = false
        changeproperties(unclickmodifications)
    }
})


/* 
SCROLLING APPEARING ITEMS */
let appear = "-50px"
let disappear = "200px"
function obs(type) {
    let val = type ? appear : disappear
    let item = document.querySelector("body")
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            switch (type) {
                case true:
                    entry.target.classList.add("visible");
                    break;
                case false:
                    entry.target.classList.remove("visible");
                    break;
            }
        })
    }, {
        root: null,
        rootMargin: val,
        threshold: 0.1
    })

    Array.from(item.children).forEach(i => {
        observer.observe(i)
    })
}
obs(true)
obs(false)




/* BENEFITS BUTTON CLICK AND STYLING */
let select = "1"
let benefitbuttons = document.querySelectorAll(".b-list div button")
let svgs = document.querySelectorAll(".b-left img")
benefitbuttons.forEach(i => {
    i.addEventListener("click", function(event) {
        let target = event.target
        let num = target.querySelector("span").innerHTML

        if (select !== num) {
            select = num
            benefitbuttons.forEach(a => {
                a.style.backgroundColor ="#FFA726"
            })
            target.style.backgroundColor = "#E5B773"

            svgs.forEach(s => {
                s.style.display = "none"
                s.style.opacity = "0"
            })
            let svg = document.querySelector(`.img${num}`)
            if (svg) {svg.style.display = "block"}
            let opacity = 0;
            for (let op = 0; op <= 1; op += 0.1) {
                setTimeout(() => {
                    svg.style.opacity = opacity;
                    opacity += 0.1;
                }, 300 * op);
            }
            
        }
    })
})