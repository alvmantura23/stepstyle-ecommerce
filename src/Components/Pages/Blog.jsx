import React from 'react'

import blogs from '../../Blogs.json'
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <>
            <div className="banner-section about-banner-section flex justify-center items-center">
                <div className="banner-section-content text-center z-10">
                    <h6 className='uppercase'>- StepStyle</h6>
                    <h1 className='text-6xl font-semibold font-bricolage text-[#ff823a]'><span className='text-white font-bricolage'>Nuestro </span> Blog</h1>
                </div>
            </div>
            <div className="shop-container px-[8%] lg:px-[12%] py-[50px]">
                <div className="mt-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8    ">
                        {blogs.map(blog => (
                            <div className="mb-0">
                                <div className="blog-item text-center relative">
                                    <div className="blog-image w-full relative overflow-hidden">
                                        <img src={blog.image} alt="blog-image" className='w-full rounded' />
                                    </div>
                                    <div className="blog-content shadow-md rounded pt-3 px-3 w-full relative">
                                        <div className="blog-title">
                                            <span className='title font-bricolage'>{blog.title}</span>
                                        </div>
                                        <h3 className='font-bricolage text-start text-2xl'>{blog.pere}</h3>
                                        <div className="flex justify-between">
                                            <ul className='py-3 flex items-center gap-2 text-center w-full'>
                                                <li>
                                                    <span className='text-black ps-2'>{blog.author}</span>
                                                </li>
                                                <li>
                                                    <span className='active relative ps-2'>{blog.date}</span>
                                                </li>
                                            </ul>
                                            <button className='w-[200px] text-[#ff823a]'>Leer mas <i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog