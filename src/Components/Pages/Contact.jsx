import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="contact-section mt-20">
                <div className="px-[8%] lg:px-[12%] py-[50px] ">
                    <h2 className="section-title text-3xl font-bold text-center">Mantente en contacto con nosotras</h2>
                    <p className="section-subtitle text-center mt-2 text-gray-600">
                        Sé el primero en enterarte de nuevos lanzamientos, ofertas exclusivas y <br />
                        alianzas exclusivas para destacar en este verano.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 ">

                        <div className="contact-box text-left p-6">
                            <i className="ri-map-pin-line icon text-3xl mb-2"></i>
                            <h5 className="text-2xl font-semibold mb-1 font-bricolage">Dirección</h5>
                            <p>Renom IT Solutions, 2do piso, Complejo Siddharth,</p>
                            <p className="mb-4">Alkapuri, Vadodara, Gujarat – 390007</p>
                            <a href="#" className="link font-bold hover:underline">Obtener Dirección</a>
                        </div>

                        <div className="contact-box text-left p-6">
                            <i className="ri-phone-line icon text-3xl mb-2"></i>
                            <h5 className="text-2xl font-semibold font-bricolage mb-1">Contacto</h5>
                            <p className='text-gray-400'><strong className='text-black'>Mobile:</strong> +51 123 456 789</p>
                            <p className='text-gray-400'><strong className='text-black'>Hotline:</strong> 123 456 789</p>
                            <p className='text-gray-400'><strong className='text-black'>E-mail:</strong> support@renomtech.in</p>
                        </div>

                        <div className="contact-box text-left p-6">
                            <i className="ri-time-line icon text-3xl mb-2"></i>
                            <h5 className="text-2xl font-semibold font-bricolage mb-1">Horario de Atención</h5>
                            <p className='text-gray-400'><strong className='text-black'>Lun – Vier:</strong> 08:30 – 20:00</p>
                            <p className='text-gray-400'><strong className='text-black'>Sab & Dom:</strong> 09:30 – 21:30</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="contact-page">
                {/* MAP SECTION */}
                <section className="map-section px-[8%] lg:px-[12%]">
                    <iframe
                        title="Our Location"
                        className="map rounded w-full h-96"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331656414!2d73.09068430723582!3d22.32224063690599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1747981236067!5m2!1sen!2sin"
                        allowFullScreen
                    ></iframe>
                </section>

                {/* CONTACT FORM SECTION */}
                <section className="message-section text-center mt-16 px-4">
                    <h2 className="form-title text-3xl font-bold text-center mb-8 font-bricolage">Enviar un mensaje</h2>
                    <form className="contact-form max-w-4xl mx-auto">
                        <div className="row grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="Nombre" className="input border border-gray-300 px-4 py-2 rounded" />
                            <input type="email" placeholder="Correo" className="input border border-gray-300 px-4 py-2 rounded" />
                        </div>
                        <div className="row mb-4">
                            <textarea placeholder="Mensaje" className="textarea w-full border border-gray-300 px-4 py-2 rounded h-32"></textarea>
                        </div>
                        <button type="submit" className="btn px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Entregar</button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default Contact;
