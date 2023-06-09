import axios from 'axios'
const apiUsuario = axios.create({
    baseURL: 'https://64640328043c103502b0cbd6.mockapi.io/api/v1/usuarios',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargarUsuario() {
        try {
            const response = await apiUsuario.get('/lista');
            console.log(response.data)
            return response.data
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async agregarUsuario(elem) {
        try {
            await apiUsuario.post('/lista', elem);
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async eliminarUsuario(id) {
        try {
            await apiUsuario.delete("/lista/" + id)
        } catch (error) {
            throw "Error de conexion"
        }
    },

    async modificarUsuario(id, elem) {
        try {
            await apiUsuario.put("/lista/" + id, elem)
        } catch (error) {
            throw "Error de conexion"
        }
    },
}