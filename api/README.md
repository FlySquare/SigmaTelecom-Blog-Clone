
# Project Details - SigmaTelecom Blog API

This project was developed to collect specific data from sigmatelecom.com/blog. For this purpose, using cheerio and Node.js, it will collect the title, date, and content of blog posts and return this data in json format.

## Requirements
* Node.js (v12 or newer)

## Setup

* Clone or download this repository.
* Open the console and go to the home directory of the project.
* Run the `npm install` command.
* Copy the .env.example file and save it as .env.

## Usage

* Open the console and go to the home directory of the project.
* Run the `npm start` command.
* Send a GET request to localhost:3000.

## API Reference

#### Get All Posts (Pagination)

```http
  GET /api/posts/page/:id
```

| Parameter | Type     | Description                |
|:---------------| :------- | :------------------------- |
| `id`           | `string` | **Required**. |

#### Get Post By ShortCode

```http
  GET /api/post/:shortCode
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `shortCode` | `string` | **Required**. |

## Developer
- [@flysquare](https://www.github.com/flysquare)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Support
For support, you can contact over Umutkonrinso@gmail.com or https://iamumut.com.
You can open an issue request on this project.

