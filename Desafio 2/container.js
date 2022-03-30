const fs = require('fs') 

module.exports = class Container {
    constructor(name) {
        this.name = name
    }

    //Recibe un objeto, lo guarda en el archivo y devuelve el id asignado
    async save(object) {
        try {
            const data = await fs.promises.readFile(`./${this.name}`, 'utf-8')
            const result = JSON.parse(data)
            const newData = [...result]
            const payload = {
                title: object.title,
                price: object.price,
                thumbnail: object.thumbnail,
                id: result.length + 1
            }
            newData.push(payload)
            await fs.promises.writeFile(`./${this.name}`, JSON.stringify(newData))
            return console.log('guardado\n')
        }
        catch (err){
            console.log('[Falla al guardar]', err)
        await fs.promises.writeFile(`./${this.name}`, '[]')
        console.log('archivo creado, vuelva a intentar\n')
        }
    }

    // Recibe el id y devuelve el objeto con ese id, o null si no está.
    async getById(id) {
    
        const data = fs.readFileSync(`./${this.name}`)
        const dataJson = JSON.parse(data)
        return dataJson.find((item) => item.id === id)
    }

    //Devuelve un array con los objetos presentes en el archivo
    async getAll() {
        try {
            const data = fs.readFileSync(`./${this.name}`, 'utf-8')
            const dataJson = JSON.parse(data)
            return dataJson
        } catch (err) {
            return err
        }
    }

    //Elimina del archivo el objeto con el id buscado.
    deleteById(id) {
        const data = fs.readFileSync(`./${this.name}`)
        const dataJson = JSON.parse(data)
        const newData = dataJson.filter((item) => item.id === id)
        fs.writeFileSync(`./${this.name}`, JSON.stringify(newData))
    }

    //Elimina todos los objetos presentes en el archivo.
    async deleteAll() {
        try {
            await fs.promises.unlink(`./${this.name}`)
            return 'borrado\n'
        } catch (err) {
            return `[Falla al borrar] ${error}`
        }
    }
}