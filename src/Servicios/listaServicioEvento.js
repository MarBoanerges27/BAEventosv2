import axios from 'axios'
const apiEvento = axios.create({
    baseURL: 'https://64640328043c103502b0cbd6.mockapi.io/api/v1/eventos',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargarEvento() {
        try {
            const response = await apiEvento.get('/');
            return response.data
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async agregarEvento(elem) {
        try {
            await apiEvento.post('/', elem);
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async eliminarEvento(id) {
        try {
            await apiEvento.delete("/" + id)
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async modificarEvento(id) {
        try {
            const elem = { ...this.elemento }
            await apiEvento.put("/" + id, elem)
            await cargarLista()
        } catch (error) {
            throw "Error de conexion"
        }
    },

}