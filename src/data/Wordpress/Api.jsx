import React from 'react';

const baseUrl = 'http://mintonagency.com/wp-json/wp/v2/';
const menuUrl = 'http://mintonagency.com/wp-json/wp-api-menus/v2/menus/';

export default class Api {
    posts(id) {
        let url = `${baseUrl}posts`;
        if (id !== undefined) {
            url += `/${id}`;
        }

        url += '?_embed';

        return fetch(url).then(res => res.json());
    }

    main_menu(id) {
        let url = `${menuUrl}76`;

        return fetch(url).then(res => res.json());
    }
}
