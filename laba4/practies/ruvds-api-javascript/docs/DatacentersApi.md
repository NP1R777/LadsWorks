# RuvdsApi.DatacentersApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**datacentersList**](DatacentersApi.md#datacentersList) | **GET** /v2/datacenters | Информация о доступных дата-центрах



## datacentersList

> AllDatacentersResponse datacentersList()

Информация о доступных дата-центрах

Чтобы получить список всех доступных дата-центров отправьте GET запрос по адресу &#x60;/v2/datacenters&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.DatacentersApi();
apiInstance.datacentersList((error, data, response) => {
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

[**AllDatacentersResponse**](AllDatacentersResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

