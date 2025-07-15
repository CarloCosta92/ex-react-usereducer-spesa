import { useState } from "react";

const Prodotti = () => {
    const [addedProducts, setAddedProducts] = useState([]);

    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    const addToCart = (product) => {
        const alreadyAdded = addedProducts.find(item => item.name === product.name);
        if (alreadyAdded) {
            updateProductQuantity(product.name);
        } else {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
        }
    };

    const updateProductQuantity = (productName) => {
        const updatedProducts = addedProducts.map(item =>
            item.name === productName
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setAddedProducts(updatedProducts);
    };

    const removeFromCart = (productName) => {
        const updated = addedProducts.filter(item => item.name !== productName);
        setAddedProducts(updated);
    };

    const calculateTotal = () => {
        return addedProducts
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2);
    };

    return (
        <>
            <h1>Lista Prodotti</h1>
            <div className="card">
                <ul className="list-group">
                    {products.map((el, index) => (
                        <div className="card-body" key={index}>
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text">Prezzo: {el.price} €</p>
                            <button onClick={() => addToCart(el)} className="btn btn-primary">
                                Aggiungi al carrello
                            </button>
                        </div>
                    ))}
                </ul>
            </div>

            {addedProducts.length > 0 && (
                <div className="mt-4">
                    <h2>Prodotti nel carrello</h2>
                    <ul className="list-group">
                        {addedProducts.map((el, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>
                                    <strong>{el.name}</strong> - {el.price} € - Quantità: {el.quantity}
                                </span>
                                <button
                                    onClick={() => removeFromCart(el.name)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Rimuovi dal carrello
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h4 className="mt-3">Totale da pagare: {calculateTotal()} €</h4>
                </div>
            )}
        </>
    );
};

export default Prodotti;
