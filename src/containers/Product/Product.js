import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import Meta from '../../components/Meta'
import './Product.scss'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
import ReactStars from 'react-rating-stars-component';
import ip14prm from "../../assets/images/ip14promax.jpg";
import { useEffect } from 'react';
import { getAllProducts, getProductBetweenPrice, getProductByBrand, getProductSortAlphabet, getProductSortPrice } from '../../services/userService';
import { useState } from 'react';
import { AiOutlineSortAscending, AiOutlineSortDescending, } from "react-icons/ai"
import { BsSortNumericDown, BsSortNumericDownAlt, } from "react-icons/bs"
import ProductItem from './ProductItem';
import { v4 as uuidv4 } from 'uuid';

const Product = () => {
    const [price1, setPrice1] = useState()
    const [price2, setPrice2] = useState()
    // all products
    const [products, setProducts] = useState()
    const fetchDataProduct = async () => {
        try {
            const res = await getAllProducts('ALL')
            setProducts(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDataProduct()
    }, [])

    // all product2 
    const [AllProducts, setAllProducts] = useState()
    const fetchDataAllProduct = async () => {
        try {
            const res = await getAllProducts('ALL')
            setAllProducts(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDataAllProduct()
    }, [])

    // samsung product
    const [productSamsung, setProductSamsung] = useState()
    const fetchSamsungProduct = async () => {
        try {
            const res = await getProductByBrand('2')
            setProductSamsung(res.category[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchSamsungProduct()
    }, [])
    // iphone product
    const [productIphone, setProductIphone] = useState()
    const fetchIphoneProduct = async () => {
        try {
            const res = await getProductByBrand('1')
            setProductIphone(res.category[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchIphoneProduct()
    }, [])
    // console.log('iphone', productIphone)
    // oppo product
    const [productOppo, setProductOppo] = useState()
    const fetchOppoProduct = async () => {
        try {
            const res = await getProductByBrand('3')
            setProductOppo(res.category[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchOppoProduct()
    }, [])

    // Xiaomi product
    const [productXiaomi, setProductXiaomi] = useState()
    const fetchXiaomiProduct = async () => {
        try {
            const res = await getProductByBrand('4')
            setProductXiaomi(res.category[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchXiaomiProduct()
    }, [])
    // Vivo product
    const [productVivo, setProductVivo] = useState()
    const fetchVivoProduct = async () => {
        try {
            const res = await getProductByBrand('5')
            setProductVivo(res.category[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchVivoProduct()
    }, [])
    // Realme product
    const [productRealme, setProductRealme] = useState()
    const fetchRealmeProduct = async () => {
        try {
            const res = await getProductByBrand('6')
            setProductRealme(res.category[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchRealmeProduct()
    }, [])
    // Redmi product
    const [productRedmi, setProductRedmi] = useState()
    const fetchRedmiProduct = async () => {
        try {
            const res = await getProductByBrand('7')
            setProductRedmi(res.category[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchRedmiProduct()
    }, [])
    // Nokia product
    const [productNokia, setProductNokia] = useState()
    const fetchNokiaProduct = async () => {
        try {
            const res = await getProductByBrand('8')
            setProductNokia(res.category[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchNokiaProduct()
    }, [])
    console.log('all products: ', products)

    // // function filter product between 2 price
    // const filterPrices = [price1, price2]
    // const [productFilterPrice, setProductFilterPrice] = useState()

    // const fetchFilterPrice = async () => {
    //     try {
    //         const res = await getProductBetweenPrice(price1, price2)
    //         setProductFilterPrice(res.filterProduct[0])
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     fetchFilterPrice()
    // }, [])

    // console.log(productFilterPrice)

    // sort product by price asc
    const [sortPriceASC, setSortPriceASC] = useState()

    const fetchSortPriceAsc = async () => {
        try {
            const res = await getProductSortPrice('asc')
            setSortPriceASC(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchSortPriceAsc()
    }, [])
    console.log('product sort', sortPriceASC)

    // sort product by price desc
    const [sortPriceDESC, setSortPriceDESC] = useState()
    const fetchSortPriceDESC = async () => {
        try {
            const res = await getProductSortPrice('desc')
            setSortPriceDESC(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchSortPriceDESC()
    }, [])

    // sort product a-z asc
    const [sortAlphabetASC, setSortAlphabetASC] = useState()

    const fetchSortAlphabetAsc = async () => {
        try {
            const res = await getProductSortAlphabet('asc')
            setSortAlphabetASC(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchSortAlphabetAsc()
    }, [])
    console.log('product sort a-z', sortAlphabetASC)

    // sort product z-a desc
    const [sortAlphabetDESC, setSortAlphabetDESC] = useState()

    const fetchSortAlphabetDesc = async () => {
        try {
            const res = await getProductSortAlphabet('desc')
            setSortAlphabetDESC(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchSortAlphabetDesc()
    }, [])
    console.log('product sort Z-A', sortAlphabetDESC)

    return (
        <>
            <HomeHeader></HomeHeader>
            <Meta title={"Sản phẩm"} />
            <div className='product-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-part mb-3'>
                                {/* <h3 className='filter-title'> */}
                                <h1 >
                                    Phân loại sản phẩm:
                                </h1>
                                <div>
                                    <ul className='ps-0'>
                                        <li><h4 className='hover-category-filter mx-4' onClick={() => setProducts(AllProducts)}>-Tất cả sản phẩm</h4></li>
                                        <li><h4 className='hover-category-filter mx-4' onClick={() => setProducts(productIphone)}>-Iphone</h4></li>
                                        <li><h4 className='hover-category-filter mx-4' onClick={() => setProducts(productSamsung)}>-Samsung</h4></li>
                                        <li><h4 className='hover-category-filter mx-4' onClick={() => setProducts(productOppo)}>-Oppo</h4></li>
                                        <li><h4 className='hover-category-filter mx-4' onClick={() => setProducts(productXiaomi)}>-Xiaomi</h4></li>
                                        <li><h4 className='hover-category-filter mx-4' onClick={() => setProducts(productVivo)}>-Vivo</h4></li>
                                        <li><h4 className='hover-category-filter mx-4' onClick={() => setProducts(productRealme)}>-Realme</h4></li>
                                        <li><h4 className='hover-category-filter mx-4' onClick={() => setProducts(productRedmi)}>-Redmi</h4></li>
                                        <li><h4 className='hover-category-filter mx-4' onClick={() => setProducts(productNokia)}>-Nokia</h4></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-part mb-3'>
                                <h2 >Phân loại theo:</h2>
                                <div>
                                    {/* <h3 className='sub-title'>Phân khúc điện thoại</h3> */}
                                    <h3 className='mx-1'>Phân khúc điện thoại:</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li><h4 className='hover-category-filter mx-3'>#Giá rẻ: 2-4 triệu</h4></li>
                                            <li><h4 className='hover-category-filter mx-3'>#Tầm trung: 4-8 triệu</h4></li>
                                            <li><h4 className='hover-category-filter mx-3'>#Cận cao cấp: 8-13 triệu</h4></li>
                                            <li><h4 className='hover-category-filter mx-3'>#Cao cấp: trên 13 triệu</h4></li>
                                        </ul>
                                    </div>
                                    <h3 className='mx-1'>Dung lượng điện thoại</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li><h4 className='hover-category-filter mx-3'>#64 GB</h4></li>
                                            <li><h4 className='hover-category-filter mx-3'>#128 GB</h4></li>
                                            <li><h4 className='hover-category-filter mx-3'>#256 GB</h4></li>
                                            <li><h4 className='hover-category-filter mx-3'>#512 GB</h4></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-part mb-3'>
                                <h3 className='filter-title'>Tags sản phẩm</h3>
                                <div>
                                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Iphone
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Zfold 4
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Reno 8T
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Xiaomi 13
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Realme
                                        </span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Vivo V25
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-part mb-3'>
                                <h3 className='filter-title'>Sản phẩm gợi ý</h3>
                                <div>
                                    <div className='suggest-products mb-3 d-flex'>
                                        <div className='w-50'>
                                            <img
                                                src={ip14prm}
                                                className='img-fluid'
                                                alt='watch'
                                            />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Day la san pham goi y cho ban</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>9.990.000 VND</b>
                                        </div>
                                    </div>
                                    <div className='suggest-products d-flex'>
                                        <div className='w-50'>
                                            <img
                                                src={ip14prm}
                                                className='img-fluid'
                                                alt='watch'
                                            />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Day la san pham goi y cho ban</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>9.990.000 VND</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-30 ">
                                        <p className="mb-0 d-block" style={{ width: "100px" }}>
                                            Sắp xếp theo:
                                        </p>
                                        <div className='d-flex align-items-center gap-10 sort-hover' onClick={() => setProducts(sortAlphabetASC)}>
                                            <AiOutlineSortAscending className=' d-flex align-items-center ' style={{ width: "40px", height: "40px" }} />
                                            <span className='mb-0'>
                                                <span className='text-dark'>: Từ A-Z</span>
                                                <br />
                                            </span>
                                        </div>
                                        <div className='d-flex align-items-center gap-10 sort-hover' onClick={() => setProducts(sortAlphabetDESC)}>
                                            <AiOutlineSortDescending className=' d-flex align-items-center' style={{ width: "40px", height: "40px" }} />
                                            <span className='mb-0'>
                                                <span className='text-dark'>: Từ Z-A</span>
                                                <br />
                                            </span>
                                        </div>
                                        <div className='d-flex align-items-center gap-10 sort-hover' onClick={() => setProducts(sortPriceDESC)}>
                                            <BsSortNumericDown className=' d-flex align-items-center' style={{ width: "40px", height: "40px" }} />
                                            <span className='mb-0'>
                                                <span className='text-dark'>: Giá cao đến thấp</span>
                                                <br />
                                            </span>
                                        </div>
                                        <div className='d-flex align-items-center gap-10 sort-hover' onClick={() => setProducts(sortPriceASC)}>
                                            <BsSortNumericDownAlt className=' d-flex align-items-center' style={{ width: "40px", height: "40px" }} />
                                            <span className='mb-0'>
                                                <span className='text-dark'>: Giá thấp đến cao</span>
                                                <br />
                                            </span>
                                        </div>


                                        {/* <button onClick={() => setProducts(sortAlphabetASC)}>A-Z</button>
                                        <button onClick={() => setProducts(sortAlphabetDESC)}>Z-A</button>
                                        <button onClick={() => setProducts(sortPriceDESC)}>Cao-thap</button>
                                        <button onClick={() => setProducts(sortPriceASC)}>thap den cao</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className='list-product mx-3 px-3'>
                                <div className='d-flex flex-wrap gap-70'>

                                    {products && products.map((item) => {
                                        return (
                                            <ProductItem item={item} key={uuidv4()} />
                                        )
                                    })}
                                </div>
                                {/* <nav>
                                    <ul className='pagination'>
                                        <li className='page-item'>
                                            <a href='#' className='page-link' onClick={prePage}>Trang trước</a>
                                        </li>
                                        {numbers.map((n, i) => {
                                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                                <a href='#' className='page-link'
                                                    onClick={changeCpage} >{n}</a>
                                            </li>
                                        })}
                                        <li className='page-item'>
                                            <a href='#' className='page-link' onClick={nextPage}>Trang sau</a>
                                        </li>
                                    </ul>
                                </nav> */}
                            </div>
                        </div>
                    </div>
                </div >
                <Footer></Footer>
            </div >
        </>
    );
    // function prePage() {

    // }
    // function changeCpage(id) {

    // }
    // function nextPage() {

    // }
}

export default Product;