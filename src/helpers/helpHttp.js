export const helpHttp = ()=>{
    const customFetch = (endPoint, options) =>{
        const defaultHeader = {
            accept: "application/json"
        }

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";

        options.headers = options.headers ? {...options.headers, defaultHeader} : defaultHeader;

        options.body = JSON.stringify(options.body) || false;

        if(!options.body) delete options.body;

        console.log(options);

        setTimeout(() => controller.abort(), 5000);

        return fetch(endPoint, options)
            .then(res => res.ok ? res.json() : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "There was an error"
            }))
            .catch(err => err)
    }

    /**
     * Realiza peticiones de tipo GET
     * @param {String} url 
     * @param {Object} options opcional 
     * @returns el resultado de la consulta 
     */
    const get = (url, options = {})=> customFetch(url, options);
    /**
     * Realiza peticiones de tipo POST
     * @param {*} url 
     * @param {*} options opcinal
     * @returns el resultado de la consulta 
     */
    const post = (url, options = {})=> {
        options.method = "POST";
        return customFetch(url, options);
    }
    /**
    * Realiza peticiones de tipo PUT
    * @param {*} url 
    * @param {*} options opcinal
    * @returns el resultado de la consulta 
    */
    const put = (url, options = {})=> {
        options.method = "PUT";
        return customFetch(url, options);
    }

    return {get, post, put}
}