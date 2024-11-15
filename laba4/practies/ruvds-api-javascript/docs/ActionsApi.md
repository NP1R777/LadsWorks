# RuvdsApi.ActionsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionsGet**](ActionsApi.md#actionsGet) | **GET** /v2/actions/{action_id} | Получение информации по действию.
[**actionsList**](ActionsApi.md#actionsList) | **GET** /v2/actions | Информация о действиях пользователя, созданных через API.



## actionsGet

> ApiAction actionsGet(actionId)

Получение информации по действию.

Для получения конкретного действия отправьте GET запрос по адресу &#x60;/v2/actions/$ACTION_ID&#x60;.

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ActionsApi();
let actionId = 2024; // Number | Уникальный ID действия.
apiInstance.actionsGet(actionId, (error, data, response) => {
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
 **actionId** | **Number**| Уникальный ID действия. | 

### Return type

[**ApiAction**](ApiAction.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## actionsList

> AllActionsResponse actionsList(opts)

Информация о действиях пользователя, созданных через API.

Чтобы получить список всех действий пользователя отправьте GET запрос по адресу &#x60;/v2/actions&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ActionsApi();
let opts = {
  'perPage': 2, // Number | Количество элементов на одной странице
  'page': 1, // Number | Номер страницы в результате
  'sort': "id", // String | * `id` - Сортировка по полю `id`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.actionsList(opts, (error, data, response) => {
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
 **perPage** | **Number**| Количество элементов на одной странице | [optional] [default to 25]
 **page** | **Number**| Номер страницы в результате | [optional] [default to 1]
 **sort** | **String**| * &#x60;id&#x60; - Сортировка по полю &#x60;id&#x60;.  | [optional] [default to &#39;id&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**AllActionsResponse**](AllActionsResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

