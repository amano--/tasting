module.exports = {
  input: 'src/auto/apis', // "input" of aspida is "output" for openapi2aspida
  openapi: {
    inputFile: 'https://petstore.swagger.io/v2/swagger.json',
    mock: true
  } // Compatible with yaml/json of OpenAPI3.0/Swagger2.0
}
