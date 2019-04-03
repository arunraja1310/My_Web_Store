import React, { Component } from "react";
import { getCategory } from "../services/categoryService";
import { getProducts, deleteProduct } from "../services/productService";
import ListGroup from "./common/Dropdownlist";
import _ from "lodash";
import Sidenavbar from './sidenav/sidenavbar';
import SearchBox from "../component/searchBox";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import "../component/ProductList/ProductList.css";
import ProductTable from "./productTable";

class Products extends Component {
  constructor(props) {
    super();
  }
  state = {
    products: [],
    category: [],
    currentPage: 1,
    searchQuery: "",
    pageSize: 6,
    selectedCategory: null,
    sortColumn: { path: "name", order: "asc" }
  };

  componentWillReceiveProps() {
    
  }
  componentDidMount() {
    const category = [{ _id: "", name: "All Categories" }, ...getCategory()];
    this.setState({ products: getProducts(), category });
  }
  handleDelete = product => {
    const products = this.state.products.filter(m => m.id !== product.id);
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
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
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
    return (
      <div className="container">
        <h4 >Products</h4>
 
        <div className="row  bg-secondary " >
           

        <div className="col col-md-2 my-3">
              <ListGroup
                items={this.state.category}
                selectedItem={this.state.selectedCategory}
                onItemSelect={this.handleCategorySelect}
              />
            </div>
       
            <div className="col"> 

                 <SearchBox  value={searchQuery} onChange={this.handleSearch} />
              </div>

        <div className="col col-md-2"> 
          <Link
            to="/products/new"
            className="btn btn-secondary my-3"
            style={{ marginTop: 20 }}
          >
            Add New Item
          </Link>
</div>
        </div>
        <br />
       
            
            <div className="container  ">
              <ProductTable
                product={products}
                sortColumn={sortColumn}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />
            </div>
         
      
        <div className="row justify-content-md-center">
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Products;
