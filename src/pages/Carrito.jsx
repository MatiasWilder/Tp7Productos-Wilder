import React from "react";
import axios from 'axios';


function Carrito() {
    const [productosDestacados, setProductosDestacados] = useState([]);
    const [loadingProductos, setLoadingProductos] = useState(true);
    const [errorProductos, setErrorProductos] = useState(null);
  
    useEffect(() => {
      setLoadingProductos(true);
      setErrorProductos(null);
      axios.get('https://fakestoreapi.com/products?limit=4')
        .then(res => {
          setProductosDestacados(res.data);
          setLoadingProductos(false);
        })
    }, []);
  
    return (
     <div></div>
    );
  }
  
  export default Carrito;