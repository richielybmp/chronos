const Utils = {
    getScreenWidth: (larguraTablet) => {
        const isSSR = typeof window === 'undefined'
        return isSSR ? larguraTablet : window.innerWidth
    }
}

export default Utils