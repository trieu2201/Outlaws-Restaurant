# Task 3
Architecture design  
The team needs to perform the following tasks:

- Task 3.1. Describe an architectural approach you will use to implement the desired system
- Task 3.2. Draw an implementation diagram for Major (not all) functional requirements

## Task 3.1
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


## Task 3.2
![](https://i.imgur.com/9oX3Nfv.png)
