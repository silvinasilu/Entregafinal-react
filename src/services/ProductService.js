import { getDocs, collection } from "firebase/firestore";
import dataBase from "../firebase/firebaseConfig";

class ProductoService {

    buscarProductos() {
        return getDocs(collection(dataBase, "productos"))
            .then(querySnapshot => querySnapshot
                .docs
                .map((doc, index) => ({...doc.data(), id: ++index}))
            );
    }
}

const productoService = new ProductoService();
export default productoService;