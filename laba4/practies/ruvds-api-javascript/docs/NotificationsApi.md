# RuvdsApi.NotificationsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notificationsGet**](NotificationsApi.md#notificationsGet) | **GET** /v2/notifications/{notification_id} | Получение информации об оповещении.
[**notificationsList**](NotificationsApi.md#notificationsList) | **GET** /v2/notifications | Список всех оповещений
[**notificationsPut**](NotificationsApi.md#notificationsPut) | **PUT** /v2/notifications/{notification_id} | Изменение статуса оповещения.



## notificationsGet

> Notification notificationsGet(notificationId)

Получение информации об оповещении.

Для получения информации об оповещении отправьте GET запрос по адресу &#x60;/v2/notifications/$NOTIFICATION_ID&#x60;.

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.NotificationsApi();
let notificationId = "notificationId_example"; // String | Уникальный ID оповещения.
apiInstance.notificationsGet(notificationId, (error, data, response) => {
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
 **notificationId** | **String**| Уникальный ID оповещения. | 

### Return type

[**Notification**](Notification.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## notificationsList

> AllNotificationsResponse notificationsList(opts)

Список всех оповещений

Чтобы получить список всех оповещений отправьте GET запрос по адресу &#x60;/v2/notifications&#x60;.  В ответе будет JSON объект с ключом &#x60;notifications&#x60;. Он будет содержать массив оповещений. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.NotificationsApi();
let opts = {
  'status': "all", // String | Статус оповещения. * `all` - Все оповещения. * `read` - Все прочитанные оповещения. * `unread` - Все непрочитанные оповещения.
  'perPage': 2, // Number | Количество элементов на одной странице
  'page': 1, // Number | Номер страницы в результате
  'sort': "add_dt", // String | * `add_dt` - Сортировка по полю `add_dt`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.notificationsList(opts, (error, data, response) => {
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
 **status** | **String**| Статус оповещения. * &#x60;all&#x60; - Все оповещения. * &#x60;read&#x60; - Все прочитанные оповещения. * &#x60;unread&#x60; - Все непрочитанные оповещения. | [optional] [default to &#39;all&#39;]
 **perPage** | **Number**| Количество элементов на одной странице | [optional] [default to 25]
 **page** | **Number**| Номер страницы в результате | [optional] [default to 1]
 **sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &#39;add_dt&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**AllNotificationsResponse**](AllNotificationsResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## notificationsPut

> notificationsPut(notificationId, opts)

Изменение статуса оповещения.

Для изменения статуса оповещения отправьте PUT запрос по адресу &#x60;/v2/notifications/$NOTIFICATION_ID&#x60;.

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.NotificationsApi();
let notificationId = "notificationId_example"; // String | Уникальный ID оповещения.
let opts = {
  'notificationChange': new RuvdsApi.NotificationChange() // NotificationChange | 
};
apiInstance.notificationsPut(notificationId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationId** | **String**| Уникальный ID оповещения. | 
 **notificationChange** | [**NotificationChange**](NotificationChange.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

