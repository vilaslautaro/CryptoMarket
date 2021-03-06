import emptyCart from './lottiesJson/emptyCart.json'
import loading from './lottiesJson/loading.json'
import sad from './lottiesJson/sad.json'
import error from './lottiesJson/error.json'
import success from './lottiesJson/success.json'

const configLoading = {
    animationData: loading,
    autoplay: true,
    loop: false,
    style: {
        width: '20%',
        margin: '0 auto'
    }
}

const configError = {
    animationData: error,
    autoplay: true,
    loop: false,
    style: {
        width: '20%',
        margin: '0 auto'
    }
}

const configSad = {
    animationData: sad,
    autoplay: true,
    loop: false,
    style: {
        width: '20%',
        margin: '0 auto'
    }
}

const configEmptyCart = {
    animationData: emptyCart,
    autoplay: true,
    loop: false,
    style: {
        width: '25%',
        margin: '0 auto 40px'
    }
}

const configSuccess = {
    animationData: success,
    autoplay: true,
    loop: false,
    style: {
        width: '20%',
        margin: '0 auto'
    }
}

export {configEmptyCart, configLoading, configSad, configError, configSuccess}