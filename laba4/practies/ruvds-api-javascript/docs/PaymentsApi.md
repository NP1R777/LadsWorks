# RuvdsApi.PaymentsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentsList**](PaymentsApi.md#paymentsList) | **GET** /v2/payments | Список всех платежей



## paymentsList

> AllPaymentsResponse paymentsList(opts)

Список всех платежей

Чтобы получить список всех платежей отправьте GET запрос по адресу &#x60;/v2/payments&#x60;.  В ответе будет JSON объект с ключом &#x60;payments&#x60;. Он будет содержать массив платежей. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.PaymentsApi();
let opts = {
  'type': "default", // String | Тип запрашиваемого баланса. * `default` - Денежный баланс. * `bonus` - Количество бонусных баллов. * `partner` - Партнерские начисления.
  'perPage': 2, // Number | Количество элементов на одной странице
  'page': 1, // Number | Номер страницы в результате
  'sort': "dt", // String | * `dt` - Сортировка по полю `dt`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.paymentsList(opts, (error, data, response) => {
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
 **perPage** | **Number**| Количество элементов на одной странице | [optional] [default to 25]
 **page** | **Number**| Номер страницы в результате | [optional] [default to 1]
 **sort** | **String**| * &#x60;dt&#x60; - Сортировка по полю &#x60;dt&#x60;.  | [optional] [default to &#39;dt&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**AllPaymentsResponse**](AllPaymentsResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

