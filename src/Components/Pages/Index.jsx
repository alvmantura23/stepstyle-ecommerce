import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from "swiper/modules"

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Data
import products from '../../Products.json';


import serviceImg1 from './../../assets/service-icon-1.svg';
import serviceImg2 from './../../assets/service-icon-2.svg';
import serviceImg3 from './../../assets/service-icon-3.svg';
import serviceImg4 from './../../assets/service-icon-4.svg';

import brand1 from './../../assets/brand-1.png';
import brand2 from './../../assets/brand-2.png';
import brand3 from './../../assets/brand-3.png';
import brand4 from './../../assets/brand-4.png';
import brand5 from './../../assets/brand-5.png';
import brand6 from './../../assets/brand-6.png';

import Shoesbanner from '../../assets/Shoes-banner.jpg';

import discover1 from "./../../assets/shoes-banner-image-01.png";
import discover2 from "./../../assets/shoes-banner-image-02.png";

import socialImage1 from "./../../assets/social-image-1.png";
import socialImage2 from "./../../assets/social-image-2.png";
import socialImage3 from "./../../assets/social-image-3.png";
import socialImage4 from "./../../assets/social-image-4.png";
import socialImage5 from "./../../assets/social-image-5.png";


function Index() {

    const [filterSortOption, setFilterSortOption] = useState('all');
    const navigate = useNavigate();

    const addToWishlist = (product) => {
        const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (!existing.some(p => p.id === product.id)) {
            const updated = [...existing, product];
            localStorage.setItem('wishlist', JSON.stringify(updated));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${product.Productname} ¡Añadido a tu lista de favoritos!`);
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
            toast.success(`${product.Productname} Agregado a tu carrito!`);
        } else {
            toast.info(`${product.Productname} ya está en el carrito.`);
        }
    };

    const images = [socialImage1, socialImage2, socialImage3, socialImage4, socialImage5, socialImage1];

    return (
        <>
            {/* Hero */}
            <div className="hero">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    loop={true}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide>
                        <div className="hero-wrap hero-wrap1 px-[8%] lg:px-[12%]">
                            <div className="hero-content">
                                <h5>- Venta de zapatillas con 50% de descuento -</h5>
                                <h1>Colección imperdible <br /> zapatillas <span className='text-[#ff823a]'>para Hombres!</span></h1>
                                <p className='my-3'>Las zapatillas son más que una necesidad, son un reflejo del estilo personal, la cultura y la innovación tecnológica.</p>
                                <a href="#" className='btn hero-btn px-4 py-2 rounded'>Compra ahora</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-wrap hero-wrap2 px-[8%] lg:px-[12%]">
                            <div className="hero-content">
                                <h5>- NUEVA COLECCIÓN -</h5>
                                <h1>Consigue Perfección!  <br /> Zapatillas <span className="text-[#ff823a]">Mejor Precio!</span></h1>
                                <p className="my-3">
                                    Las zapatillas son más que una necesidad, son un reflejo del estilo personal, la cultura y la innovación tecnológica.
                                </p>
                                <a href="#" className="btn hero-btn px-4 py-2 rounded mt-3">Compra ahora</a>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            {/* Products */}
            <div className="products-container px-[8%] lg:px-[12%] py-[50px] my-12">
                <div className="relative">
                    <div className="row">
                        <div className="section-title mb-12 product-title text-center">
                            <h2 className="font-semibold text-3xl">Nuestros últimos productos</h2>
                            <p className="text-gray-500">Consigue las zapatillas que están de moda</p>
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
            {/* Service */}
            <div className="px-[8%] lg:px-[12%] pb-[50px] py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div>
                        <img src={serviceImg1} className="w-[100px]  mx-auto" alt="Free Shipping" />
                        <h4 className=" mb-2 text-2xl font-bricolage font-semibold">Envío gratis</h4>
                        <p className="text-gray-600 text-sm font-medium">Envío gratuito para pedidos superiores a S/360</p>
                    </div>
                    <div>
                        <img src={serviceImg2} className="w-[100px] h-auto mx-auto" alt="Returns" />
                        <h4 className="mb-2 text-2xl font-bricolage font-semibold">Regresar</h4>
                        <p className="text-gray-600 text-sm font-medium">Dentro de 30 días para un cambio.</p>
                    </div>
                    <div>
                        <img src={serviceImg3} className="w-[100px] h-auto mx-auto" alt="Online Support" />
                        <h4 className="mb-2 text-2xl font-bricolage font-semibold">Soporte en línea</h4>
                        <p className="text-gray-600 text-sm font-medium">24 horas al día, 7 días a la semana</p>
                    </div>
                    <div>
                        <img src={serviceImg4} className="w-[100px] h-auto mx-auto" alt="Flexible Payment" />
                        <h4 className="mb-2 text-2xl font-bricolage font-semibold">Pago flexible</h4>
                        <p className="text-gray-600 text-sm font-medium">Pagar con varias tarjetas de crédito</p>
                    </div>
                </div>
            </div>
            {/* Seen in */}
            <div className="text-center px-[8%] lg:px-[12%] seen-in">
                <div className="">
                    <h1 className="mb-5 font-semibold text-2xl">As seen in</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={6}
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            1399: { slidesPerView: 6 },
                            1199: { slidesPerView: 6 },
                            991: { slidesPerView: 4 },
                            575: { slidesPerView: 2 },
                            0: { slidesPerView: 2 },
                        }}
                    >
                        <SwiperSlide>
                            <img src={brand2} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand3} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand4} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand5} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand6} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand2} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={brand4} className='w-[200px] h-[80px] object-cover border rounded border-black p-3' alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* favourite beauty */}
            <div className='favorite-beauty px-[8%] lg:px-[12%] py-[50px] my-5'>
                <div className="">
                    <div className="grid grid-cols-1 mb-5">
                        <div className="section-title mb-5 favorite-beauty-title text-center w-full">
                            <h2 className="font-semibold text-3xl">Los productos favoritos de los clientes</h2>
                            <p>Fabricados con ingredientes limpios y no tóxicos, nuestros productos están diseñados para todos.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="w-full lg:col-span-4">
                            <div className="favorite-beauty-banner mb-5 lg:mb-0 relative rounded">
                                <img src={Shoesbanner} alt="female-banner" className='w-full h-auto' />
                                <div className="favorite-beauty-banner-title absolute z-10">
                                    <h3 className='text-3xl font-bricolage'>Empodérate a ti mismo</h3>
                                    <p className='text-md'>Consigue la piel que quieres sentir</p>
                                    <button className='btn mt-2 px-3 py-2 rounded btn-defalut'>Explorar más</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:col-span-7">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {products
                                    .filter(product => product.id >= 10 && product.id <= 15)
                                    .map(product => (
                                        <div className="w-full mb-0" key={product.id}>
                                            <div>
                                                <div className="product-item text-center relative">
                                                    <div className="product-image w-full relative overflow-hidden">
                                                        <img src={product.image} alt="product" className="w-full h-auto" />
                                                        <img src={product.secondImage} alt="product" className="w-full h-auto" />
                                                        <div className="product-icons flex justify-center items-center gap-3  transition">
                                                            <div className="product-icon" title="Add to Wishlist" onClick={() => addToWishlist(product)}>
                                                                <i className="bi bi-heart text-base"></i>
                                                            </div>
                                                            <div className="product-icon" title="Add to Cart" onClick={() => addToCart(product)}>
                                                                <i className="bi bi-cart3 text-base"></i>
                                                            </div>
                                                        </div>
                                                        {product.tag && (
                                                            <span className={`badge text-white absolute top-2 left-2 text-xs px-2 py-1 rounded 
                                             ${product.tag === 'Nuevo' ? 'bg-red-600' : 'bg-green-600'}`}>
                                                                {product.tag}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <Link to={`/product/${product.id}`} className='no-underline text-black'>
                                                        <div className="product-content fev-product-content pt-2">
                                                            <span className="price">{product.price}</span>
                                                            <h3 className="title">{product.Productname}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Discover */}
            <div className="discover px-[8%] lg:px-[12%] py-10">
                <div className="mb-10 text-center">
                    <span className="text-lg capitalize font-semibold text-[#ff823a]">about us</span>
                    <h2 className="capitalize pt-2 pb-3 font-semibold font-bricolage text-4xl md:text-5xl">
                        Bienvenido a Step Style
                    </h2>
                    <p className="capitalize text-sm lg:text-xl text-[#777777] tracking-widest font-bricolage max-w-7xl mx-auto">
                        Disfruta de la comodidad y el estilo con nuestra última colección de zapatos, perfecta para cualquier ocasión. 
                        Desde elegantes zapatillas hasta elegantes zapatos de vestir, nuestra cuidada selección incluye las mejores marcas reconocidas por su calidad y durabilidad. Experimenta una comodidad inigualable con nuestros diseños innovadores y suelas acolchadas. Ya sea para ir al gimnasio, a la oficina o disfrutar de una salida nocturna, tenemos el par perfecto para ti. Compra ahora y mejora tu calzado con nuestras ofertas exclusivas y novedades.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <img src={discover1} className='w-full' alt="" />
                    <img src={discover2} className='w-full' alt="" />
                </div>
            </div>
            {/* Social image */}
            <div className="social-image-container px-5 pt-[50px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 cursor-pointer gap-4">
                    {images.map((img, index) => (
                        <div key={index} className="relative overflow-hidden group rounded-lg">
                            <img src={img} alt="" className="w-full object-cover" />
                            <i className="bi bi-instagram absolute inset-0 flex items-center justify-center text-white text-5xl opacity-[0] group-hover:opacity-[1] bg-black/50 transition duration-300"></i>
                        </div>
                    ))}
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default Index