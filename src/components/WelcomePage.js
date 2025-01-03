import React from "react";

const WelcomePage = () => {
    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Welcome to the Simple Library System</h1>
            <p>
                This app allows you to manage your library by performing CRUD operations:
                search, add, update, and delete books. Start managing your books now!
            </p>
        </div>
    );
};

export default WelcomePage;