# RuvdsApi.TemplatesApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templatesList**](TemplatesApi.md#templatesList) | **GET** /v2/templates | Список всех шаблонов



## templatesList

> AllTemplatesResponse templatesList()

Список всех шаблонов

Шаблоны виртуальных серверов позволяют создавать сервера с дополнительным установленным и настроенным программным обеспечением.  Данный запрос возвращает шаблоны Маркетплейса [](), также данный список будет содержать Снапшоты виртуальных серверов, созданные в личном кабинете.  Чтобы получить список всех шаблонов отправьте GET запрос по адресу &#x60;/v2/templates&#x60;.  В ответе будет JSON объект с ключом &#x60;templates&#x60;. Он будет содержать массив шаблонов. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.TemplatesApi();
apiInstance.templatesList((error, data, response) => {
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

[**AllTemplatesResponse**](AllTemplatesResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

