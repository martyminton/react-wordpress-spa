import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import Api from './../data/WordpressApi.jsx';
import { Link } from 'react-router-dom';

//Main Menu
class GlobalMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    ID: 76,
                    name: 'dealer_main',
                    slug: 'dealer_main',
                    description: '',
                    count: 3,
                    items: [
                        {
                            id: 69,
                            order: 1,
                            parent: 0,
                            title: 'Home',
                            url: 'http://domain.com/home/',
                            attr: '',
                            target: '',
                            classes: '',
                            xfn: '',
                            description: '',
                            object_id: 67,
                            object: 'page',
                            object_slug: 'home',
                            type: 'post_type',
                            type_label: 'Page'
                        },
                        {
                            id: 70,
                            order: 2,
                            parent: 0,
                            title: 'Inventory',
                            url: 'http://domain.com/inventory/',
                            attr: '',
                            target: '',
                            classes: '',
                            xfn: '',
                            description: '',
                            object_id: 4,
                            object: 'page',
                            object_slug: 'inventory',
                            type: 'post_type',
                            type_label: 'Page'
                        },
                        {
                            id: 71,
                            order: 3,
                            parent: 0,
                            title: 'Sample Page',
                            url: 'http://domain.com/sample-page/',
                            attr: '',
                            target: '',
                            classes: '',
                            xfn: '',
                            description: '',
                            object_id: 2,
                            object: 'page',
                            object_slug: 'sample-page',
                            type: 'post_type',
                            type_label: 'Page'
                        }
                    ],
                    meta: {
                        links: {
                            collection:
                                'http://domain.com/wp-json/wp/v2/menus/',
                            self: 'http://domain.com/wp-json/wp/v2/menus/76'
                        }
                    }
                }
            ]
        };
    }

    render() {
        const menuItems = this.state.data[0].items.map((item, i) => {
            console.log(item);
            return (
                <li key={item.id} className="item">
                    <Link to={item.object_slug}>{item.title}</Link>
                </li>
            );
        });

        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">{menuItems}</ul>
                </div>
            </nav>
        );
    }
}

export default GlobalMenu;
