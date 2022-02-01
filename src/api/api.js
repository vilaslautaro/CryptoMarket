const products = [
    {
        id: 1,
        title: 'samsung s21 ultra',
        description: '5G 256gb 12GB RAM',
        price: '1000',
        picture: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1643740687/te2683_yugx81.webp',
        category: 'celular',
        stock: 5,
        marca: 'Samsung'
    },
    {
        id: 2,
        title: 'Macbook Pro M1',
        description: "14' 1tb ssd 16gb ram",
        price: '2600',
        picture: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1643740718/500_500-554-APP-012_mssnsr.jpg',
        category: 'notebook',
        stock: 0,
        marca: 'Apple'

    },
    {
        id: 3,
        title: 'Apple Watch S3',
        description: '42mm Bluetooth Wifi',
        price: '400',
        picture: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1643740744/images_miatnd.jpg',
        category: 'reloj',
        stock: 10,
        marca: 'Apple'
    }
];

const promesa = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(products);
    }, 2000)
});

function getItem(){
    return promesa;
}


export {
    getItem
};