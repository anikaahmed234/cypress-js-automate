# cypress-js-automate

This Cypress test automation script visits the website https://magento.softwaretestingboard.com/, performs a series of actions, and makes assertions to ensure that the expected results are achieved. The script carries out the following steps:

Visits the website https://magento.softwaretestingboard.com/

Hovers on the Women tab

Hovers on the Tops button

Clicks on Jackets

Waits for the page to load

Clicks on Sort By

Selects Price

Waits for the page to load

Scrolls down to Lemonade Jacket card

Clicks on the card

Waits for the page to load

Clicks on Size L

Clicks on Black color

Clicks on Qty

Clears the quantity input field

Type 2

Clicks on Add to Cart

Waits for the page to load

Clicks on Cart

Edits the order to Size M, Black, 2

Clicks on Update

Clicks on Apply Discount Code

Types in the discount code

Clicks Apply

Clicks on Proceed to Checkout

Clicks on the item in the cart

Checks the name and price of the item

Clicks on View Details

Scrolls down to Next and clicks on it

To run this script, you should have Cypress installed on your machine. You can download and install it from the official website (https://www.cypress.io/).

Once you have installed Cypress, follow these steps to run the script:

Clone this repository to your local machine.

Open the cloned repository in your code editor.

Open a terminal in the root of the cloned repository.

# Run the following command to open Cypress:
npx cypress open

Click on the cypress_site_automation.js file to run the test.

The script will automatically launch the browser and run through the steps.

After the script has finished running, you can view the test results in the Cypress Test Runner.

That's it! With these steps, you can automate the testing of the website https://magento.softwaretestingboard.com/ using Cypress.
