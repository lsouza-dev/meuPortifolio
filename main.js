const header = document.querySelectorAll(".myInfo, .links");
const container = document.querySelectorAll(".container,.container *");
const social = document.querySelector(".social");
const sections = document.querySelectorAll("section");
const mySkills = document.querySelector(".mySkills");
const sectionTitles = document.querySelectorAll(".sectionTitle")
const skillsDivs = document.querySelectorAll(".skills");
const skillsTitle = document.querySelectorAll(".skillTitle");
const skillType = document.querySelectorAll(".skillType");
const skillIcons = document.querySelectorAll(".icons");

const handleLoad = () => {
  social.classList.add("aparecer");
  header.forEach((item) => item.classList.add("aparecer"));
  container.forEach(item => item.classList.add('visible'))
  
};

const handleScroll = () => {

    sectionTitles.forEach((item) => {
        const rectTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const halfWindow = .65;

        if(rectTop <= windowHeight * halfWindow){
            item.classList.remove('desaparecer');
            item.classList.add('aparecer');
        }else{
            if(item.className !== 'sectionTitle'){
                item.classList.add('desaparecer');
                item.classList.remove('aparecer')
            }
        }
    })

    skillType.forEach((item) => {
        const rectTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const halfWindow = 0.6;

        if (rectTop <= windowHeight * halfWindow) {
            item.classList.remove("invisible");
          item.classList.add("visible");
        } else if (rectTop > windowHeight * halfWindow) {
            if(item.className !== 'skillType'){
                item.classList.add('invisible')
                item.classList.remove("visible");
            }
        }
    })



    skillsDivs.forEach((item) => {
        const rectTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const halfWindow = .55;

        if(rectTop <= windowHeight * halfWindow){
            item.classList.remove('desaparecer');
            item.classList.add('aparecer');
        }else{
            if(item.className !== 'skills'){
                item.classList.add('desaparecer');
                item.classList.remove('aparecer')
            }
        }
    })

    skillIcons.forEach((item) => {
        const rectTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const halfWindow = .5;

        if(rectTop <= windowHeight * halfWindow){
            item.classList.remove('desaparecer')
            item.classList.add('aparecer');
        }else{
            if(item.classList !== 'skillIcon'){
                item.classList.add('desaparecer');
                item.classList.remove('aparecer');
            } 
        }
    })
};

window.addEventListener("load", handleLoad);
window.addEventListener("scroll", handleScroll);
