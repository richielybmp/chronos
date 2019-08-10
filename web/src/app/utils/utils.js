const Utils = {
    getScreenWidth: (larguraTablet) => {
        const isSSR = typeof window === 'undefined'
        return isSSR ? larguraTablet : window.innerWidth
    },

    formatDateString: (date) => {
        let objData = new Date(date);
        const dataFormatada = new Date(objData.getTime() + objData.getTimezoneOffset() * 60000).toLocaleString("pt-br").split(' ')[0];
        return dataFormatada
    }
}

export default Utils