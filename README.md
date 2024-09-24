
# Recipe Finder

A simple app to find recipes based on ingredients using the Edamam API.

## Project Setup

### Link to live project

Check out the live version of the project [here](https://hassaanahmedqureshi.github.io/recipe-finder/).

### 1. Clone the repository
```
git clone https://github.com/hassaanahmedqureshi/recipe-finder.git
cd recipe-finder
```

### 2. Install dependencies
```
npm install
```

### 3. Create and configure `.env` files

To run this project, you need an Edamam API Application ID and Key. Follow these steps:

- Sign up for an API key at [Edamam's website](https://developer.edamam.com/).
- Create a `.env` file in the root of your project and add your API credentials as follows:

```bash
VUE_APP_API_ID=your_edamam_app_id
VUE_APP_API_KEY=your_edamam_app_key
```

Replace `your_edamam_app_id` and `your_edamam_app_key` with the actual credentials from Edamam.

### 4. Compiles and hot-reloads for development
```
npm run serve
```

### 5. Compiles and minifies for production
```
npm run build
```

### 6. Lints and fixes files
```
npm run lint
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
