# Node.js & MySQL

## Overview

In this activity, I created an Amazon-like storefront using Node.js and MySQL. The app takes in orders from customers and depletes stock from the store's inventory.

* Screenshots of user flow:
- Image description: URL
- Image description: URL
- Image description: URL
...

1. Created a MySQL Database called `bamazon` with a Table inside of that database called `products`. The products table has these columns:

   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
   * stock_quantity (how much of the product is available in stores)

Populated the database with mock data.


2. Created a Node application called `bamazonCustomer.js`. Running this application displays all of the items available for sale. Include the ids, names, and prices of products for sale. The pplication prompts users for sales, checks product availability, and fulfulls customer orders.