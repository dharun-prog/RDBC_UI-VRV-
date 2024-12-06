// Utility Functions for Modal Management
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("show");
};

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("show");
};

// Create a table row with dynamic content
const createTableRow = (columns) => {
    const row = document.createElement("tr");
    columns.forEach((col) => {
        const cell = document.createElement("td");
        if (typeof col === "string") {
            cell.textContent = col;
        } else if (Array.isArray(col)) {
            col.forEach((el) => cell.appendChild(el)); // Append multiple elements
        } else {
            cell.appendChild(col); // Append single element
        }
        row.appendChild(cell);
    });
    return row;
};

// Add event listeners to close modal when clicking outside or using close buttons
document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal(modal.id);
    });
});
document.querySelectorAll(".modal .close-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal.id);
    });
});

// User Management Logic
const userTable = document.getElementById("userTable");

document.getElementById("addUserForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const role = document.getElementById("userRole").value.trim();

    if (!name || !email || !role) {
        alert("All fields are required!");
        return;
    }

    // Create Deactivate/Activate button
    const deactivateButton = document.createElement("button");
    deactivateButton.textContent = "Deactivate";
    deactivateButton.className = "danger";
    deactivateButton.addEventListener("click", () => {
        const statusCell = deactivateButton.closest("tr").children[3];
        const isActive = statusCell.textContent === "Active";
        statusCell.textContent = isActive ? "Inactive" : "Active";
        deactivateButton.textContent = isActive ? "Activate" : "Deactivate";
    });

    // Add user row
    const row = createTableRow([name, email, role, "Active", deactivateButton]);
    userTable.appendChild(row);

    closeModal("addUserModal");
    e.target.reset();
});

// Role Management Logic
const roleTable = document.getElementById("roleTable");

document.getElementById("addRoleForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const roleName = document.getElementById("roleName").value.trim();
    const roleDescription = document.getElementById("roleDescription").value.trim();

    if (!roleName || !roleDescription) {
        alert("All fields are required!");
        return;
    }

    // Create Edit and Delete buttons
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        alert(`Edit role: ${roleName}`);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "danger";
    deleteButton.addEventListener("click", () => {
        if (confirm(`Are you sure you want to delete the role "${roleName}"?`)) {
            roleTable.deleteRow(deleteButton.closest("tr").rowIndex);
        }
    });

    // Add role row
    const row = createTableRow([roleName, roleDescription, [editButton, deleteButton]]);
    roleTable.appendChild(row);

    closeModal("addRoleModal");
    e.target.reset();
});

// Permission Checker
const roles = {
    admin: ["create", "read", "update", "delete"],
    user: ["read"],
    manager: ["read", "update"],
    guest: ["read"],
};

const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "manager" },
    { id: 4, name: "Diana", role: "guest" },
];

const getUserById = (userId) => users.find((user) => user.id === userId);

const hasPermission = (userId, action) => {
    const user = getUserById(userId);
    if (!user) {
        console.error(`User with ID ${userId} not found`);
        return false;
    }

    const userPermissions = roles[user.role];
    return userPermissions ? userPermissions.includes(action) : false;
};

const testPermissions = () => {
    const testCases = [
        { userId: 1, action: "create" },
        { userId: 2, action: "delete" },
        { userId: 3, action: "update" },
        { userId: 4, action: "read" },
        { userId: 5, action: "read" },
    ];

    testCases.forEach(({ userId, action }) => {
        const result = hasPermission(userId, action);
        console.log(`User ID ${userId} attempting to ${action}: ${result}`);
    });
};

// Call the test function
testPermissions();
