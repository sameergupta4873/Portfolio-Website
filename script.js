document.querySelectorAll(".reveal").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
});

document.querySelectorAll(".revealUp").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parentUp");
    child.classList.add("childUp");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
});


// script end

// gsap start
var tl = gsap.timeline();

tl
    .from(".child span", {
        x: 100,
        stagger: .05,
        duration: 0.75,
        delay: 1,
        ease: Power3.easeInOut,
    })
    .to(".parent .child", {
        y: "-103%",
        duration: 0.5,
        ease: Circ.easeInOut
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
    .to("#green", {
        height: '100%',
        duration: 1,
        delay: -1,
        ease: Expo.easeInOut
    })
    .to("#home", {
        height: '100vh',
        duration: 0.65,
        delay: -0.65,
        ease: Expo.easeInOut
    })
    .to(".parentUp .childUp", {
        height:'20vh',
        duration: 0.75,
        ease: Expo.easeInOut
    })
// gsap end
