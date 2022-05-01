# POS SYSTEM (Software Engineering Assignment)
**Team name:** Outlaws 
**Task 1:** Requirement Elictation 
**Task 2:** Activity, Sequence and Class Diagram 
**Task 3:** Architecture design 
**Task 4:** Implementation – Sprint 1 
**Date:** April 16<sup>rd</sup>, 2022 (task 3)

## Members
- Nguyễn Đình Minh (1952092)
- Bạch Gia Bảo (1952017)
- Lưu Trịnh Lâm (1952315)
- Phạm Đình Trung (1952512)
- Trần Cảnh Triệu (1952139)

## Task 1
### Task 1.1
#### Context of Project
A whole new POS system upgraded from the traditional POS in the earlier restaurant businesses which often include table reservation, ordering food, alerts, billing, credit card processing, and customer management.

#### Relevant Stakeholders
- Bank
- System Management Staff
- IT help
- End User
- Project Manager
- Server Hoster
- Restaurant Owner
- Restaurant Manager
- Waiter/Waitress
- Clerk
- Kitchen Staff
- Restuarant Investor

#### Expected Jobs
- Add take-away option
- Develop a web application with an associated QR code
- Enhance web-based responsiveness on multi-platform
- Ensure database consistency and well-managed between different branches
- Synchronize Server and maintain Server throughput
- Support dine-in (table reservation) and take-away orders

#### Scope of Project
The project focuses on the digitalized solution for a typical restaurant. Traditionally, most restaurants greets their customers directly in person, allocates them an empty table (if available), and serves the food that the customers find interested in from the menu. This scheme of serving is still an option for small businesses, but not quite a smart tactic for larger investors, especially during the time of Covid-19. These days, people don't usually approach a random luxurious restaurant without knowing first the food the restaurant offers, or if there is any table left for them on arrival. Also, the Covid-19 disease has made the dine-in option implausible, resulting to a demand of an alternative for traditional serving.

This is where the POS system comes in. Using the system, customers can now view the restaurant's menu on their favorite device, order their lovely food or drinks, and proceed to checkout directly with their associated bank issuer. If dine-in is their preferred style, customers can also book a spot at the restaurant using the same system. In other words, the software provides a couple of useful services for the customers without them arriving at the place.

The restaurant staff also benefits from the system. Clerks and managers no longer have to handle the order and checkout manually. Monthly feedback and helps the owners gain a better insight into their customers' wishes. If the restaurant has many branches, the system can handle them all in a unified scheme of serving. With this modern and extensible serving system, the restaurant owners can totally rely on the underlying automatic software to help them fulfil the need of their customers.

Nevertheless, the system also has its own limited constraints. First, the digital transaction is rely only on 3<sup>rd</sup> party system. Second, there is an uppper bound on the number of online orders that the restaurant could handle per day. Moreover, the whole system is carried over web application, implying a need for devices that supports standard browser. Lastly, the system has no control over the speed that it can respond to users. The throughput totally relies on the network traffic that the users are using to access the system. These are the boundaries imposing on the system.

### Task 1.2

#### Functional requirements:
- The order must be recorded to the database.
- Customers can order meals and beverages from the menu.
- Customers can view the menu.
- The webs can show the total price when the customer is ordering.
- Has the ability to record the feedback and transactions.
- Give special recommendations based on the most orderd food and beverage.
- Can show other customer food and beverage feedback. (Optional)
- The clerks should be alert when a customer places an order.
- Accept only online payment methods such as banking, e-wallet.
- Has the ability to show the current stocks of particular foods and beverages.
- Table booking must display curent available tables for dine-in customers.
- Customers can register an user account using an email address ad an associated custom password if wanted.
- The admin can modify the menu and the prices.

#### Non-functional requirements:
- The system must respond within 1 second.
- Sysem is able to serve 300 orders per day.
- Payment and bank information and password must be secured.
- Personal information when ordering / delivery should be secured.
- Easy to scale up to 20 branches.
- The system must conform to responsive design
- Ordering system and table booking is only available during working hours.

#### Use-case diagram for the whole system

![](https://i.imgur.com/Lmcp1yR.png)


### Task 1.3
The following figure is the use-case diagram for the activity *Order Food*.

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
| **Exceptions**       | The system is down <br> Order is placed in non-working hours <br> Number of orders per day exceeds 300         |

## Task 2
### Task 2.1
The below diagram captures the major functional requirements of the system.

![](https://i.imgur.com/tYAA2F9.png)

### Task 2.2
The following figure illustrates the sequence diagram of the Task 1.3 above.

![](https://i.imgur.com/8lwAGJX.png)



### Task 2.3
The class diagram that shows all the related classes involved in the system.

![](https://i.imgur.com/PEcTBOT.png)


## Task 3
Architecture design  
The team needs to perform the following tasks:

- Task 3.1. Describe an architectural approach you will use to implement the desired system
- Task 3.2. Draw an implementation diagram for Major (not all) functional requirements

### Task 3.1
The architecture design that we decide to use is **MVC** (Model-View-Controller) pattern.
The **MVC** model contains three essential components:
- **Model**: contains the data logic represented by database (User Database, Order Database), can be modified by the **Controller**.
- **View**: consist of the user interface where users can view data from the **Model** and interact with the system through **Controller** (end-users UI and admin UI).
- **Controller**: acts a brain of the model, it proccess input events (user interactions), select **View** to display and manipulate **Model** data if necessary.

We choose **MVC** model due to the following reasons:
- First, **MVC** model support rapid and parallel development - Our system is divided into three separate parts which can be implemented independently.
- Second, **MVC** model provide multiple views - Our restaurant site must display various forms of information which can be represented by different views from the model.
- Third, **MVC** model is convenient for maintenance and modification - Our system demand dynamic changes. For example, adjustments in View do not affect the Model and Controller module.
- Fourth, **MVC** model supports TTD (test-driven development) – Our system contains multiple features and components. As **MVC** is defined and structured properly, it enhances the testability of the whole system.

Link the **MVC** model to our project, for example of the food ordering process:

![](https://i.imgur.com/3cSmaqv.png)


### Task 3.2
![](https://i.imgur.com/9oX3Nfv.png)

## Task 4

- Task 4.1: Setting up. The team creates an online repository (github, bitbucket, etc) for version control.
- Task 4.2: Adding documents, materials and folders for Requirement, System modelling and Architectural design. Use the selected version control system to report the changes to these files/ folders
- Task 4.3: Implement a Minimum Viable Product (MVP) for the menu screen in Figure 2 and demonstrate the result. MVP means that do the least to be able to demonstrate. That means at this stage, no need for a database to store all menu items, customers, etc. Data can be hard coded in code files.
