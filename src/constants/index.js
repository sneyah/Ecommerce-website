export const categoryData = [
    {
        imgURL: './category1.jpg',
        title: "Home Decor",
    },
    {
        imgURL: './category2.jpg',
        title: "Personal Care & Beauty",
    },
    {
        imgURL: './category3.jpg',
        title: "Fashion Accessories",
    },
    {
        imgURL: './category4.jpg',
        title: "Lounge and Leisure",
    },
];

export const blogData = [
    {
        imgURL: "./blog1.jpg",
        ctg: "Chic Retreats",
        title: "Transform your space into a stylish sanctuary.",
        info: "Sophia's Style Secrets",
    },
    {
    imgURL: "./blog2.jpg",
    ctg: "Fashion Fusion",
    title: "Blend comfort and style seamlessly in your wardrobe.",
    info: "Ethan's Elegant Escapes",
    },
    {
    imgURL: "./blog3.jpg",
    ctg:"Cozy Comforts",
    title: "Discover snug essentials for a warm and inviting home.",
    info: "Olivia's Cozy Chronicles",
    },
        
   {
    imgURL: "./blog4.jpg",
    ctg: "Trendy Treasures",
    title: "Stay ahead with the latest in home decor and fashion.",
    info: "Liam's Trendy Treasures",
    },

];

export const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        600:{
            slidesPerView: 2
        },
        800:{
            slidesPerView: 3
        },
        1100:{
            slidesPerView: 4
        },
        1300: {
            slidesPerView: 5
        }
    }
}