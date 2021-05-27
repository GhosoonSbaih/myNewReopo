
Feature: :Automationpractice Main Page

    I want to open a main page

    @focus
    Scenario: Opening an Automationpractice main page
    Given  The user visits automationpractice page
    When   The user hover over the "Faded Short Sleeve T-shirts" item
    And    The user clicks on the "Add to Cart" button
    Then   The user should see a popup opened with  "Product successfully added to your shopping cart" title

    
   Scenario: Clicks on the "Add to cart" button
   Given The user visits the automation practice page 
   When  The user clicks on the "Add to Cart" button
   And   Popup should be opened 
   And   The user clicks on the "Proceed to checkout" 
   Then  The user should see a new page with "SHOPPING-CART SUMMARY" title