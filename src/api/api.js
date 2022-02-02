const productos = [
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

// creamos una promesa a la que le decimos que si es exitosa, cargue los productos
const promesa = new Promise(function(resolve, reject) {
    setTimeout(() =>{
        resolve(productos);
    }, 500);
});

// creamos una funcino que retorne la promesa con los productos ya cargados
function getItem(){
    return promesa;
}


export {
    getItem
};