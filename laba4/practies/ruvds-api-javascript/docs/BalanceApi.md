# RuvdsApi.BalanceApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**balanceGet**](BalanceApi.md#balanceGet) | **GET** /v2/balance | Получение информации об актуальном балансе.



## balanceGet

> Balance balanceGet(opts)

Получение информации об актуальном балансе.

Для получения баланса отправьте GET запрос по адресу &#x60;/v2/balance&#x60;.

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.BalanceApi();
let opts = {
  'type': "default", // String | Тип запрашиваемого баланса. * `default` - Денежный баланс. * `bonus` - Количество бонусных баллов. * `partner` - Партнерские начисления.
  'currencyId': 1 // Number | В какой валюте получить значение баланса. * `1` - RUB * `3` - USD * `4` - EUR
};
apiInstance.balanceGet(opts, (error, data, response) => {
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
 **type** | **String**| Тип запрашиваемого баланса. * &#x60;default&#x60; - Денежный баланс. * &#x60;bonus&#x60; - Количество бонусных баллов. * &#x60;partner&#x60; - Партнерские начисления. | [optional] [default to &#39;default&#39;]
 **currencyId** | **Number**| В какой валюте получить значение баланса. * &#x60;1&#x60; - RUB * &#x60;3&#x60; - USD * &#x60;4&#x60; - EUR | [optional] [default to 1]

### Return type

[**Balance**](Balance.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

