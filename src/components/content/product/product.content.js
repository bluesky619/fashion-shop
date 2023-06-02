import { Container, Grid, Rating } from "@mui/material";
import './product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { buttons, product } from '../../../assets/product/product'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countNumberProduct } from "../../../actions/product.action";
import { useDispatch } from 'react-redux';

const Product = () => {
    const dispatch = useDispatch();
    const [filtredCollection, setFiltredCollection] = useState(null);

    function getProduct() {
        const productList = product;
        return productList;
    }

    function filterCollection(productType) {
        let filtredCollection = product.filter(type => type.type === productType);
        return filtredCollection;
    }

    useEffect(() => {
        setFiltredCollection(getProduct());
    }, [filtredCollection]);

    function handleCollection(e) {
        let typeCollection = e.target.value;
        typeCollection !== "all"
            ? setFiltredCollection(filterCollection(typeCollection))
            : setFiltredCollection(getProduct());

        console.log(typeCollection);
    }
    const [carts, setCarts] = useState([]);

    const navigate = useNavigate()
    const [filterProduct, setFilterProduct] = useState([]);

    const addToCart = (e) => {
        setCarts (carts => [...carts, e]);
        const ids = carts.map((value, index) => value?.id);
        const filter = carts.filter((product, index) => !ids.includes(product?.id, index + 1))
        setFilterProduct ( filter );
        localStorage.setItem('cart', JSON.stringify(filter))
        console.log(ids);
        console.log(filter);
    }
    useEffect(() => {
        dispatch(countNumberProduct(filterProduct))
        console.log(filterProduct);
    }, [carts, filterProduct])
    

    return (
        <Container>
            <Grid container className="row">
                <Grid item xs={12} className="product__collection">
                    {
                        buttons && buttons.map((element, index) => {
                            return (
                                <ul>
                                    <li type="button" key={index} value={element.value} onClick={handleCollection}>{element.name}</li>
                                </ul>
                            )
                        })
                    }
                </Grid>
            </Grid>
            <Grid container className="row product__filter">
                {
                    filtredCollection && filtredCollection.slice(0,8).map((value, index) => {
                        
                        return (
                            <Grid item xs={3} sm={3} key={index} className="mix-new-arrivals"  style={{ marginBottom: "40px" }}>
                                <Grid className="product__item_hover" item xs={12} sm={12}>
                                    <div className="product__item__pic set-bg" data-setbg="productItem1" onClick={(e) => navigate(`/products/${value.id}`)}>
                                        
                                        {
                                            value.status === undefined ? <img src={value.imageUrl} alt="" style={{ filter: "brightness(70%)" }}/> : 
                                            <>
                                            <img src={value.imageUrl} alt="" style={{ filter: "brightness(70%)" }}/>
                                            <span className="label">{value.status}</span>
                                            </>
                                            
                                        }
                                        
                                        <div className="product__item__icon">
                                            <FavoriteBorderOutlinedIcon className="icon" />
                                            <CompareArrowsOutlinedIcon className="icon" />
                                            <SearchOutlinedIcon className="icon" />
                                        </div>
                                    </div>
                                    <div className="product__item__text">
                                        <span type="button" className="add-cart" onClick={() => addToCart(value)}>+ Add To Cart</span>
                                    </div>
                                </Grid>

                                <Grid className="product__item" item xs={12} sm={12}>
                                    <div className="product__item__pic set-bg" data-setbg="productItem1">
                                        {
                                            value.status === undefined ? <img src={value.imageUrl} alt="" /> : 
                                            <>
                                            <img src={value.imageUrl} alt="" />
                                            <span className="label">{value.status}</span>
                                            </>
                                            
                                        }
                                        
                                    </div>
                                    <div className="product__item__text">
                                        <h6>{value.name}</h6>
                                    </div>
                                </Grid>
                                <div>
                                    <div className="rating">
                                        <Rating key={value.name} product={value} />
                                    </div>
                                    <h5>${value.price}</h5>
                                    <div className="product__color__select">
                                        <label for="pc-1" className>
                                            <input type="radio" id="pc-1" />
                                        </label>
                                        <label for="pc-2" className="black">
                                            <input type="radio" id="pc-2" />
                                        </label>
                                        <label for="pc-3" className="grey">
                                            <input type="radio" id="pc-3" />
                                        </label>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Product;