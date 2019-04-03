import React, { Component } from "react";
import { getCategory } from "../services/categoryService";
import { getProducts, deleteProduct } from "../services/productService";
import ListGroup from "./common/listGroup";
import _ from "lodash";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import "../component/ProductList/ProductList.css";
import Product from "../component/Product";

class Products extends Component {
  state = {
    products: [],
    category: [],
    currentPage: 1,
    searchQuery: "",
    pageSize:4,
    selectedCategory: null,
    sortColumn: { path: "name", order: "asc" }
  };

  componentDidMount() {
    const category = [{ _id: "", name: "All" }, ...getCategory()];
    this.setState({ products: getProducts(), category });
  }
  handleDelete = product => {
    const products = this.state.products.filter(m => m._id !== product.id);
    this.setState({ products });
    deleteProduct(product.id);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleCategorySelect = category => {
    this.setState({
      selectedCategory: category,
      searchQuery: "",
      currentPage: 1
    });
  };
  handleSearch = query => {
    this.setState({
      searchQuery: query,
      selectedCategory: null,
      currentPage: 1
    });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedCategory,
      searchQuery,
      products: allProducts
    } = this.state;

    let filtered = allProducts;
    if (searchQuery)
      filtered = allProducts.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedCategory && selectedCategory._id)
      filtered = allProducts.filter(
        m => m.category._id === selectedCategory._id
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length: count } = this.state.products;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: products } = this.getPagedData();
    console.log("data", products);
    return (
      <div className="container">
        <h1 className="align-center">Products</h1>
        <p>Showing {totalCount} Products in the database.</p>
        
        <div className="row justify-content-lg-start">
          <div className="col col-2">
            <ListGroup
              items={this.state.category} style={{width:'25rem'}}
              selectedItem={this.state.selectedCategory}
              onItemSelect={this.handleCategorySelect}
            />
         
          <ul className="product-list">
            {products.map(product => (
              <li key={product.id} className="product-list__item">
                <Product {...product} />
              </li>
            ))}
          </ul>
        </div>
        </div>
       
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>   
    );
  }
}

export default Products;
