document.addEventListener("DOMContentLoaded", function() {

//     Modal

    const modalOpeners = document.querySelectorAll(".modalOpener");

    if (modalOpeners.length > 0) {
        modalOpeners.forEach(e=>{
            e.addEventListener("click", (event)=>{
                const modal = document.querySelector(".modal");
                modal.classList.remove("hidden");
                const modalType = event.target.classList;
                modal.querySelectorAll("article").forEach(e=>{
                    if(e.classList.contains(modalType[modalType.length-1])) {
                        e.classList.remove("hidden");
                    }
                    else {
                        e.classList.add("hidden");
                    }
                })
            })
        })
        const closer = document.querySelector("#close");
        if (closer) {
            closer.addEventListener("click", (event)=>{
                document.querySelector(".modal").classList.add("hidden");
            })
        }
        const closerAround = document.querySelector(".modal");
        if (closerAround) {
            closerAround.addEventListener("click", (event)=>{
                if (event.target.classList.contains("modal")) {
                    document.querySelector(".modal").classList.add("hidden");
                }
            })
        }
    }

//     Persons filter

    if (document.getElementsByClassName("peopleFilter").length > 0) {
        document.querySelectorAll(".peopleFilter").forEach(e=>{
            e.addEventListener("click", (event)=>{
                event.preventDefault();
                const selected = event.target.innerHTML;
                event.target.classList.toggle("active");
                const status = event.target.classList.contains("active");
                const items = document.querySelectorAll(".peopleItem");
                items.forEach(e=>{
                    const text = e.querySelector("div > div > p:nth-of-type(2)").innerHTML;
                    if (status) {
                        if (text.indexOf(selected) > -1) {
                            e.classList.remove("hidden")
                        }
                    }
                    else {
                        if (text.indexOf(selected) > -1) {
                            e.classList.add("hidden")
                        }
                    }
                })
            });
        })
    }

//     Slider

    const slides = document.querySelectorAll(".promoItem");
    console.log(slides.length)
    if (slides.length > 0) {
        let currIndex = 0;
        const slider = setInterval(()=>{
            setTimeout(()=>{
                if (currIndex > slides.length - 1) {
                    currIndex = 0;
                }
                console.log("curr", currIndex)
                document.querySelector(".promoItems").style.transform = `translateY(${-500*currIndex}px)`;
                currIndex++;
            }, 500)
        },2000)
    }

});
