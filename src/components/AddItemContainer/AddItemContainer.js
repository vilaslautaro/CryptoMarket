import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import {getStorage, uploadBytes, ref, getDownloadURL} from 'firebase/storage'
import './addItemContainer.css'

function AddItemContainer() {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [subcategory, setSubcategory] = useState("")
    const [description, setDescription] = useState("")
    const [marca, setMarca] = useState("")
    const [picture, setPicture] = useState()
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)

    const handleTitleChange = event => setTitle(event.target.value)
    const handleCategoryChange = event => setCategory(event.target.value)
    const handleSubcategoryChange = event => setSubcategory(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handleMarcaChange = event => setMarca(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    const handleStockChange = event => setStock(event.target.value)
    const handlePictureChange = event => setPicture(event.target.files[0])

    const onSubmit = async (event) => {
        event.preventDefault()
        // validacion de campos completados
        if ([title, category, subcategory, marca, stock, price].some(field => field === "")) {

            let pictureURL="http://via.placeholder.com/200?text=Not+image"
            const productCollection = collection(db, 'productos')
            // codigo para subir imagenes
            if(typeof picture !== "undefined"){
                const storage = getStorage();
                const pictureName=(+ new Date().toString(15));
                const storageReferencia = ref(storage, `producto/${pictureName}`);

                const uploadTask = await uploadBytes(storageReferencia, picture)
                pictureURL = await getDownloadURL(uploadTask.ref)
            }
            // referencia a mi coleccion
            // creo mi nuevo producto
            const miProducto = {
                title: title,
                category: category,
                subcategory: subcategory,
                description: description,
                marca: marca,
                price: price,
                stock: stock,
                picture: pictureURL
            }

            addDoc(productCollection, miProducto)
                .then(doc => {
                    console.log('El producto fue añadido correctamente', doc.id)
                })
                .catch((error) => {
                    console.log('el error es ' + error)
                })
        } else {
            console.log('hay valores vacios')
        }
    }

    return (
        <div className='formulario'>
            <h1 className='formulario__title'>Agregar producto</h1>
            <form onSubmit={onSubmit}>
                <div className='formulario__boxInput'>
                    <p className='formulario__subtitulo'>Nombre del producto</p>
                    <input name='title' value={title} className='formulario__input' onChange={handleTitleChange} type='text' />
                </div>
                <div className='formulario__boxInput'>
                    <p className='formulario__subtitulo'>Categoria del producto</p>
                    <select name="category" value={category} onChange={handleCategoryChange} type='text'>
                        <option value="product">product</option>
                        <option value="service">service</option>
                    </select>
                </div>
                <div className='formulario__boxInput'>
                    <p className='formulario__subtitulo'>Subcategoria</p>
                    <input name='subcategory' value={subcategory} className='formulario__input' onChange={handleSubcategoryChange} type='text' />
                </div>
                <div className='formulario__boxInput'>
                    <p className='formulario__subtitulo'>Descripcion</p>
                    <textarea name="description" value={description} onChange={handleDescriptionChange} type='text' />
                </div>
                <div className='formulario__boxInput'>
                    <p className='formulario__subtitulo'>Marca</p>
                    <input name='marca' value={marca} className='formulario__input' onChange={handleMarcaChange} type='text' />
                </div>
                <div className='formulario__boxInput'>
                    <p className='formulario__subtitulo'>Precio</p>
                    <input name='price' value={price} className='formulario__input' onChange={handlePriceChange} type='number' />
                </div>
                <div className='formulario__boxInput'>
                    <p className='formulario__subtitulo'>Stock</p>
                    <input name='stock' value={stock} className='formulario__input' onChange={handleStockChange} type='number' />
                </div>
                <div className='formulario__boxInput'>
                    <p className='formulario__subtitulo'>Imagen</p>
                    <input name='picture' className='formulario__input' onChange={handlePictureChange} type='file' />
                </div>
                <button className='formulario__btnSubmit' type='submit'>Enviar</button>
            </form>

        </div>
    )

}

export default AddItemContainer
