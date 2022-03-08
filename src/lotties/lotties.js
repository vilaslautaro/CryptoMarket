import emptyCart from './emptyCart.json'
import loading from './loading.json'

const configEmptyCart = {
    animationData: emptyCart,
    autoplay: true,
    loop: true,
    style: {
        width: '20%',
        margin: '0 auto 40px'
    }
}

const configLoading = {
    animationData: loading,
    autoplay: true,
    loop: true,
    style: {
        width: '20%',
        margin: '0 auto'
    }
}

export {configEmptyCart, configLoading}