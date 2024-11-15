# RuvdsApi.TariffsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tariffsList**](TariffsApi.md#tariffsList) | **GET** /v2/tariffs | Информация о доступных тарифах



## tariffsList

> AllTariffsResponse tariffsList()

Информация о доступных тарифах

Чтобы получить список всех доступных тарифов отправьте GET запрос по адресу &#x60;/v2/tariffs&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.TariffsApi();
apiInstance.tariffsList((error, data, response) => {
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

[**AllTariffsResponse**](AllTariffsResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

