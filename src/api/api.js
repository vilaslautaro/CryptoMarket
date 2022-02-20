const productos = [
    {
        id: 1,
        title: 'samsung s21 ultra',
        description: '5G 256gb 12GB RAM',
        price: '1000',
        picture: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1643740687/CryptoMarket/productos/te2683_yugx81.webp',
        category: 'product',
        subcategory: 'celulares',
        stock: 5,
        marca: 'Samsung'
    },
    {
        id: 2,
        title: 'Macbook Pro M1',
        description: "14' 1TB SSD 16GB RAM",
        price: '2600',
        picture: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1643740718/CryptoMarket/productos/500_500-554-APP-012_mssnsr.jpg',
        category: 'product',
        subcategory: 'notebook',
        stock: 0,
        marca: 'Apple'

    },
    {
        id: 3,
        title: 'Apple Watch S3',
        description: '42mm Bluetooth Wifi',
        price: '400',
        picture: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644254324/CryptoMarket/productos/41AEqwv9ZQL_zh3mz1.jpg',
        category: 'product',
        subcategory: 'relojes',
        stock: 10,
        marca: 'Apple'
    },
    {
        id: 4,
        title: 'Asesoramiento en Mineria Cripto',
        description: 'Asesoria en mineros para ETH - Precio a convenir',
        price: '0',
        picture: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644248949/CryptoMarket/productos/pexels-nana-dua-4581902_c7xwib.jpg',
        category: 'service',
        subcategory: 'mineros',
        stock: 15,
        marca: 'Mineros'
    },
    {
        id: 5,
        title: 'Alquiler Depto Miami Lujo vista playa',
        description: '5Amb - Todos los servicios - Vista a la Playa',
        price: '200',
        picture: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644253694/CryptoMarket/productos/D_NQ_NP_993093-MLA47167731534_082021-O_fb1m8n.jpg',
        category: 'service',
        subcategory: 'Alquileres',
        stock: 20,
        marca: 'Depto Miami'
    },
    {
        id: 6,
        title: 'Asesoría impositiva en Criptomonedas',
        description: '¿Hace poco que entraste al mundo cripto (o ya llevas un tiempo) y te preocupa saber si AFIP te puede reclamar algo? Estoy acá para ayudarte.',
        price: '30',
        picture: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644253962/CryptoMarket/productos/contable_ho3d7s.jpg',
        category: 'service',
        subcategory: 'profesionales',
        stock: 10000,
        marca: 'Asesoria contador'
    }
];

// creamos una promesa a la que le decimos que si es exitosa, cargue los productos
const promesa = new Promise(function(resolve, reject) {
    setTimeout(() =>{
        resolve(productos);
    }, 50);
});

// creamos una funcion que retorne la promesa con los productos ya cargados
async function getItem(){
    try{
    let misProductos = await promesa;
    return misProductos;
    }
    catch{
        console.log('Hubo un error');
    }
}


export {
    getItem
};