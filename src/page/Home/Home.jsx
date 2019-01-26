import React from 'react';

import Header from './Header/Header.jsx';

import Category from './Category/Category.jsx';

/**
 * @constructor <Home />
 * @description 首页tab代码
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <Category />
            </div>
        )
    }

}

export default Home;