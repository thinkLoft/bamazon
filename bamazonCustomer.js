var mysql = require('mysql');
var inquirer = require('inquirer');
require('dotenv').config();
var customerChoice;

var connection = mysql.createConnection({
  host: process.env.DB_HOST,

  // Your port; if not 3306
  port: process.env.DB_PORT,

  // Your username
  user: process.env.DB_ID,

  // Your password
  password: process.env.DB_SECRET,
  database: process.env.DB_bamazon
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);

  allProducts();
});

function allProducts() {
  connection.query('SELECT * FROM products;', function(err, res) {
    if (err) throw err;
    console.log(
      "BAMAZON STOREFRONT \n============================\n============================'"
    );
    for (i = 0; i < res.length; i++) {
      console.log(
        'Item ID: ' +
          res[i].item_id +
          '\nName: ' +
          res[i].product_name +
          '\nCost: $' +
          res[i].price +
          '\nStock: ' +
          res[i].stock_quantity +
          '\n============================'
      );
    }
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What would you like to buy (insert ID ##)',
          name: 'item_id'
        },
        {
          type: 'input',
          message: 'How Many?',
          name: 'stock_quantity'
        }
      ])
      .then(function(res) {
        getProduct(res);
        connection.end();
      });
  });
}

function checkStock(choice, product) {
  if (product[0].stock_quantity < choice.stock_quantity) {
    console.log('Insufficient quantity!');
  } else {
    console.log('enough');
  }
}

function getProduct(res) {
  customerChoice = res;
  connection.query(
    'SELECT * FROM products WHERE ?',
    {
      item_id: customerChoice.item_id
    },
    function(err, res) {
      if (err) throw err;
      if (res.length < 1) {
        console.log('Bad Input');
      } else {
        checkStock(customerChoice, res);
      }
    }
  );
}
