import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class productTable extends Component {
  columns = [
    {
      path: "name",
      label: "ProductName",
      content: product => (
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      )
    },
    { path: "category.name", label: "category" },
    { path: "price", label: "Price" },
    { path: "inventory", label: "Inventory" },
    {
      key: "delete",
      content: product => (
        <button
          onClick={() => this.props.onDelete(product)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { product, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={product}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default productTable;
