import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const moving = document.querySelectorAll('.unmove');
const appearOptions ={
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"};

const appearOnScroll = new IntersectionObserver(
    function(entries,appearOnScroll){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add('move');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions
);

moving.forEach(mover =>{
    appearOnScroll.observe(mover);
});

const billingPic = document.querySelector(".billing-pic");
const profilePic = document.querySelector(".profile-pic");

const animatedImageTimeline = new ScrollTimeline({
    scrollOffsets: [
        {target: billingPic, edge: "end", threshold: "1"},
        {target: billingPic, edge: "start", threshold: "1"}
    ],
});
billingPic.animate(
    {
        transform: ["translate(250px,300px)", "translateX(0)"],
    },
    {
        duration: 1,
        timeline: animatedImageTimeline,
    }
);
profilePic.animate(
    {
        transform: ["translate(-250px, -300px)", "translateX(0)"],
    },
    {
        duration: 1,
        timeline: animatedImageTimeline,
    }
)