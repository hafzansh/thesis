<div align="center"> 

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>


<!-- PROJECT HEAD -->
<h2 align="center">GridJS Buttons</h2>

<p align="center">
  An awesome GridJS plugin that lets you create add, edit, delete buttons easily!
  <br />
  <a href="#usage"><strong>View Examples »</strong></a>
  <br />
  <br />
  <a href="https://github.com/kaanrkaan/gridjs-buttons/issues">Report Bug</a>
  ·
  <a href="https://github.com/kaanrkaan/gridjs-buttons/issues">Request Feature</a>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![GridJS Buttons Screenshot][product-screenshot]](https://github.com/kaanrkaan/gridjs-buttons)

GridJS is one of the best opensource library on the current market. However, It is missing one of the most crucial utility when
using the table for CRUD control; action buttons... So, rather than looking for a replacement library for GridJS, I decided to develop
a plugin for GridJS that solves this problem.

Here's why you should use this plugin instead of creating additional buttons and then styling it:

* This plugin when combined with RowSelection plugin allows you to set maximum selected checkboxes.
* This plugin is highly style-able and easy to overwrite the classes of buttons
* This plugin saves your precious time when you need to create one or many table with buttons

Of course, this plugin currently won't be able to solve all your needs as your needs might be more sophisticated.
Feel free to create a future request to wait for a new release or maybe even take your needs into your hands and contribute to this plugin
so that the other developers in need won't have to code the same task again.



### Built With

This plugin will only work for GridJS.

* [GridJS](https://gridjs.io/)
* [JavaScript](https://jquery.com)
* [TypeScript](https://www.typescriptlang.org/)



<!-- GETTING STARTED -->
## Getting Started

Currently, this package only supports NPM package manager, but in future release all the modern package managers will be supported



### Prerequisites

Currently, the buttons icons depends on FontAwesome. But, you can always change the default styling via settings.
* GridJS
    ```sh
    npm install gridjs
    ```
* FontAwesome
  ```sh
  npm install font-awesome
  ```



### Installation
Via NPM
   ```sh
   npm install gridjs-buttons
   ```



<!-- CONFIG -->
## Configuration
This plugin is developed as versatile as possible, so you can change every style and options while initializing the plugin.
### Basic Config - JavaScript
```js
const config = {
    onAdd: function (rowIds) {

    },
    onEdit: function (rowIds) {

    },
    onDelete: function (rowIds) {

    }
}
```



### Basic Config - TypeScript
```ts
import { GridjsButtonsProps } from 'gridjs-buttons';

const config: GridjsButtonsProps = {
    onAdd: function (rowIds: Array<any>) {
        console.log('selectedIds', rowIds);
    },
    onEdit: function (rowIds: Array<any>) {
        console.log('selectedIds', rowIds);
    },
    onDelete: function (rowIds: Array<any>) {
        console.log('selectedIds', rowIds);
    }
};
```



### Full Config - JavaScript
```js
const config = {
    classList: {
        buttonClass: "",
        addButtonClass: "",
        editButtonClass: "",
        deleteButtonClass: "",
        addIconClass: "",
        editIconClass: "",
        deleteIconClass: "",
    },
    buttonsList: {
        add: true,
        edit: true,
        delete: true
    },
    selectId: "rowSelect",
    maxInputCount: 1,
    onAdd: function () {

    },
    onEdit: function () {

    },
    onDelete: function () {

    }
};
```



### Full Config - TypeScript
```ts
import { GridjsButtonsProps } from 'gridjs-buttons';

const config: GridjsButtonsProps = {
    classList: {
        buttonClass: "",
        addButtonClass: "",
        editButtonClass: "",
        deleteButtonClass: "",
        addIconClass: "",
        editIconClass: "",
        deleteIconClass: "",
    },
    buttonsList: {
        add: true,
        edit: true,
        delete: true
    },
    selectId: "",
    maxInputCount: 1,
    onAdd: function (rowIds: Array<any>) {
        console.log("selectedIds", rowIds);
    },
    onEdit: function (rowIds: Array<any>) {
        console.log("selectedIds", rowIds);
    },
    onDelete: function (rowIds: Array<any>) {
        console.log("selectedIds", rowIds);
    }
};
```

### Default Config Values

```json
{
  "classList": {
    "buttonClass": "btn",
    "addButtonClass": "btn-success",
    "editButtonClass": "btn-info",
    "deleteButtonClass": "btn-danger ml-2",
    "addIconClass": "fa-solid fa-plus",
    "editIconClass": "fa-solid fa-pen",
    "deleteIconClass": "fa-solid fa-trash"
  },
  "defaultButtons": {
    "add": true,
    "edit": true,
    "delete": true
  },
  "selectId": "selectRow",
  "maxInputCount": 1
}
```



<!-- USAGE EXAMPLE -->
## Usage
The following examples will use id tag as selectId
### Example with JavaScript
```js
// GridJS mermaid theme
import "gridjs/dist/theme/mermaid.css";
//only need to import this if you are planning to use default styling
import "gridjs-buttons/dist/theme/gridjs-buttons.css";

import { Grid, PluginPosition } from "gridjs";
import { RowSelection } from "gridjs/plugins/selection";
import { GridjsButtons } from "gridjs-buttons";

const config = {
    // you can delete classList if you are planning to use default styling
    classList: {
        buttonClass: "btn",
        addButtonClass: "btn-success",
        editButtonClass: "btn-info",
        deleteButtonClass: "btn-danger ml-2",
        addIconClass: "fa-solid fa-plus",
        editIconClass: "fa-solid fa-pen",
        deleteIconClass: "fa-solid fa-trash"
    },
    buttonsList: {
        add: true,
        edit: true,
        delete: true
    },
    // you can delete selectId if you are using id of RowSelection as selectRow.
    selectId: "selectRow",
    // you can delete maxInputCount if you want to allow only 1 checkboxes selected at the time.
    maxInputCount: 1,
    onAdd: function (rowIds) {
        console.log("selectedIds", rowIds);
    },
    onEdit: function (rowIds) {
        console.log("selectedIds", rowIds);
    },
    onDelete: function (rowIds) {
        console.log("selectedIds", rowIds);
    }
};

const cols = [
    {
        id: "selectRow",
        name: "Select",
        data: () => false,
        plugin: {
            component: RowSelection,
            props: {
                id: (row: any) => row.cell(1).data
            }
        },
        sort: false
    },
    {
        name: "id",
        hidden: true,
        sort: true
    },
    {
        name: "Name"
    },
    {
        name: "Email"
    }
];

const data = [
    [1, "Kaan Kaan", "kaankaan@k2k.dev"],
    [2, "Example 1", "example1@k2k.dev"],
    [3, "Example 2", "example2@k2k.dev"]
];

new Grid({
    columns: cols,
    data: data,
    sort: true,
    plugins: [
        {
            id: 'buttons',
            component: GridjsButtons,
            position: PluginPosition.header,
            props: config
        }
    ],
    search: {
        enabled: true
    },
    pagination: {
        enabled: true
    }
}).render(document.getElementById('<your-table-wrapper-element-id>'));
```



### Example with TypeScript
```ts
// GridJS mermaid theme
import "gridjs/dist/theme/mermaid.css";
//only need to import this if you are planning to use default styling
import "gridjs-buttons/dist/theme/gridjs-buttons.css";

import { Grid, PluginPosition } from "gridjs";
import { RowSelection } from "gridjs/plugins/selection";
import { GridjsButtons, GridjsButtonsProps } from "gridjs-buttons";

const config = {
    // you can delete classList if you are planning to use default styling
    classList: {
        buttonClass: "btn",
        addButtonClass: "btn-success",
        editButtonClass: "btn-info",
        deleteButtonClass: "btn-danger ml-2",
        addIconClass: "fa-solid fa-plus",
        editIconClass: "fa-solid fa-pen",
        deleteIconClass: "fa-solid fa-trash"
    },
    buttonsList: {
        add: true,
        edit: true,
        delete: true
    },
    // you can delete selectId if you are using id of RowSelection as selectRow.
    selectId: "selectRow",
    // you can delete maxInputCount if you want to allow only 1 checkboxes selected at the time.
    maxInputCount: 1,
    onAdd: function (rowIds: Array<any>) {
        console.log("selectedIds", rowIds);
    },
    onEdit: function (rowIds: Array<any>) {
        console.log("selectedIds", rowIds);
    },
    onDelete: function (rowIds: Array<any>) {
        console.log("selectedIds", rowIds);
    }
};

const cols: Array<any> = [
    {
        id: "selectRow",
        name: "Select",
        data: () => false,
        plugin: {
            component: RowSelection,
            props: {
                id: (row: any) => row.cell(1).data
            }
        },
        sort: false
    },
    {
        name: "id",
        hidden: true,
        sort: true
    },
    {
        name: "Name"
    },
    {
        name: "Email"
    }
];

const data: Array<any> = [
    [1, "Kaan Kaan", "kaankaan@k2k.dev"],
    [2, "Example 1", "example1@k2k.dev"],
    [3, "Example 2", "example2@k2k.dev"]
];

new Grid({
    columns: cols,
    data: data,
    sort: true,
    plugins: [
        {
            id: 'buttons',
            component: GridjsButtons,
            position: PluginPosition.header,
            props: config
        }
    ],
    search: {
        enabled: true
    },
    pagination: {
        enabled: true
    }
}).render(document.getElementById('<your-table-wrapper-element-id>'));
```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/kaanrkaan/gridjs-buttons/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Kaan Refik Kaan - kaankaan@k2k.dev

Project Link: [https://github.com/kaanrkaan/gridjs-buttons](https://github.com/kaanrkaan/gridjs-buttons)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kaanrkaan/gridjs-buttons?style=for-the-badge
[contributors-url]: https://github.com/kaanrkaan/gridjs-buttons/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kaanrkaan/gridjs-buttons?style=for-the-badge
[forks-url]: https://github.com/kaanrkaan/gridjs-buttons/network/members
[stars-shield]: https://img.shields.io/github/stars/kaanrkaan/gridjs-buttons?style=for-the-badge
[stars-url]: https://github.com/kaanrkaan/gridjs-buttons/stargazers
[issues-shield]: https://img.shields.io/github/issues/kaanrkaan/gridjs-buttons?style=for-the-badge
[issues-url]: https://github.com/kaanrkaan/gridjs-buttons/issues
[license-shield]: https://img.shields.io/github/license/kaanrkaan/gridjs-buttons?style=for-the-badge
[license-url]: https://github.com/kaanrkaan/gridjs-buttons/blob/master/LICENSE.txt
[product-screenshot]: https://raw.githubusercontent.com/kaanrkaan/gridjs-buttons/main/img/gridjs-buttons.png
