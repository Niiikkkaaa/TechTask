
# TechTask


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
MockAPI was used as the API service, which allows for the quick generation of fake data for testing, development, and demonstration purposes.  
Was created an endpoint: https://6797be91c2c861de0c6dd89c.mockapi.io/api/reviews/reviews which returns an array of objects. Each object has the following structure:
{
  review: string,
  rating: number,
  id: string,
}
