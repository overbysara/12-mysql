# Node.js & MySQL

## Overview

In this activity, I created an Amazon-like storefront using Node.js and MySQL. The app takes in orders from customers and depletes stock from the store's inventory.

* Screenshots of app and user flow:
- Database created in SQL: https://github.com/overbysara/12-mysql/blob/master/images/created-database-and-table.png
- Inserted data into table: https://github.com/overbysara/12-mysql/blob/master/images/inserted-data-into-table.png
- User flow (see yellow text): https://github.com/overbysara/12-mysql/blob/master/images/user-flow-for-app.png
...

1. Created a MySQL Database called `bamazon` with a Table inside of that database called `products`. The products table has these columns:

   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
   * stock_quantity (how much of the product is available in stores)

Populated the database with mock data.


2. Created a Node application called `bamazonCustomer.js`. Running this application displays all of the items available for sale. Include the ids, names, and prices of products for sale. The pplication prompts users for sales, checks product availability, and fulfulls customer orders.