import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Data
import products from '../../Products.json';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from "swiper/modules"

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-fade";


const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id == id);

    const [mainImage, setMainImage] = useState('');
    const [images, setImages] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (product) {
            setMainImage(product.image);
            setImages([product.image, product.secondImage].filter(Boolean));
            setQuantity(1);
        }
    }, [product]);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find((item) => item.id == product.id);

        if (!existing) {
            cart.push({ ...product, quantity });
            localStorage.setItem('cart', JSON.stringify(cart));
            window.dispatchEvent(new Event('cartUpdated'));
            toast.success(`${product.Productname} añadido al carrito!`);
        } else {
            toast.info(`${product.Productname} ya está en el carrito.`);
        }
    };

    const addToWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const exists = wishlist.some((item) => item.id == product.id);

        if (!exists) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${product.Productname} agregado a la lista de favoritos!`);
        } else {
            toast.info(`${product.Productname} ya está en la lista de deseos.`);
        }
    };

    const colors = ['#000000', '#7B3F00', '#9BBEC8'];

    const [activeTab, setActiveTab] = useState("description");

    return (
        <>
            <ToastContainer />
            <div className="banner-section about-banner-section flex justify-center items-center">
                <div className="banner-section-content text-center z-10">
                    <h6 className='uppercase'>- StepStyle</h6>
                    <h1 className='text-6xl font-semibold font-bricolage text-[#ff823a]'><span className='text-white font-bricolage'>{product.Productname} </span> </h1>
                </div>
            </div>

            <div className='px-[8%] lg:px-[12%] py-[50px]'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div className="flex flex-col-reverse lg:flex-row gap-4">
                        <div className="flex lg:flex-col gap-4 w-full lg:w-1/4">
                            {images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Thumb ${idx}`}
                                    onClick={() => setMainImage(img)}
                                    className={`w-full h-24 rounded-lg object-cover ${mainImage === img ? 'border-black' : 'border-gray-200'
                                        } cursor-pointer`}
                                />
                            ))}
                        </div>

                        <div className="w-full lg:w-3/4">
                            <img src={mainImage} alt="Main" className="w-full h-auto object-contain rounded-lg" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-2">{product.Productname}</h2>
                        <p className="text-2xl text-gray-700 font-semibold mb-4">{product.price}</p>

                        <p className="mb-2 font-medium">Color:</p>
                        <div className="flex gap-2 mb-4">
                            {colors.map((color, idx) => (
                                <div
                                    key={idx}
                                    className="w-6 h-6 rounded-full border border-gray-400"
                                    style={{ backgroundColor: color }}
                                ></div>
                            ))}
                        </div>

                        <p className="font-medium mb-1">Quantity:</p>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center bg-gray-100 px-4 py-2 rounded">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-lg">−</button>
                                <input
                                    type="text"
                                    readOnly
                                    value={quantity}
                                    className="w-12 text-center bg-transparent text-lg"
                                />
                                <button onClick={() => setQuantity(quantity + 1)} className="text-lg">+</button>
                            </div>
                        </div>

                        <button
                            onClick={addToCart}
                            className="w-full py-3 text-white text-lg bg-black hover:bg-orange-500 rounded mb-4"
                        >
                            Add to Cart
                        </button>

                        <p className="text-xl text-gray-500 mb-2">Vendor: <span className='text-black'>Zapatillas Premium</span></p>
                        <p className="text-xl text-gray-500 mb-2">Category: <span className='text-black '>Zapatillas deportivas, zapatillas de hombre</span></p>
                        <p className="text-xl text-gray-500 mb-2">SKU: <span className='text-black'>{product.id}</span></p>
                    </div>
                </div>
            </div>

            <div className="container px-[8%] lg:px-[12%] py-[80px]">
                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => setActiveTab("description")}
                        className={`px-6 py-2 text-lg font-semibold capitalize border-b-2 transition-colors ${activeTab === "description"
                            ? "border-black text-black"
                            : "border-transparent text-gray-500"
                            }`}
                    >
                        Descripción
                    </button>
                    <button
                        onClick={() => setActiveTab("shipping")}
                        className={`px-6 py-2 text-lg font-semibold capitalize border-b-2 transition-colors ${activeTab === "shipping"
                            ? "border-black text-black"
                            : "border-transparent text-gray-500"
                            }`}
                    >
                        Envío y devolución
                    </button>
                </div>

                <div>
                    {activeTab === "description" && (
                        <div className='mt-10'>
                            <p className="text-2xl font-bold mb-2 font-bricolage">For Casual, Sports, and Streetwear</p>
                            <p className="text-gray-700 mb-4">
                                Nuestras zapatillas premium están diseñadas para brindar comodidad y durabilidad, 
                                combinando un estilo moderno con materiales de alto rendimiento. 
                                Ya sea que camines por la calle o corras, estas zapatillas te brindan 
                                soporte durante todo el día y un diseño excepcional.
                            </p>
                            <h5 className="text-2xl font-bold mb-2 font-bricolage">Features & Benefits</h5>
                            <ul className="text-gray-700 space-y-1">
                                <li>Material superior antitranspirante y ligero.</li>
                                <li>Plantilla acolchada para una mayor comodidad.</li>
                                <li>Suela de goma duradera para mayor tracción.</li>
                                <li>Disponible en varios tamaños y colores.</li>
                                <li>Ideal para uso diario, gimnasio o salidas informales.</li>
                            </ul>
                        </div>
                    )}

                    {activeTab === "shipping" && (
                        <div className="text-gray-700">
                            <p className="mb-2">
                                Los pedidos se procesan en 1 o 2 días hábiles. 
                                El envío estándar se entrega en 5 a 7 días hábiles. 
                                Las opciones de envío exprés están disponibles al finalizar la compra.
                            </p>
                            <p className="mb-2">
                                El envío es gratuito para pedidos superiores a S/2,000. 
                                Recibirás un número de seguimiento en tu correo electrónico una vez enviado tu pedido.
                            </p>
                            <p className="mb-2">
                                ¿Necesitas devolver o cambiar un producto? No hay problema. 
                                Aceptamos devoluciones en un plazo de 7 días desde la entrega, 
                                siempre que los zapatos estén sin usar y en su embalaje original.
                                Los reembolsos se procesan en un plazo de 3 a 5 días desde la recepción del artículo.
                            </p>
                            <p>Si tiene algún problema, comuníquese con nuestro equipo de soporte en cualquier momento.</p>
                        </div>
                    )}
                </div>
            </div>
            {/* Products */}
            <div className="products-container px-[8%] lg:px-[12%]">
                <div className="relative">
                    <div className="row">
                        <div className="section-title mb-12 product-title text-start">
                            <h2 className="font-semibold text-3xl">Productos recomendados</h2>
                            <p className="text-gray-500">Consigue los zapatos que están de moda</p>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        modules={[Navigation]}
                        navigation={{ nextEl: ".product-swiper-next", prevEl: ".product-swiper-prev" }}
                        breakpoints={{
                            1399: { slidesPerView: 4 },
                            1199: { slidesPerView: 3 },
                            991: { slidesPerView: 2 },
                            767: { slidesPerView: 1.5 },
                            0: { slidesPerView: 1 },
                        }}
                        className="mt-4 swiper relative"
                    >
                        {products
                            .filter(product => product.id >= 5 && product.id <= 10)
                            .map(product => (
                                <SwiperSlide key={product.id}>
                                    <div className="product-item text-center relative">
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
                                            <div className="product-content pt-2">
                                                <span className="price no-underline">{product.price}</span>
                                                <h3 className="title">{product.Productname}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;