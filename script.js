let burgerMenu = document.querySelector('.burger_menu');
let menuContainer = document.querySelector('.menu_items_container');
burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    menuContainer.classList.toggle("show")
});

if (window.innerWidth >= 1200) {
    VK.Widgets.Group("vk_groups1", {mode: 4, no_cover: 1, width: "auto", height: "306", color1: '1D2926', color2: 'FFFFFF', color3: 'FFFFFF'}, 143830192);
    VK.Widgets.Group("vk_groups4", {mode: 4, no_cover: 1, width: "auto", height: "306", color1: '1D2926', color2: 'FFFFFF', color3: 'FFFFFF'}, 90727683);
    VK.Widgets.Group("vk_groups2", {mode: 4, no_cover: 1, width: "auto", height: "306", color1: '1D2926', color2: 'FFFFFF', color3: 'FFFFFF'}, 210719358);
    VK.Widgets.Group("vk_groups3", {mode: 4, no_cover: 1, width: "auto", height: "306", color1: '1D2926', color2: 'FFFFFF', color3: 'FFFFFF'}, 152680858);
} else {
    VK.Widgets.Group("vk_groups1", {mode: 1, no_cover: 1, width: "auto", height: "350", color1: '1D2926', color2: 'FFFFFF', color3: 'FFFFFF'}, 143830192);
    VK.Widgets.Group("vk_groups4", {mode: 1, no_cover: 1, width: "auto", height: "350", color1: '1D2926', color2: 'FFFFFF', color3: 'FFFFFF'}, 90727683);
    VK.Widgets.Group("vk_groups2", {mode: 1, no_cover: 1, width: "auto", height: "350", color1: '1D2926', color2: 'FFFFFF', color3: 'FFFFFF'}, 210719358);
    VK.Widgets.Group("vk_groups3", {mode: 1, no_cover: 1, width: "auto", height: "350", color1: '1D2926', color2: 'FFFFFF', color3: 'FFFFFF'}, 152680858);
}



// let sliderContainers = document.querySelectorAll('.slider_container .swiper-slide .images_container');

// sliderContainers.forEach(element => {
    
//     element.addEventListener('mouseover', (event) => {

//         if (event.target.classList.contains('item_pic') && event.target != element.querySelector('.item_pic:first-child'))
//             event.target.classList.add('hover');
        
//     });

//     element.addEventListener('mouseout', (event) => {
//         event.target.classList.remove('hover');
//     });
// });

// sliderContainers.forEach(element => {
//     element.querySelector('.item_pic:nth-child(2)').addEventListener('mouseover', (event) => {
//         element.querySelector('.item_pic:nth-child(2)').style.display = "none";
//         console.log(event.target)
//     });
// });

// let filters = document.querySelector('.filters');
// let imagesFiltered = document.querySelectorAll('.img-container .item_pic');

// filters.addEventListener('click', ev => {
//     if (ev.target.tagName !== 'LI') return;

//     let filterClass = ev.target.dataset['f'];
    

//     imagesFiltered.forEach(el => {

//         if (el.classList.contains(filterClass) && filterClass !== 'all') {
//             el.classList.add('hide');
//             setTimeout(() => el.classList.add('hideTotally'), 500);
//         } else {
//             el.classList.remove('hideTotally');
//             setTimeout(() => el.classList.remove('hide'), 1);
//         }
        
//     });
// });

