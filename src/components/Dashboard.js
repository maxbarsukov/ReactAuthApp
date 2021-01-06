import React from 'react'

const Dashboard = () => {
    return(
        <div>
            <div>
                <h1>Dashboard</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
            </div>
        </div>
    );
}

export default Dashboard;
