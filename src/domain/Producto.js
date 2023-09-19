class Producto {
    constructor(producto) {
        this.id = producto.id
        this.precio = producto.precio
        this.stock = producto.stock
        this.descripcion = producto.descripcion
        this.nombre = producto.nombre
        this.tipo = producto.tipo
        this.foto = producto.foto
    }

    restarStock(cantidad) {
        this.stock = this.stock - cantidad
    }

    sumarStock(cantidad) {
        this.stock = this.stock + cantidad
    }
}

export default Producto;