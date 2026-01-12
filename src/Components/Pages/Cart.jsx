import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    const updateQuantity = (id, type) => {
        const updated = cartItems.map(item => {
            if (item.id === id) {
                if (type === 'increase') {
                    return { ...item, quantity: item.quantity + 1 };
                } else if (type === 'decrease' && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
    };

    const removeItem = (id) => {
        const updated = cartItems.filter(item => item.id !== id);
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
        window.dispatchEvent(new Event('cartUpdated'));
        toast.error('Artículo eliminado del carrito');
    };

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('S/', ''));
        return acc + price * item.quantity;
    }, 0);

    return (
        <>
            <ol className="section-banner py-3 relative">
                <li className='relative'><Link to='/'>Inicio</Link></li>
                <li className='relative active'><a href="#" className='ps-5'>Carrito</a></li>
            </ol>

            <div className="px-[8%] lg:px-[12%] py-[20px] my-5">
                <h2 className="text-center text-4xl mb-4 font-bold">🧡 Tu carrito</h2>
                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="lead mb-4">Tu carrito esta vacío.</p>
                        <Link to="/" className="btn px-3 py-2 rounded">Volver a la tienda</Link>
                    </div>
                ) : (
                    <div className="grid gap-4 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            {cartItems.map(item => (
                                <div key={item.id} className="card shadow-md rounded-4 mb-3 p-3">
                                    <div className="grid grid-cols-12 items-center gap-4">
                                        <div className="col-span-3">
                                            <img src={item.image} alt={item.Productname} className="w-full rounded-3" />
                                        </div>
                                        <div className="col-span-9 flex flex-col md:flex-row justify-between items-center">
                                            <div className="text-start w-full">
                                                <h5 className="mb-2 font-bold font-bricolage">{item.Productname}</h5>
                                                <p className="text-black mb-1 font-semibold font-bricolage"><span className='font-normal'>Precio: </span> {item.price}</p>
                                                <p className="text-black mb-0 font-semibold font-bricolage"><span className='font-normal'>Total: </span> ${(parseFloat(item.price.replace('S/', '')) * item.quantity).toFixed(2)}</p>
                                            </div>
                                            <div className="flex items-center gap-3 mt-3 md:mt-0">
                                                <button className="btn w-[20px] h-[22px] rounded-sm" onClick={() => updateQuantity(item.id, 'decrease')}>-</button>
                                                <span>{item.quantity}</span>
                                                <button className="btn w-[20px] h-[22px] rounded-sm" onClick={() => updateQuantity(item.id, 'increase')}>+</button>
                                                <button className="btn px-2 py-1 rounded" onClick={() => removeItem(item.id)}>Remover</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-4">
                            <div className="card border-0 shadow-sm rounded-4 p-4">
                                <h4 className="font-bold font-bricolage mb-4">Resumen del carrito</h4>
                                <hr />
                                <div className="flex justify-between mt-2">
                                    <span>Total de artículos</span>
                                    <span>{cartItems.length}</span>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <span>Precio Total</span>
                                    <span className="font-bold font-bricolage">${totalPrice.toFixed(2)}</span>
                                </div>
                                <Link to="/checkout" className="btn px-2 py-1 rounded">
                                    Pasar por la caja
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>

        </>

    );
}

export default Cart;
