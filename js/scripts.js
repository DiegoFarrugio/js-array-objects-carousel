const images = [

    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

console.log('images', images, typeof images);

const leftButton = document.getElementById('left_button');
console.log('leftButton', leftButton, typeof leftButton);

const rightButton = document.getElementById('right_button');
console.log('rightButton', rightButton, typeof rightButton);


const containerCarosel = document.getElementById('containerCarosel');
for(let i = 0; i < images.length; i++){
    if (i==0){
        containerCarosel.innerHTML += `
        <div class="img_container active">
            <img src="${images[i].url}" alt="">
            <div class="description_img">
                <h3 class="text-end">
                    ${images[i].title}
                </h3>
                <p class="text-end">
                    ${images[i].description}
                </p>
            </div>
        </div> 
        `  
    }

    else{
        containerCarosel.innerHTML += `
        <div class="img_container">
            <img src="${images[i].url}" alt="">
            <div class="description_img">
                <h3 class="text-end">
                    ${images[i].title}
                </h3>
                <p class="text-end">
                    ${images[i].description}
                </p>
            </div>
        </div> 
        `  
    }
}

const elementCarosel = document.querySelector('.img_container');
console.log('Img Container', elementCarosel, typeof elementCarosel);

