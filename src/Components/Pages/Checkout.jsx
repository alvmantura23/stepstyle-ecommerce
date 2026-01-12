import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {

    const [deliveryOption, setDeliveryOption] = useState("ship");

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);


    const handlePlaceOrder = () => {
        toast.success('Order Placed Successfull');
    };

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return acc + price * item.quantity;
    }, 0);

    const estimatedTax = (totalPrice * 0.1).toFixed(2);

    return (
        <>
            <h2 className="text-center text-5xl mb-4 font-bold font-bricolage mt-[15%] md:mt-[5%]">Checkout!</h2>
            <div className="px-[8%] lg:px-[12%] py-[50px]">
                <div className="grid gap-4 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <h5 className='mb-2'>Contacto</h5>
                        <div className="mb-3">
                            <input type="email" className="border w-full p-2" placeholder="Dirección de correo electrónico o su número de teléfono móvil" />
                        </div>
                        <div className="form-check mb-4">
                            <input className="me-2" type="checkbox" id="newsCheck" />
                            <label className="form-check-label" htmlFor="newsCheck">
                                Envíame un correo electrónico con noticias y ofertas.
                            </label>
                        </div>

                        <h5 className='mb-2'>Delivery</h5>
                        <div>
                            <div className="mb-3">
                                <div className="btn-group btn-form w-full" role="group">
                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="deliveryOption"
                                        id="ship"
                                        checked={deliveryOption === "ship"}
                                        onChange={() => setDeliveryOption("ship")}
                                    />
                                    <label className="btn px-3 mx-2 py-[2px] rounded" htmlFor="ship">
                                        Ship
                                    </label>

                                    <input
                                        type="radio"
                                        className="btn-check"
                                        name="deliveryOption"
                                        id="pickup"
                                        checked={deliveryOption === "pickup"}
                                        onChange={() => setDeliveryOption("pickup")}
                                    />
                                    <label className="btn px-3 py-[2px] ms-2 rounded" htmlFor="pickup">
                                        Recogida en tienda
                                    </label>
                                </div>
                            </div>

                            {deliveryOption === "ship" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                    <div className="mb-3 md:col-span-2">
                                        <select className="form-select border p-1">
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                            <option>Estados Unidos</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="border w-full p-2"
                                            placeholder="Primer Nombre (opcional)"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="border w-full p-2"
                                            placeholder="Segundo Nombre"
                                        />
                                    </div>
                                </div>
                            )}

                            {deliveryOption === "pickup" && (
                                <div className=" my-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h6 className="fw-semibold mb-0">Store locations</h6>
                                        <a href="#" className="text-decoration-none text-sm">
                                            Canbiar dirección
                                        </a>
                                    </div>

                                    <div
                                        className="alert alert-danger p-2 flex flex-col rounded-3"
                                        role="alert"
                                        style={{
                                            color: "#7b1c1c",
                                            backgroundColor: "#fef6f6",
                                            border: "1px solid rgba(145, 137, 137, 0.59)",
                                        }}
                                    >
                                        <div className="flex items-center mb-1">
                                            <i
                                                className="bi bi-exclamation-circle-fill me-2"
                                                style={{ fontSize: "1rem" }}
                                            ></i>
                                            <strong>No hay tiendas disponibles con tu artículo</strong>
                                        </div>
                                        <div>
                                            <a
                                                href="#"
                                                className="underline"
                                                style={{ color: "#7b1c1c" }}
                                            >
                                                Enviar a dirección
                                            </a>{" "}
                                            en cambio
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <input type="text" className="border w-full p-2" placeholder="Dirección" />
                        </div>

                        <div className="mb-3">
                            <input type="text" className="border w-full p-2" placeholder="Apartamento, suite, etc. (opcional)" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div>
                                <input type="text" className="border w-full p-2" placeholder="Ciudad" />
                            </div>
                            <div>
                                <input type="text" className="border w-full p-2" placeholder="Código Postal (opcional)" />
                            </div>
                        </div>

                        <div className="form-check mb-4">
                            <input type="checkbox" id="saveInfo" />
                            <label className="ms-1" htmlFor="saveInfo">
                                Guardár esta información para la próxima vez
                            </label>
                        </div>

                        <h6 className='mb-2'>Método de envío</h6>
                        <div className="rounded p-3 flex justify-between items-center" style={{ border: "1px solid darkblue", backgroundColor: "#f0f5ff" }}>
                            <span>Estándar</span>
                            <span className="text-green-600">GRATIS</span>
                        </div>

                        <div className=" my-5">
                            <h4 className="fw-semibold">Pago</h4>
                            <p className="text-gray-500 mb-3">Todas las transacciónes son seguras y encriptadas</p>

                            <div className="border rounded">
                                <div className="bg-gray-100 border-b flex justify-between items-center p-3">
                                    <span className="fw-semibold">Tarjeta de Credito</span>
                                    <div className="bg-yellow-400 text-white rounded px-2 py-1 font-bold text-sm">B</div>
                                </div>

                                <div className="p-3 bg-gray-100">
                                    <div className="mb-3">
                                        <input type="text" className="border w-full p-2" placeholder="Número de Tarjeta" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <input type="text" className="border w-full p-2" placeholder="Fehcha de expiración (MM / YY)" />
                                        </div>
                                        <div>
                                            <input type="text" className="border w-full p-2" placeholder="Código de Seguridad" />
                                        </div>
                                    </div>

                                    <div className="mb-3 mt-3">
                                        <input type="text" className="border w-full p-2" placeholder="Nombre de la Tarjeta" />
                                    </div>

                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="billingCheck" checked />
                                        <label className="form-check-label" htmlFor="billingCheck">
                                            Utilice la dirección de envío como dirección de facturación
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button className="btn w-full mt-4 py-2 transition-all fw-semibold">Pagar Ahora</button>

                            <div className="mt-5 border-t pt-3">
                                <a href="#" className="text-decoration-none text-sm underline">Política de privacidad</a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <h5 className="fw-bold mb-3 font-bricolage"><i className="ri-shopping-cart-2-line me-2 text-[#ff823a]"></i>Resumen del pedido</h5>
                            {cartItems.length === 0 ? (
                                <p className="text-gray-500">Tu carrito esta vacío.</p>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="flex items-center mb-3 border-b pb-2">
                                        <img src={item.image} alt={item.Productname} className="rounded" width="60" height="60" style={{ objectFit: 'cover', marginRight: '10px' }} />
                                        <div className="flex-grow">
                                            <h6 className="mb-1 font-bricolage">{item.Productname}</h6>
                                            <small className="text-gray-500">Qty: {item.quantity}</small>
                                        </div>
                                        <div className="fw-semibold">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</div>
                                    </div>
                                ))
                            )}
                            <hr />
                            <div className="flex justify-between text-sm pt-2">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Envío</span>
                                <span>Introducir dirección</span>
                            </div>
                            <div className="flex justify-between text-sm mb-3">
                                <span>Impuesto estimado</span>
                                <span>${estimatedTax}</span>
                            </div>
                            <div className="flex justify-between font-bold border-t pt-2">
                                <span>Total</span>
                                <span className='font-bricolage'>${(totalPrice + parseFloat(estimatedTax)).toFixed(2)}</span>
                            </div>
                            <button className="btn w-full mt-3 mb-5 rounded transition-all p-2" onClick={handlePlaceOrder}>
                                <i className="ri-secure-payment-line me-2"></i>Place Order
                            </button>

                            <Link to="/Cart" className="btn p-2 rounded px-3 transition-all text-decoration-none">
                                <i className="ri-arrow-left-line me-1"></i>Back to Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}

export default Checkout;
