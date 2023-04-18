import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { getAllProducts } from "../../services/userService";
import { useDispatch } from "react-redux";
import { searchFilterChange } from "../../store/actions/searchActions";
import { set } from "lodash";

const SearchHeader = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = React.useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleSearchSubmit = () => {
        dispatch(searchFilterChange(search))
    }

    return (
        <div className="input-group">
            <input
                type="text" className="form-control py-2"
                placeholder="Tìm kiếm sản phẩm ở đây..."
                aria-label="Tìm kiếm sản phẩm ở đây..."
                aria-describedby="basic-addon2"
                value={search}
                onChange={handleSearch}
            />
            <span className="input-group-text p-3" id="basic-addon2"
                onClick={handleSearchSubmit}
            >
                <BsSearch className='fs-6' />
            </span>
        </div>
    )
}

export default SearchHeader;