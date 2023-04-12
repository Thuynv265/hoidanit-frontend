import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import Meta from '../../components/Meta'
import './Product.scss'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { getAllProducts, getProductByBrand, getProductSortAlphabet, getProductSortPrice, getProductFilterByStorage, getFilterByPrice } from '../../services/userService';
import { useState } from 'react';
import { AiOutlineSortAscending, AiOutlineSortDescending, } from "react-icons/ai"
import { BsSortNumericDown, BsSortNumericDownAlt, } from "react-icons/bs"
import ProductItem from './ProductItem';
import { v4 as uuidv4 } from 'uuid';

const Product = () => {
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
    // filter product 64gb
    const [product64gb, setProduct64gb] = useState()
    const fetch64gbProduct = async () => {
        try {
            const res = await getProductFilterByStorage('64')
            setProduct64gb(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetch64gbProduct()
    }, [])
    // filter product 128gb
    const [product128gb, setProduct128gb] = useState()
    const fetch128gbProduct = async () => {
        try {
            const res = await getProductFilterByStorage('128')
            setProduct128gb(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetch128gbProduct()
    }, [])

    // filter product 256gb
    const [product256gb, setProduct256gb] = useState()
    const fetch256gbProduct = async () => {
        try {
            const res = await getProductFilterByStorage('256')
            setProduct256gb(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetch256gbProduct()
    }, [])
    // filter product 512gb
    const [product512gb, setProduct512gb] = useState()
    const fetch512gbProduct = async () => {
        try {
            const res = await getProductFilterByStorage('512')
            setProduct512gb(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetch512gbProduct()
    }, [])

    // filter product cheap price
    const [productCheap, setProductCheap] = useState()
    const fetchCheapProduct = async () => {
        try {
            const res = await getFilterByPrice('5000000')
            setProductCheap(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCheapProduct()
    }, [])

    // filter product Mid price
    const [productMid, setProductMid] = useState()
    const fetchMidProduct = async () => {
        try {
            const res = await getFilterByPrice('10000000')
            setProductMid(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchMidProduct()
    }, [])
    // filter product flagsip price
    const [productFlagship, setProductFlagship] = useState()
    const fetchFlagshipProduct = async () => {
        try {
            const res = await getFilterByPrice('10000001')
            setProductFlagship(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchFlagshipProduct()
    }, [])
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
                                <h2 >
                                    Phân loại sản phẩm:
                                </h2>
                                <div>
                                    <ul className='ps-0'>
                                        <li><h6 className='hover-category-filter mx-4' onClick={() => setProducts(AllProducts)}>-Tất cả sản phẩm</h6></li>
                                        <li><h6 className='hover-category-filter mx-4' onClick={() => setProducts(productIphone)}>-Iphone</h6></li>
                                        <li><h6 className='hover-category-filter mx-4' onClick={() => setProducts(productSamsung)}>-Samsung</h6></li>
                                        <li><h6 className='hover-category-filter mx-4' onClick={() => setProducts(productOppo)}>-Oppo</h6></li>
                                        <li><h6 className='hover-category-filter mx-4' onClick={() => setProducts(productXiaomi)}>-Xiaomi</h6></li>
                                        <li><h6 className='hover-category-filter mx-4' onClick={() => setProducts(productVivo)}>-Vivo</h6></li>
                                        <li><h6 className='hover-category-filter mx-4' onClick={() => setProducts(productRealme)}>-Realme</h6></li>
                                        <li><h6 className='hover-category-filter mx-4' onClick={() => setProducts(productRedmi)}>-Redmi</h6></li>
                                        <li><h6 className='hover-category-filter mx-4' onClick={() => setProducts(productNokia)}>-Nokia</h6></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-part mb-3'>
                                <h2 >Phân loại theo:</h2>
                                <div>
                                    {/* <h3 className='sub-title'>Phân khúc điện thoại</h3> */}
                                    <h4 className='mx-1'>Phân khúc điện thoại:</h4>
                                    <div>
                                        <ul className='ps-0'>
                                            <li><h6 className='hover-category-filter mx-3' onClick={() => setProducts(productCheap)}>#Giá rẻ: 2-5 triệu</h6></li>
                                            <li><h6 className='hover-category-filter mx-3' onClick={() => setProducts(productMid)}>#Tầm trung: 5-10 triệu</h6></li>
                                            <li><h6 className='hover-category-filter mx-3' onClick={() => setProducts(productFlagship)}>#Flagship: trên 10 triệu</h6></li>
                                        </ul>
                                    </div>
                                    <h4 className='mx-1'>Dung lượng điện thoại</h4>
                                    <div>
                                        <ul className='ps-0'>
                                            <li><h6 className='hover-category-filter mx-3' onClick={() => setProducts(product64gb)}>#64 GB</h6></li>
                                            <li><h6 className='hover-category-filter mx-3' onClick={() => setProducts(product128gb)}>#128 GB</h6></li>
                                            <li><h6 className='hover-category-filter mx-3' onClick={() => setProducts(product256gb)}>#256 GB</h6></li>
                                            <li><h6 className='hover-category-filter mx-3' onClick={() => setProducts(product512gb)}>#512 GB</h6></li>
                                        </ul>
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

                            </div>
                        </div>
                    </div>
                </div >
                <Footer></Footer>
            </div >
        </>
    );

}

export default Product;