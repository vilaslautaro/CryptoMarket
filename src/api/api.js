import { collection, getDocs } from 'firebase/firestore';
import {db} from '../firebase'


// creamos una promesa a la que le decimos que si es exitosa, cargue los productos
function getItem(){
    return new Promise(function(resolve, reject) {
    
        getDocs(collection(db, 'productos'))
        .then(snapshot => {
            const products = snapshot.docs.map( doc => ({ id: doc.id, ... doc.data() }) )
            resolve(products)
        }).catch(error =>{
            console.log(error)
        })

    });
}

export {
    getItem
};

