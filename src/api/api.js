import { collection, getDocs } from 'firebase/firestore';
import {db} from '../firebase'

function getItem(){

    return new Promise(function(resolve) {
        getDocs(collection(db, 'productos'))
        .then(snapshot => {
            const products = snapshot.docs.map( doc =>  ( {id: doc.id, ...doc.data()} )  )
            resolve(products)
        }).catch(error =>{
            console.log(error)
        })

    });
}

export default getItem

