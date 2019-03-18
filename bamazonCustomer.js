// Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",

  // Your password
  password: "Dino1354!",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
  });
  
// Prompt user with two messages:
//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.
  function bidAuction() {
    // query the database for all items available for purcahse
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like
      inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].item_name);
              }
              return choiceArray;
            },
            message: "What item would you like to buy?"
          },
          {
            name: "item",
            type: "input",
            message: "What is the item_id for the product you would like to buy?"
          }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
            if (results[i].item_id === answer.choice) {
              chosenItem = results[i];
            }
          }
  
          // determine if there are enough items
          if (chosenItem < parseInt(answer.bid)) {
            // there are enough items, so update db, let the user know, and start over
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  highest_bid: answer.bid
                },
                {
                  id: item_id
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Item ordered!");
                start();
              }
            );
          }
          else {
            // not enough inventory
            console.log("Sorry, we are out of that item.");
            start();
          }
        });
    });
  }
  
  // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
// If your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.