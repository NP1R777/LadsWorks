# RuvdsApi.ServersApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serversActionCreate**](ServersApi.md#serversActionCreate) | **PUT** /v2/servers/{virtual_server_id}/actions | Отправка команды виртуальному серверу
[**serversChange**](ServersApi.md#serversChange) | **PUT** /v2/servers | Изменение виртуального сервера
[**serversCostGet**](ServersApi.md#serversCostGet) | **GET** /v2/servers/{virtual_server_id}/cost | Получение информации о стоимости виртуального сервера.
[**serversCreate**](ServersApi.md#serversCreate) | **POST** /v2/servers | Создание виртуального сервера
[**serversDelete**](ServersApi.md#serversDelete) | **DELETE** /v2/servers/{virtual_server_id} | Удаление виртуального сервера
[**serversGet**](ServersApi.md#serversGet) | **GET** /v2/servers/{virtual_server_id} | Получение информации о виртуальном сервере.
[**serversList**](ServersApi.md#serversList) | **GET** /v2/servers | Список всех виртуальных серверов
[**serversNetworkGet**](ServersApi.md#serversNetworkGet) | **GET** /v2/servers/{virtual_server_id}/networks | Получение информации об IP адресах виртуального сервера.
[**serversPaidTillGet**](ServersApi.md#serversPaidTillGet) | **GET** /v2/servers/{virtual_server_id}/paid_till | Получение даты и времени до которого оплачен сервера.
[**serversPowerStateGet**](ServersApi.md#serversPowerStateGet) | **GET** /v2/servers/{virtual_server_id}/power_state | Получение состояния питания виртуального сервера.
[**serversScreenshot**](ServersApi.md#serversScreenshot) | **GET** /v2/servers/{virtual_server_id}/screenshot | Получение снимка экрана виртуального сервера.
[**serversStartPassword**](ServersApi.md#serversStartPassword) | **POST** /v2/servers/{virtual_server_id}/start_password | Получение пароля для доступа к виртуальному серверу.
[**serversStartPasswordGet**](ServersApi.md#serversStartPasswordGet) | **GET** /v2/servers/{virtual_server_id}/start_password | Получение пароля для доступа к виртуальному серверу.



## serversActionCreate

> ApiAction serversActionCreate(virtualServerId, serverActionCreate)

Отправка команды виртуальному серверу

Для отправки команды виртуальному серверу отправьте PUT пост запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID/actions&#x60; установив необходимые параметры.  Возвращаемый код 200 Accepted говорит об успешной постановки задачи в очередь. Результат выполения можно получить из статуса соответствующего действия. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let serverActionCreate = new RuvdsApi.ServerActionCreate(); // ServerActionCreate | 
apiInstance.serversActionCreate(virtualServerId, serverActionCreate, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 
 **serverActionCreate** | [**ServerActionCreate**](ServerActionCreate.md)|  | 

### Return type

[**ApiAction**](ApiAction.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## serversChange

> ServerChangeResponse serversChange(serverChange, opts)

Изменение виртуального сервера

Для изменения виртуального сервера отправьте PUT запрос по адресу &#x60;/v2/servers&#x60; установив необходимые параметры.  Необходимые параметры передаются в теле JSON. Нужно передать хотя бы один из необязательных параметров. Возвращаемый код 200 Accepted говорит об успешной постановки задачи в очередь. Это не гарантирует успешное изменение сервера. В ответ приходит JSON объект &#x60;action&#x60;. Информация о получении статуса действия в разделе &#x60;Actions&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let serverChange = new RuvdsApi.ServerChange(); // ServerChange | 
let opts = {
  'getPriceOnly': true // Boolean | Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера.
};
apiInstance.serversChange(serverChange, opts, (error, data, response) => {
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
 **serverChange** | [**ServerChange**](ServerChange.md)|  | 
 **getPriceOnly** | **Boolean**| Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера. | [optional] [default to false]

### Return type

[**ServerChangeResponse**](ServerChangeResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## serversCostGet

> ServerCost serversCostGet(virtualServerId)

Получение информации о стоимости виртуального сервера.

Для получения информации о стоимости виртуального сервера отправьте GET запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID/cost&#x60;.

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
apiInstance.serversCostGet(virtualServerId, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 

### Return type

[**ServerCost**](ServerCost.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serversCreate

> ServerCreateResponse serversCreate(serverCreate, opts)

Создание виртуального сервера

Для создания нового сервера отправьте POST пост запрос по адресу &#x60;/v2/servers&#x60; установив необходимые параметры.  Необходимые параметры передаются в теле JSON. Возвращаемый код 200 Accepted говорит об успешной постановки задачи в очередь. Это не гарантирует успешное создание сервера. Прогресс создания можно получить из статуса соответствующего действия. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let serverCreate = new RuvdsApi.ServerCreate(); // ServerCreate | 
let opts = {
  'getPriceOnly': true // Boolean | Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера.
};
apiInstance.serversCreate(serverCreate, opts, (error, data, response) => {
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
 **serverCreate** | [**ServerCreate**](ServerCreate.md)|  | 
 **getPriceOnly** | **Boolean**| Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера. | [optional] [default to false]

### Return type

[**ServerCreateResponse**](ServerCreateResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## serversDelete

> ApiAction serversDelete(virtualServerId)

Удаление виртуального сервера

Для удаления виртуального сервера отправьте DELETE запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
apiInstance.serversDelete(virtualServerId, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 

### Return type

[**ApiAction**](ApiAction.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serversGet

> Server serversGet(virtualServerId)

Получение информации о виртуальном сервере.

Для получения информации о виртуальном сервере отправьте GET запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID&#x60;.

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
apiInstance.serversGet(virtualServerId, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 

### Return type

[**Server**](Server.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serversList

> AllServersResponse serversList(opts)

Список всех виртуальных серверов

Чтобы получить список всех виртуальных серверов в аккаунте отправьте GET запрос по адресу &#x60;/v2/servers&#x60;.  В ответе будет JSON объект с ключом &#x60;servers&#x60;. Он будет содержать массив статусов виртуальных серверов. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let opts = {
  'perPage': 2, // Number | Количество элементов на одной странице
  'page': 1, // Number | Номер страницы в результате
  'sort': "virtual_server_id", // String | * `virtual_server_id` - Сортировка по полю `virtual_server_id`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.serversList(opts, (error, data, response) => {
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
 **sort** | **String**| * &#x60;virtual_server_id&#x60; - Сортировка по полю &#x60;virtual_server_id&#x60;.  | [optional] [default to &#39;virtual_server_id&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**AllServersResponse**](AllServersResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serversNetworkGet

> ServerNetworksResponse serversNetworkGet(virtualServerId)

Получение информации об IP адресах виртуального сервера.

Для получения информации об IP адресах виртуального сервера отправьте GET запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID/networks&#x60;.

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
apiInstance.serversNetworkGet(virtualServerId, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 

### Return type

[**ServerNetworksResponse**](ServerNetworksResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serversPaidTillGet

> ServerPaidTill serversPaidTillGet(virtualServerId)

Получение даты и времени до которого оплачен сервера.

Для получения даты и времени, до которого оплачен виртуальныq сервер, отправьте GET запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID/paid_till&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
apiInstance.serversPaidTillGet(virtualServerId, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 

### Return type

[**ServerPaidTill**](ServerPaidTill.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serversPowerStateGet

> ServerPowerState serversPowerStateGet(virtualServerId)

Получение состояния питания виртуального сервера.

Для получения состояния питания виртуального сервера отправьте GET запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID/power_state&#x60;.  Данный вызов непосредственно опрашивает физическую машину о состоянии виртуального сервера и является блокирующим. Таймаут вызова 10 сек. Если в данный момент статус сервера получить не удаётся, то возвращается ошибка с кодом &#x60;500&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
apiInstance.serversPowerStateGet(virtualServerId, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 

### Return type

[**ServerPowerState**](ServerPowerState.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serversScreenshot

> File serversScreenshot(virtualServerId, screenSize)

Получение снимка экрана виртуального сервера.

Для получения снимка экрана виртуального сервера отправьте GET запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID/screenshot&#x60;.

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

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let screenSize = "640x480"; // String | 
apiInstance.serversScreenshot(virtualServerId, screenSize, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 
 **screenSize** | **String**|  | [default to &#39;300x225&#39;]

### Return type

**File**

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/jpeg, application/json


## serversStartPassword

> StartPasswordResponse serversStartPassword(virtualServerId, startPassword)

Получение пароля для доступа к виртуальному серверу.

Для получение пароля для доступа к виртуальному серверу отправьте POST пост запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID/start_password&#x60;. В теле запроса передается пароль от личного кабинета ruvds.com  Обратите внимание, что в целях безопасности пароль доступа к серверу рекомендуется сменить при первом заходе на сервер. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let startPassword = new RuvdsApi.StartPassword(); // StartPassword | 
apiInstance.serversStartPassword(virtualServerId, startPassword, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 
 **startPassword** | [**StartPassword**](StartPassword.md)|  | 

### Return type

[**StartPasswordResponse**](StartPasswordResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## serversStartPasswordGet

> StartPasswordResponse serversStartPasswordGet(virtualServerId, opts)

Получение пароля для доступа к виртуальному серверу.

Для получение пароля для доступа к виртуальному серверу отправьте GET запрос по адресу &#x60;/v2/servers/$VIRTUAL_SERVER_ID/start_password&#x60;. Для вызова данного метода необходим токен с правами &#x60;remove&#x60;.   Обратите внимание, что в целях безопасности пароль доступа к серверу **рекомендуется сменить** при первом заходе на сервер. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.ServersApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let opts = {
  'responseFormat': "'base64'" // String | В каком формате будут в ответе представлены байты строки с паролем. По-умолчанию, *base64*. Перевод в байты необходим по той причине, что пароль может содержать специальные симоволы.
};
apiInstance.serversStartPasswordGet(virtualServerId, opts, (error, data, response) => {
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
 **virtualServerId** | **Number**| Уникальный ID виртуального сервера. | 
 **responseFormat** | **String**| В каком формате будут в ответе представлены байты строки с паролем. По-умолчанию, *base64*. Перевод в байты необходим по той причине, что пароль может содержать специальные симоволы. | [optional] [default to &#39;base64&#39;]

### Return type

[**StartPasswordResponse**](StartPasswordResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

