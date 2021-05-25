import bcrypt from "bcryptjs";
// MONGODB_URL=mongodb+srv://amontron_db:snehta@cluster1.xqh5m.mongodb.net/AmontronDB?retryWrites=true&w=majority
const data = {
    users: [
        {
            name: "Snehta",
            email: "admin@amontron.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: "Oliver",
            email: "user@amontron.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
 Products:[
    {
        
        name:"OnePlus Nord Blue Marble Smartphone",
        category:"Smartphone",
        image:"/images/p1.jpg",
        price:27999,
        countInStock:10,
        brand:"One+",
        rating:4.7,
        numReviews:200,
        description:"128 GB, 8 GB RAM Blue Marble smartphone"
    },
    {
        
        name:"Men Navy Blue Checked Formal Shirt",
        category:"Cloth",
        image:"/images/p2.jpg",
        price:950,
        countInStock:100,
        brand:"Peter England",
        rating:4.1,
        numReviews:600,
        description:"Navy blue & red Checked formal shirt, has a spread collar,button placket,long sleeves, curved hem"
    },
    {
        
        name:"CRAZORA Women's Cotton Salwar Suit",
        category:"Cloth",
        image:"/images/p3.jpg",
        price:1024,
        countInStock:200,
        brand:"Libas",
        rating:4.3,
        numReviews:1000,
        description:"printed anarkali cocktail gown,Fabric: Rayon Kurta Sleeve Type: 3/4 Sleeve"       
        
    },
    {
        
        name:"LilPicks Boys Green Printed Nehru Jacket",
        category:"Cloth",
        image:"/images/p4.jpg",
        price:450,
        countInStock:30,
        brand:"Lilpicks",
        rating:3.7,
        numReviews:100,
        description:"Green printed Nehru jacket, has a mandarin collar, button closure, straight hem, lining, and 3 welt pockets"
    },
    {
        
        name:"Life is What You Make It",
        category:"Book",
        image:"/images/p5.jpg",
        price:95,
        countInStock:20,
        brand:"Paperwork",
        rating:3.8,
        numReviews:300,
        description:"Life Is What You Make It is based on a love story that has been set in India in the 90s. It has been described by the readers as a book portraying how love, hope and determination can together win over even the destiny. "
    },
    {
        
        name:"Apple MacBook Pro Core i7 9th Gen",
        category:"Laptop",
        image:"/images/p6.jpg",
        price:189990 ,
        countInStock:5,
        brand:"Apple",
        rating:4.9,
        numReviews:700,
        description:"MacBook Pro, 96 W USB Type C Power Adapter, USB Type C Charge Cable (2 m), User Guide, Warranty Documents"
    },
    
    {
        
        name:"Decorative Wall Mounted Wooden Shelves",
        category:"furniture",
        image:"/images/p8.jpg",
        price:769 ,
        countInStock:4,
        brand:"wooden",
        rating:4.6,
        numReviews:1100,
        description:"Pre laminated Particle Wood Board with Natural Wood Grain Finish."
    },
    {
        
        name:"Fast Charging Bluetooth Headset",
        category:"headphone",
        image:"/images/p7.jpg",
        price:1599 ,
        countInStock:15,
        brand:"boat",
        rating:4.5,
        numReviews:7000,
        description:"Bring home this boAt Rockerz 255F headset that features Bluetooth V5.0. Its cVc Noise Cancellation Technology "
    },
    {
        
        name:"amiciSound Concert Ukulele ",
        category:"Ukulele",
        image:"/images/p9.jpg",
        price:5599 ,
        countInStock:8,
        brand:"amiciSound",
        rating:3.5,
        numReviews:200,
        description:"1Ukulele, 1Tuner, 1Strap, 1Set of Picks, 1Carry Bag"
    },
    { 
      
        name:"How The Billionaire CEO Of SpaceX & Tesla Is Shaping Our Future",
        category:"books",
        image:"/images/p11.jpg",
        price:225 ,
        countInStock:12,
        brand:"Paperback",
        rating:4.8,
        numReviews:5000,
        description:
        "The book captures the life and achievements of South African interpreter and innovator, Elon Musk, the brain behind series of successful enterprises such as PayPal, Tesla, SpaceX and Solarcity."
    },
    
    {
        
        name:"Anti-bacterial Alcohol Based Hand Sanitizer",
        category:"Sanitizer",
        image:"/images/p10.jpg",
        price:175 ,
        countInStock:20,
        brand:"Palmolive",
        rating:4.5,
        numReviews:3000,
        description:"Palmolive Anti-Bacterial Hand Sanitizer is an alcohol based hand sanitizer (72.34%) which gives you rinse-free protection on the go and kills 99.9% of germs instantly."
    },
   

]
}
export default data;

