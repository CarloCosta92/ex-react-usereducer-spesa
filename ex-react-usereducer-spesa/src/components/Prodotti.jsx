import { useState } from "react";

const Prodotti = () => {
    // Aggiungi uno stato locale addedProducts(inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
    const [addedProducts, setAddedProducts] = useState([]);

    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];
    // Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
    // Al click del bottone, usa una funzione addToCart per:
    // Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
    // Se il prodotto è già nel carrello, ignora l’azione.
    const addToCart = (product) => {
        const alreadyAdded = addedProducts.find(item => item.name === product.name);
        if (!alreadyAdded) {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
        }
    }

    return (
        <>
            <h1>Lista Prodotti</h1>
            <div className="card">
                <ul className="list-group">
                    {products.map((el, index) => (
                        <div className="card-body" key={index}>
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text"> Prezzo: {el.price}€</p>
                            <button onClick={() => addToCart(el)} className="btn btn-primary">
                                Aggiungi al carrello
                            </button>
                        </div>
                    ))}
                </ul>
            </div>

            {
                addedProducts.length > 0 && (
                    <div className="mt-4">
                        <h2>Prodotti nel carrello</h2>
                        <ul className="list-group">
                            {addedProducts.map((el, index) => (
                                <li key={index} className="list-group-item">
                                    <strong>{el.name}</strong> - {el.price} € - Quantità: {el.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </>
    )

}

export default Prodotti