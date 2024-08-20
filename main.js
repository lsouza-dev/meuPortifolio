const header = document.querySelectorAll('.myInfo, .links');
const container = document.querySelectorAll('.container,.container *')
const social = document.querySelector(".social")
const sections = document.querySelectorAll('section')
const mySkills = document.querySelector('.mySkills')
const skillsDivs = document.querySelectorAll('.mySkills .skills')
const mySkillsTitle = document.querySelector(".title")


const handleLoad = () => {
    social.classList.add('aparecer')
    header.forEach(item => item.classList.add('aparecer'))
    container.forEach(item => item.classList.add('visible'))
}

const handleScroll = () =>{
    sections.forEach((item) =>{
        const rectTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const halfWindow = 0.5;
        
        if(rectTop <= windowHeight * halfWindow){
           

        }else if(rectTop > windowHeight * halfWindow){
           
        }
        
    })

    skillsDivs.forEach((item) =>{
        const rectTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const halfWindow = 0.5;
        
        if(rectTop <= windowHeight * halfWindow){
          

        }else if(rectTop > windowHeight * halfWindow){
         
            }
    })
    
}

window.addEventListener('load',handleLoad)
window.addEventListener('scroll',handleScroll)
