import './subNavBar.css'

export default function SubNavBar() {
    return (
        <div className='header__SubNav'>
            <form className='subNav__form'>
                <input className='form__Search' type='text' placeholder='Encontrá el producto que buscas'></input>
                <input className='form__btnSubmit' type='submit' value='Buscar'></input>
            </form>
        </div>
    )
}