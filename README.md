# wdio-project

Automation Framework for Swiggy Test cases:
============================================

Framework: Mocha

Features:
Node(v8.11.4)
NPM 6.4.1
WebdriverIO (v5.x)
Page Object Pattern
Chai integration
CI (Jenkins) + GIT
Junit, Specs reporter

Scenario's selected:
=====================

1.CheckSwiggyCreateAccount.test - The test case is to check creation of user account in swiggy

2. CheckSwiggyInvaildOTP.test - The test case is to check login to swiggy with existing phone number, enter invalid OTP.Verify the Error message " Enter Valid OTP is displayed"

3.CheckSwiggyitemAdditionToCart.test - The test case is to check addition of items to cart.Verify the only that particular item is added.

4.CheckSwiggyoffers.test - The test case is to check offer  page displays only restaurant with offers.All restaurant is fetched and verified for % off

5.CheckSwiggySearch.test - The test case is to check search bar displays only the items searched . Search with "Vag San" and verified that only "Veg Sandwich" is displaed 


Jenkins Integeration :
=======================

Attaced video refernce and also added the same video to git hub location of the project
