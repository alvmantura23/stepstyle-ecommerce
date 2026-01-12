import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setWishlist(storedWishlist);
        setCart(storedCart);
    }, []);

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        window.dispatchEvent(new Event('cartUpdated'));
        toast.error('Item removed from cart');
    };

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        let updatedCart;

        if (existingProduct) {
            updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            updatedCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));

        // Show toast instead of alert
        toast.success(`${product.Productname} added to your cart!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <ol className="section-banner py-3 relative">
                <li className='relative'><Link to='/'>Inicio</Link></li>
                <li className='relative active'><a href="#" className='ps-5'>Lista de favoritos</a></li>
            </ol>

            <div className="px-[8%] lg:px-[12%] py-[50px] my-5 ">
                <h2 className="text-center font-bold mb-5 text-4xl">🧡 Tu lista de favoritos</h2>

                {wishlist.length === 0 ? (
                    <div className="text-center">
                        <p className="text-lg text-gray-500 mb-4">Tu lista de favoritos está vacía.</p>
                        <Link to="/shop" className="btn inline-flex px-3 py-2 rounded items-center gap-2">
                            <i className="ri-shopping-bag-line me-2"></i> Explorar Productos
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {wishlist.map(product => (
                            <div className="col" key={product.id}>
                                <div className="card h-full shadow-md bg-white rounded">
                                    <div className="relative overflow-hidden" style={{ height: '250px', backgroundColor: '#f8f9fa' }}>
                                        <img
                                            src={product.image || '/Images/placeholder.jpg'}
                                            alt={product.Productname}
                                            className="card-img-top h-full w-full object-cover"
                                        />
                                        {product.tag && (
                                            <span className={`badge absolute top-0 right-0 m-2 text-white px-2 py-1 text-sm rounded ${product.tag === 'Nuevo' ? 'bg-red-600' : 'bg-green-600'}`}>
                                                {product.tag}
                                            </span>
                                        )}
                                    </div>
                                    <div className="card-body flex flex-col p-4">
                                        <h5 className="card-title text-lg font-semibold">{product.Productname}</h5>
                                        <p className="card-text text-xl font-semibold text-orange-500">{product.price}</p>
                                        <div className="mt-3 flex justify-between gap-2">
                                            <button
                                                className="btn p-2 rounded w-full"
                                                onClick={() => addToCart(product)}
                                            >
                                                <i className="ri-shopping-cart-2-line me-1"></i> Añadir al Carrito
                                            </button>
                                            <button
                                                className="btn p-2 rounded w-full"
                                                onClick={() => removeFromWishlist(product.id)}
                                            >
                                                <i className="ri-delete-bin-line me-1"></i> Remover
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <ToastContainer />
            </div>

        </>

    );
}

export default Wishlist;
