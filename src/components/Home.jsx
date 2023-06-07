import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export const Home = () => {

    const [productData, setProductData] = useState([])
    const [light, setLight] = useState([])
    const [jwell, setJwell] = useState([])
    const [dress, setDress] = useState([])
    const [shoes, setShoes] = useState([])
    const [furniture, setFurniture] = useState([])

    const apiData = () => {
        return fetch("https://dummyjson.com/products/category/laptops?limit=3")
            .then((response) => response.json())
            .then((resp) => setProductData(resp))
    }

    const lightData = () => {
        return fetch("https://dummyjson.com/products/category/lighting  ")
            .then((response) => response.json())
            .then((resp) => setLight(resp))
    }

    const jwelData = () => {
        return fetch("https://dummyjson.com/products/category/womens-jewellery")
            .then((response) => response.json())
            .then((resp) => setJwell(resp))
    }

    const dressData = () => {
        return fetch("https://dummyjson.com/products/category/womens-dresses")
            .then((response) => response.json())
            .then((resp) => setDress(resp))
    }


    const ShoesData = () => {
        return fetch("https://dummyjson.com/products/category/mens-shoes")
            .then((response) => response.json())
            .then((resp) => setShoes(resp))
    }


    const furnitureData = () => {
        return fetch("https://dummyjson.com/products/category/furniture")
            .then((response) => response.json())
            .then((resp) => setFurniture(resp))
    }
    useEffect(() => {
        apiData();
        lightData();
        jwelData();
        dressData();
        ShoesData();
        furnitureData();
    }, [])

    console.log("first", productData)
    
    return (
        <React.Fragment>
            <div className='w-full h-full m-auto relative z-10 shadow-xl bg-white ' >

                <Nav />

                <div className='px-5' >
                    <img src='https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg' alt='online-shopping' />
                </div>

                {/* Categories for you */}
                <section className='md:container md:mx-auto pt-20' >
                    <h2 className='text-3xl font-bold text-start font-serif'>Popular Categories</h2>
                    <article className='flex justify-between flex-wrap pt-10'>

                        <div className='w-2/6 ' >
                            <figure className='relative '>
                                <img className='rounded-md ' src="https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt='p-1' />
                            </figure>

                            <p className='text-lg p-5 tracking-wide font-serif'>Smartphones</p>


                        </div>

                        <div className='w-2/6 pl-5' >
                            <figure className='relative '>
                                <img className='rounded-md ' src="https://media.cnn.com/api/v1/images/stellar/prod/221110144914-best-laptops-2022-lead-image-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill" alt='p-1' />
                            </figure>

                            <p className='text-lg p-5 tracking-wide font-serif'>Laptops</p>


                        </div>

                        <div className='w-2/6 pl-5' >
                            <figure className='relative '>
                                <img className='rounded-md ' src="https://img.freepik.com/free-vector/hand-drawn-beauty-youtube-thumbnail_23-2148941342.jpg" alt='p-1' />
                            </figure>

                            <p className='text-lg p-5 tracking-wide font-serif'>Skincare</p>


                        </div>

                        <div className='w-2/6' >
                            <figure className='relative '>
                                <img className='rounded-md ' src="https://www.pojfurniture.com/assets/themes/theme-1/images/showroom.jpg" alt='p-1' />
                            </figure>

                            <p className='text-lg p-5 tracking-wide font-serif'>Furniture</p>


                        </div>
                        <div className='w-2/6 pl-5' >
                            <figure className='relative '>
                                <img className='rounded-md ' src="https://static.jaypore.com/media/catalog/category/Dress_banner.jpg" alt='p-1' />
                            </figure>

                            <p className='text-lg pt=-5 tracking-wide font-serif'>Womens-dresses</p>


                        </div>
                        <div className='w-2/6 pl-5' >
                            <figure className='relative '>
                                <img className='rounded-md ' src="https://www.beyoung.in/api/cache/catalog/products/banner_desktop/lycra%20banner%20mobile%20view_19_7_2022_767x430.jpg" alt='p-1' />
                            </figure>

                            <p className='text-lg p-5 tracking-wide font-serif'>Mens-shirts</p>


                        </div>

                    </article>
                </section>

                {/* Products for you */}
                <section className='md:container md:mx-auto pt-10' >
                    <h2 className='text-3xl font-bold text-start font-serif'>Products for you!</h2>
                    <article className='flex justify-between flex-wrap pt-10'>
                        {
                            productData.products?.map((data, index) => (
                                <Link to={`${data?.id}`}  className='w-2/6' id={data?.id} >
                                    <figure className='relative '>
                                        <img className='rounded-md ' src={data?.thumbnail} alt='p-1' />
                                    </figure>
                                    <p className='text-lg pt-5 tracking-wide font-serif'>{data?.title}</p>
                                </Link>
                            ))
                        }   
                    </article>
                </section>

                {/* lIGHTING Section */}
                <section className='md:container md:mx-auto pt-10' >
                    <h2 className='text-3xl font-bold text-start font-serif'>In A Bright Spot : Lighting</h2>
                    <article className='flex justify-between flex-wrap pt-10'>
                        {
                            light?.products?.reverse().map((data, index) => (
                                <div className='w-1/6' >
                                    {console.log("first", data)}
                                    <figure className='relative '>
                                        <img style={{ height: "255px" }} className='rounded-md ' src={data?.thumbnail} alt='p-1' />
                                    </figure>

                                    <p className='text-lg pt-5 tracking-wide font-serif'>{data?.title}</p>


                                </div>
                            ))
                        }
                    </article>
                </section>
                {/* Jwellery section */}
                <section className='md:container md:mx-auto pt-10' >
                    <h2 className='text-3xl font-bold text-start font-serif'>Beautiful piece of jewellery for you!</h2>
                    <article className='flex justify-between flex-wrap pt-10'>
                        {
                            jwell?.products?.reverse().map((data, index) => (
                                <div className='w-1/6' >
                                    {console.log("first", data)}
                                    <figure className='relative '>
                                        <img style={{ height: "255px" }} className='rounded-md ' src={data?.thumbnail} alt='p-1' />
                                    </figure>

                                    <p className='text-lg pt-5 tracking-wide font-serif'>{data?.title}</p>


                                </div>
                            ))
                        }
                    </article>
                </section>

                {/* Woomen dress section */}
                <section className='md:container md:mx-auto pt-10' >
                    <h2 className='text-3xl font-bold text-start font-serif'>Dressing up for the best!</h2>
                    <article className='flex justify-between flex-wrap pt-10'>
                        {
                            dress?.products?.reverse().map((data, index) => (
                                <div className='w-1/6' >
                                    {console.log("first", data)}
                                    <figure className='relative '>
                                        <img style={{ height: "255px" }} className='rounded-md ' src={data?.thumbnail} alt='p-1' />
                                    </figure>

                                    <p className='text-lg pt-5 tracking-wide font-serif'>{data?.title}</p>


                                </div>
                            ))
                        }
                    </article>
                </section>
                {/* Shirts section */}
                <section className='md:container md:mx-auto pt-10' >
                    <h2 className='text-3xl font-bold text-start font-serif'>Claasy Shoes for you!</h2>
                    <article className='flex justify-between flex-wrap pt-10'>
                        {
                            shoes?.products?.reverse().map((data, index) => (
                                <div className='w-1/6' >
                                    {console.log("first", data)}
                                    <figure className='relative '>
                                        <img style={{ height: "255px" }} className='rounded-md ' src={data?.thumbnail} alt='p-1' />
                                    </figure>

                                    <p className='text-lg pt-5 tracking-wide font-serif'>{data?.title}</p>


                                </div>
                            ))
                        }
                    </article>
                </section>

                <section className='md:container md:mx-auto pt-10' >
                    <h2 className='text-3xl font-bold text-start font-serif'>Furnitures for you!</h2>
                    <article className='flex justify-between flex-wrap pt-10'>
                        {
                            furniture?.products?.reverse().map((data, index) => (
                                <div className='w-1/6' >
                                    {console.log("first", data)}
                                    <figure className='relative '>
                                        <img style={{ height: "255px" }} className='rounded-md ' src={data?.thumbnail} alt='p-1' />
                                    </figure>

                                    <p className='text-lg pt-5 tracking-wide font-serif'>{data?.title}</p>


                                </div>
                            ))
                        }
                    </article>
                </section>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
