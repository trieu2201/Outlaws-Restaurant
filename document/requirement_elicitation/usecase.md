#### Use-case diagram for the whole system

![](https://i.imgur.com/Lmcp1yR.png)


### The following figure is the use-case diagram for the activity *Order Food*.

![](https://i.imgur.com/f7pV3hu.png)


| ID and Name          | Use Case: Order Food      | 
| ---                  | ---                       |
| **Created By**       | Minh Nguyen, Pham Trung, Lam Luu, Bao Bach, Trieu Canh                                               |
| **Date Created**     | Feb 17, 2022              |
| **Primary Actor**    | End User                  |
| **Secondary Actors** | Bank, Clerk               |
| **Description**      | Customers can add food and beverages to their order. Also, they can choose type of service (take away or delivery) and payment method. Bank will proceed the payment and clerk will verify the order for sending cooking request to the kittchen. Giving feedback will be available after order has been placed              |
| **Trigger**          | End user view menu and add their choices to the cart                                               |
| **Preconditions**    | PRE-1. The order must be in working hours <br> PRE-2. Database / menu is up to date               |
| **Postconditions**   | POST-1. The Clerk recieve the orders and validate them <br> POST-2. Return the order's status to the customer <br> POST-3. Manage the online payment by a 3rd party bank system <br> POST-4. Record the order to the database                          |
| **Normal Flow**      | - End users first triggers the flow by adding any meal to their cart <br> - They can either add more food or drink to the cart or choose to view cart <br> - After viewing the cart, the users can proceed to checkout <br> - If **take-away** option is picked, the users are sent directly to the purchasing site, where they can choose payment method and enter the banking information <br> - The 3rd party bank issuer is involved to handle the transaction at this point <br> - Upon successful payment, users are encouraged to give feedback on their ordering experience <br> - If any feedback is given, it will be recored by the system <br> - In the mean time, clerks verify the purchased order by confirming it or canceling it <br> - If order is plausible, it will be recorded by the system; otherwise, a refund is processed |
| **Alternative Flow** | - End users first triggers the flow by adding any meal to their cart <br> - They can either add more food or drink to the cart or choose to view cart <br> -  After viewing the cart, the users can proceed to checkout <br> - If **delivery** option is picked, the users must provide delivery information before payment <br> - When done, the users are sent directly to the purchasing site, where they can choose payment method and enter the banking information <br> - The 3rd party bank issuer is involved to handle the transaction at this point <br> - Upon successful payment, users are encouraged to give feedback on their ordering experience <br> - If any feedback is given, it will be recored by the system <br> - In the mean time, clerks verify the purchased order by confirming it or canceling it <br> - If order is plausible, it will be recorded by the system; otherwise, a refund is processed |
| **Exceptions**       | The system is down <br> Order is placed in non-working hours <br> Number of orders per day exceeds 300
