import React from 'react';
 class NavCatalogs extends React.Component {
   
    constructor(props) {
        super(props);
    }

    componentDidMount() {
         
    }


    render() {
        return (
            <div className = 'NavCatalogs'>
                <div className = 'NavItem'> Stocks</div>
                <div className = 'NavItem'> Products</div>
                <div className = 'NavItem'> Partners</div>
            </div>
        )
    }
}

export default NavCatalogs;