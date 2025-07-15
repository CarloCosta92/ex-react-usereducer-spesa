const Prodotti = () => {

    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    return (
        <>
            <h1>Lista Prodotti</h1>
            <div className="card">
                <ul className="list-group">
                    {products.map((el, index) => (
                        <div className="card-body" key={index}>
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text"> Prezzo: {el.price}€</p>
                        </div>
                    )

                    )}
                </ul>
            </div>
        </>
    )

}

export default Prodotti