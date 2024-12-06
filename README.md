# RDBC_UI-VRV-
## **Role Based Access conmtrol**

## **Project Overview**

This project is a frontend implementation of a **Role-Based Access Control (RBAC)** system, designed to provide an intuitive and secure user interface (UI) for managing users, roles, and permissions in an admin dashboard. The goal is to create a UI where administrators can easily assign roles, modify permissions, and manage users in a secure and user-friendly environment.

The project is built using **React** and **Bootstrap** for styling, with a focus on responsiveness and ease of use. The app simulates a real-world RBAC system that includes CRUD operations for users and roles, role-based permissions, and dynamic permissions assignment.

### **Features**
## **_User Management_ **
* Add, deactivate, and manage users. Admins can assign roles to users such as Admin, Editor, Viewer, etc.

## **_Role Management_** 
 * Define roles with descriptions and assign specific permissions to each role. Users are linked to roles to determine their access level.

## **_Permissions Matrix_**
* Role-based permissions define what actions users can perform (e.g., Create, Read, Update, Delete).

## **_Modal Windows_** 
* Use modal dialogs to add users and roles dynamically, ensuring a smooth user experience.

## **_Interactive UI_ **
* Visual components like tables, modals, and buttons allow administrators to manage users and roles effectively.

## **_Dynamic Table Population_** 
* User and role data is dynamically populated in tables and can be managed through buttons for interaction.

## **_Permissions Check_ **
* The system validates user permissions for performing specific actions based on their assigned role.


## **Technologies Used**
* HTML5: Used for creating the structure of the dashboard.
* CSS3: Styled the layout, modal components, and buttons with animations and transitions.
* javaScript: Handles dynamic content loading, form submission, and modal interaction.
* CSS Variables: Used for theming, including colors, borders, and transitions.


## File structure
-- graphql
├── index.html         
├── styles.css         
├── script.js          
└── README.md      

# Key Functionalities
1. **_User Management_**
Admins can add new users by filling in a form with the user's name, email, and role.
Deactivate/Activate a user account directly from the table by clicking the respective button.
User status is shown as "Active" or "Inactive."

2. **_Role Management_**
Add roles by defining the role name and description.
Edit and delete roles directly in the roles table.
Each role can have a specific permission set (e.g., Admin can perform create, read, update, and delete actions, while a User may only read data).

3. **_Permissions Matrix_**
* A simple permissions matrix (not fully implemented in this code) would allow setting specific actions (e.g., create, read, update, delete) for each role.
* Roles like "Admin", "Manager", and "User" have different sets of permissions based on the actions they can perform.

4. **_Modals_**
Modals are used to add new users and roles. They appear when you click the "Add User" or "Add Role" buttons.
They contain form fields for adding user information (name, email, role) and role information (name, description).

5. **_Dynamic Table Updates_**
New users and roles are added dynamically to the respective tables, allowing the admin to see immediate changes after form submission.
Tables are populated using JavaScript, so the data is manageable and can be updated in real time.

6. **_Permissions Logic_**
A permission checker function (hasPermission) is used to validate whether a user has permission to perform certain actions (e.g., create, read, update, delete).
This feature is essential for ensuring that users can only access or perform operations they are authorized for.

## **Code Description**
1. _HTML_
The index.html file contains the structure for the sidebar, user management, role management, and permission matrix sections. It also includes modal windows for adding new users and roles. The structure uses semantic HTML with proper ARIA roles for accessibility.

2. _CSS_
The styles.css file defines the design of the dashboard, including the layout, typography, button styles, modal animations, and table styling. Key design features include:

1. _Color Scheme_: Defined using CSS variables for easy customization.
2. _Animations_: Smooth transitions for button hover effects and modal popups.
3. _Responsive Design_: Media queries ensure the dashboard is mobile-friendly.
JavaScript
The script.js file contains the functionality to:

 ## **Open and close modals.**
* Handle form submissions for adding users and roles.
* Manage user table rows dynamically.
* Implement role-based permission checking.
* The script includes an example of how permissions are checked for users based on their roles (Admin, User, Manager, etc.).

## **Usage**

**_Adding a User:_**
1. Click on the "Add User" button under the Manage Users section.
2. Fill out the form with the user's name, email, and role, and submit.
3. The user is added to the user table and can be activated or deactivated.

**_Adding a Role:_**
1. Click on the "Add Role" button under the Manage Roles section.
2. Fill out the form with the role name and description, then submit.
3. the role is added to the role table, and you can edit or delete it.

**_Checking Permissions:_**

The system checks if a user can perform an action based on their assigned role. You can test this using the testPermissions() function in the JavaScript code.
Contributing
Feel free to contribute to the project by:

Reporting bugs.
Suggesting features.
Creating pull requests for improvements.
