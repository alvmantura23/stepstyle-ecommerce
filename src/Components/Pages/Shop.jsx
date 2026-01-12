import React, { useState } from 'react';
import productsData from '../../Products.json';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Shop() {
    const [filterSortOption, setFilterSortOption] = useState('all');
    const navigate = useNavigate();

    const handleFilterSort = () => {
        let filtered = [...productsData];

        if (filterSortOption === 'Nuevo' || filterSortOption === 'En Venta') {
            filtered = filtered.filter(product => product.tag === filterSortOption);
        }

        if (filterSortOption === 'low') {
            filtered.sort((a, b) =>
                parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
            );
        }

        if (filterSortOption === 'high') {
            filtered.sort((a, b) =>
                parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
            );
        }

        return filtered;
    };

    const displayedProducts = handleFilterSort();

    const addToWishlist = (product) => {
        const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!existing.some(p => p.id === product.id)) {
            const updated = [...existing, product];
            localStorage.setItem('wishlist', JSON.stringify(updated));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${product.Productname} agregado a tu lista de favoritos!`);
        } else {
            toast.info(`${product.Productname} ya está en tu lista de favoritos.`);
        }
    };


    const addToCart = (product) => {
        const existing = JSON.parse(localStorage.getItem('cart')) || [];
        const alreadyInCart = existing.find(p => p.id === product.id);

        if (!alreadyInCart) {
            const updatedProduct = { ...product, quantity: 1 };
            const updatedCart = [...existing, updatedProduct];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            window.dispatchEvent(new Event('cartUpdated'));
            toast.success(`${product.Productname} agregado en tu carrito!`);
        } else {
            toast.info(`${product.Productname} ya está en el carrito.`);
        }
    };

    return (
        <>
            <div className="banner-section about-banner-section flex justify-center items-center">
                <div className="banner-section-content text-center z-10">
                    <h6 className='uppercase'>- StepStyle</h6>
                    <h1 className='text-6xl font-semibold font-bricolage text-[#ff823a]'><span className='text-white font-bricolage'>Nuestra </span> Tienda</h1>
                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-[20px]">
                <div className="">
                    <div className="my-4 mx-auto">
                        <div className="flex justify-between items-center flex-wrap gap-3">
                            <div className="text-gray-500 text-[1.1rem]">
                                Mostrando <strong>{displayedProducts.length}</strong> productos{displayedProducts.length !== 1 && 's'} de "
                                {filterSortOption === 'all' ? 'Todo' : filterSortOption.charAt(0).toUpperCase() + filterSortOption.slice(1)}"
                            </div>
                            <div>
                                <select
                                    className="py-2 px-3 rounded text-base appearance-none min-w-[260px] bg-gray-100 border-0"
                                    value={filterSortOption}
                                    onChange={(e) => setFilterSortOption(e.target.value)}
                                >
                                    <option value="all">Todos los Productos</option>
                                    <option value="Nuevo">Nuevos Productos</option>
                                    <option value="En Venta">Productos en venta</option>
                                    <option value="low">Precio: De menor a mayor</option>
                                    <option value="high">Precio: De mayor a menor</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {displayedProducts.map(product => (
                            <div key={product.id} className="product-item text-center relative">
                                <div className="product-image w-full relative overflow-hidden">
                                    <img src={product.image} alt="product" className="w-full h-auto" />
                                    <img src={product.secondImage} alt="product" className="w-full h-auto" />

                                    <div className="product-icons gap-3 flex justify-center items-center absolute  transition duration-300">
                                        <div className="product-icon cursor-pointer" title="Add to Wishlist" onClick={() => addToWishlist(product)}>
                                            <i className="bi bi-heart text-lg"></i>
                                        </div>
                                        <div className="product-icon cursor-pointer" title="Add to Cart" onClick={() => addToCart(product)}>
                                            <i className="bi bi-cart3 text-lg"></i>
                                        </div>
                                    </div>


                                    {product.tag && (
                                        <span className={`badge text-white absolute top-2 left-2 text-xs px-2 py-1 rounded 
                                             ${product.tag === 'Nuevo' ? 'bg-red-600' : 'bg-green-600'}`}>
                                            {product.tag}
                                        </span>
                                    )}
                                </div>

                                <Link to={`/product/${product.id}`} className="no-underline text-black">
                                    <div className="product-content pt-3">
                                        {product.oldprice ? (
                                            <span className="price">
                                                <span className="line-through text-gray-400 mr-2">{product.oldprice}</span>
                                                <span className="font-bold text-red-600">{product.price}</span>
                                            </span>
                                        ) : (
                                            <span className="price">{product.price}</span>
                                        )}
                                        <h3 className="title pt-1">{product.Productname}</h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

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
            />
        </>
    );
}

export default Shop;
