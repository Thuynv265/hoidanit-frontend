import React from 'react';
// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { connect, useSelector } from 'react-redux';
// import { NavLink, Link } from 'react-router-dom'
import Meta from '../../components/Meta'
import './Product.scss'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { getAllProducts, getProductByBrand, getProductSortAlphabet, getProductSortPrice, getProductFilterByStorage, getFilterByPrice } from '../../services/userService';
import { useState } from 'react';
import { AiOutlineSortAscending, AiOutlineSortDescending, } from "react-icons/ai"
import { BiBorderAll } from "react-icons/bi"
import { BsSortNumericDown, BsSortNumericDownAlt, } from "react-icons/bs"
import ProductItem from './ProductItem';
import { v4 as uuidv4 } from 'uuid';
// import { set } from 'lodash';
import ReactPaginate from "react-paginate";


function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <ProductItem item={item} key={uuidv4()} />
                ))}
        </>
    );
}


const Product = () => {
    // all products
    const search = useSelector(state => state.search.search)
    const [products, setProducts] = useState()
    const [AllProducts, setAllProducts] = useState()
    const [typeFilter, setTypeFilter] = useState('ALL')
    const [filter, setFilter] = useState('');

    const blodTextFilter = (type) => {
        if (type === filter) {
            console.log('reset')
            setFilter('');
            return;
        }

        switch (type) {
            case 'ALL':
                setFilter('ALL');
                // console.log('gan')
                break;
            case 'AZ':
                setFilter('AZ');
                // console.log('gan')
                break;
            case 'ZA':
                setFilter('ZA');
                break;
            case 'highlow':
                setFilter('highlow');
                break;
            case 'lowhigh':
                setFilter('lowhigh');
                break;
            default:
                break;
        }
    }


    const fetchDataProduct = async () => {
        try {
            const res = await getAllProducts('ALL')
            setProducts(res.products[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {


        if (search) {
            const arr = AllProducts?.filter((item) => {
                return item.productName.toUpperCase().includes(search.toUpperCase())
            })
            setProducts(arr);
        }
        else {
            setProducts(AllProducts)
        }
    }, [search])
    useEffect(() => {
        fetchDataProduct()
    }, [])

    // all product2 
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


    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const itemsPerPage = 12;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products?.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products?.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <HomeHeader></HomeHeader>
            <Meta title={"Sản phẩm"} />
            <div className='product-wrapper home-wrapper-2 '
                style={{
                    minHeight: '100vh',
                }}
            >
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='filter-part mb-3'>
                                {/* <h3 className='filter-title'> */}
                                <h4 >
                                    Phân loại sản phẩm:
                                </h4>
                                <div>
                                    <ul className='ps-0 filter_type_product'>
                                        {/* <li
                                            onClick={() => setProducts(AllProducts)}
                                        ><span className='hover-category-filter '
                                        >-Tất cả sản phẩm</span></li> */}
                                        <li
                                            onClick={() => setProducts(productIphone)}
                                        ><span className='hover-category-filter '
                                        >-Iphone</span></li>
                                        <li
                                            onClick={() => setProducts(productSamsung)}
                                        ><span className='hover-category-filter '
                                        >-Samsung</span></li>
                                        <li
                                            onClick={() => setProducts(productOppo)}
                                        ><span className='hover-category-filter '
                                        >-Oppo</span></li>
                                        <li
                                            onClick={() => setProducts(productXiaomi)}
                                        ><span className='hover-category-filter '
                                        >-Xiaomi</span></li>
                                        <li
                                            onClick={() => setProducts(productVivo)}
                                        ><span className='hover-category-filter '
                                        >-Vivo</span></li>
                                        <li
                                            onClick={() => setProducts(productRealme)}
                                        ><span className='hover-category-filter '
                                        >-Realme</span></li>
                                        <li
                                            onClick={() => setProducts(productRedmi)}
                                        ><span className='hover-category-filter '
                                        >-Redmi</span></li>
                                        <li
                                            onClick={() => setProducts(productNokia)}
                                        ><span className='hover-category-filter '
                                        >-Nokia</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-part mb-3'>
                                <h4 >Phân loại theo:</h4>
                                <div>
                                    {/* <h3 className='sub-title'>Phân khúc điện thoại</h3> */}
                                    <h5 className='mx-1'>Phân khúc điện thoại:</h5>
                                    <div>
                                        <ul className=' filter_type_product'
                                            style={{
                                                paddingLeft: '0px',
                                            }}
                                        >
                                            <li><h6 className='hover-category-filter'
                                                onClick={() => setProducts(productCheap)}>#Giá rẻ: 2-5 triệu</h6></li>
                                            <li><h6 className='hover-category-filter'
                                                onClick={() => setProducts(productMid)}>#Tầm trung: 5-10 triệu</h6></li>
                                            <li><h6 className='hover-category-filter'
                                                onClick={() => setProducts(productFlagship)}>#Flagship: trên 10 triệu</h6></li>
                                        </ul>
                                    </div>
                                    <h5 className='mx-1'>Dung lượng điện thoại</h5>
                                    <div>
                                        <ul className=' filter_type_product'
                                            style={{
                                                paddingLeft: '0px',
                                            }}
                                        >


                                            <li><h6 className='hover-category-filter '
                                                onClick={() => setProducts(product64gb)}>#64 GB</h6></li>
                                            <li><h6 className='hover-category-filter '
                                                onClick={() => setProducts(product128gb)}>#128 GB</h6></li>
                                            <li><h6 className='hover-category-filter '
                                                onClick={() => setProducts(product256gb)}>#256 GB</h6></li>
                                            <li><h6 className='hover-category-filter '
                                                onClick={() => setProducts(product512gb)}>#512 GB</h6></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-10"
                            style={{
                                position: "relative",
                            }}
                        >
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-30 ">
                                        <p className="mb-0 d-block" style={{ width: "100px" }}>
                                            Sắp xếp theo:
                                        </p>
                                        <div className='d-flex align-items-center gap-10 sort-hover' onClick={() => {
                                            blodTextFilter('ALL')
                                            setProducts(AllProducts)
                                        }}>
                                            <BiBorderAll
                                                className={filter === 'ALL' ? 'text-red d-flex align-items-center ' : ' d-flex align-items-center '} style={{ width: "40px", height: "40px" }} />
                                            <span className='mb-0'>
                                                <span className={filter === 'ALL' ? 'text-red' : 'text-dark'}>: Tất cả</span>
                                                <br />
                                            </span>
                                        </div>
                                        <div className='d-flex align-items-center gap-10 sort-hover' onClick={() => {
                                            blodTextFilter('AZ')
                                            setProducts(sortAlphabetASC)
                                        }}>
                                            <AiOutlineSortAscending
                                                className={filter === 'AZ' ? 'text-red d-flex align-items-center ' : ' d-flex align-items-center '} style={{ width: "40px", height: "40px" }} />
                                            <span className='mb-0'>
                                                <span className={filter === 'AZ' ? 'text-red' : 'text-dark'}>: Từ A-Z</span>
                                                <br />
                                            </span>
                                        </div>
                                        <div className={filter === 'ZA' ? 'text-red d-flex align-items-center gap-10 sort-hover' : 'd-flex align-items-center gap-10 sort-hover'} onClick={() => {
                                            blodTextFilter('ZA')
                                            setProducts(sortAlphabetDESC)
                                        }}>
                                            <AiOutlineSortDescending className=' d-flex align-items-center' style={{ width: "40px", height: "40px" }} />
                                            <span className='mb-0'>
                                                <span className={filter === 'ZA' ? 'text-red' : 'text-dark'}>: Từ Z-A</span>
                                                <br />
                                            </span>
                                        </div>
                                        <div className={filter === 'highlow' ? 'text-red d-flex align-items-center gap-10 sort-hover' : 'd-flex align-items-center gap-10 sort-hover'} onClick={() => {
                                            blodTextFilter('highlow')
                                            setProducts(sortPriceDESC)
                                        }}>
                                            <BsSortNumericDownAlt className=' d-flex align-items-center' style={{ width: "40px", height: "40px" }} />
                                            <span className='mb-0'>
                                                <span className={filter === 'highlow' ? 'text-red' : 'text-dark'}>: Giá cao đến thấp</span>
                                                <br />
                                            </span>
                                        </div>
                                        <div className={filter === 'lowhigh' ? 'text-red d-flex align-items-center gap-10 sort-hover' : 'd-flex align-items-center gap-10 sort-hover'} onClick={() => {
                                            blodTextFilter('lowhigh')
                                            setProducts(sortPriceASC)
                                        }}>
                                            < BsSortNumericDown className=' d-flex align-items-center' style={{ width: "40px", height: "40px" }} />
                                            <span className='mb-0'>
                                                <span className={filter === 'lowhigh' ? 'text-red' : 'text-dark'}>: Giá thấp đến cao</span>
                                                <br />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='list-product '>
                                <div className='d-flex flex-wrap gap-30 '

                                    style={{
                                        padding: "0 12px 80px 12px"
                                    }}
                                >
                                    <Items currentItems={currentItems} key={uuidv4()} />
                                </div>

                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    right: "37%",
                                    bottom: 0,
                                }}
                            >
                                <ReactPaginate
                                    breakLabel="..."
                                    // nextLabel="next >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    // previousLabel="< previous"
                                    renderOnZeroPageCount={null}
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link"
                                    containerClassName="pagination"
                                    activeClassName="active"
                                />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <Footer></Footer>
        </>
    );

}

export default Product;