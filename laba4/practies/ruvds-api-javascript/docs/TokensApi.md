# RuvdsApi.TokensApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokensCreate**](TokensApi.md#tokensCreate) | **POST** /v2/tokens | Создание токена
[**tokensGet**](TokensApi.md#tokensGet) | **GET** /v2/tokens/{token_id} | Получение информации о токене доступа к API.
[**tokensList**](TokensApi.md#tokensList) | **GET** /v2/tokens | Список всех токенов авторизации API V2
[**tokensPut**](TokensApi.md#tokensPut) | **PUT** /v2/tokens/{token_id} | Пересоздание токена доступа к API.



## tokensCreate

> TokenData tokensCreate(opts)

Создание токена

Для создания токена отправьте POST пост запрос по адресу &#x60;/v2/tokens&#x60; установив необходимые параметры. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.TokensApi();
let opts = {
  'tokenCreate': new RuvdsApi.TokenCreate() // TokenCreate | 
};
apiInstance.tokensCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenCreate** | [**TokenCreate**](TokenCreate.md)|  | [optional] 

### Return type

[**TokenData**](TokenData.md)

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tokensGet

> Token tokensGet(tokenId)

Получение информации о токене доступа к API.

Для получения информации о токене доступа отправьте GET запрос по адресу &#x60;/v2/tokens/$TOKEN_ID&#x60;.

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.TokensApi();
let tokenId = "tokenId_example"; // String | Уникальный ID токена.
apiInstance.tokensGet(tokenId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| Уникальный ID токена. | 

### Return type

[**Token**](Token.md)

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokensList

> AllTokensResponse tokensList()

Список всех токенов авторизации API V2

Чтобы получить список всех окенов авторизации API V2 отправьте GET запрос по адресу &#x60;/v2/tokens&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.TokensApi();
apiInstance.tokensList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AllTokensResponse**](AllTokensResponse.md)

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokensPut

> TokenData tokensPut(tokenId)

Пересоздание токена доступа к API.

Для пересоздания токена доступа отправьте PUT запрос по адресу &#x60;/v2/tokens/$TOKEN_ID&#x60;. Старое значение токена станет невалидным. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure HTTP basic authorization: basic_auth
let basic_auth = defaultClient.authentications['basic_auth'];
basic_auth.username = 'YOUR USERNAME';
basic_auth.password = 'YOUR PASSWORD';
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.TokensApi();
let tokenId = "tokenId_example"; // String | Уникальный ID токена.
apiInstance.tokensPut(tokenId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| Уникальный ID токена. | 

### Return type

[**TokenData**](TokenData.md)

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

