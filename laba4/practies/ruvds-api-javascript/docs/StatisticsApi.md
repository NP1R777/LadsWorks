# RuvdsApi.StatisticsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cpuDailyStat**](StatisticsApi.md#cpuDailyStat) | **GET** /v2/stat/cpu/daily/{virtual_server_id} | Ежедневная статистика CPU за последние 14 дней.
[**cpuHourlyStat**](StatisticsApi.md#cpuHourlyStat) | **GET** /v2/stat/cpu/hourly/{virtual_server_id} | Почасовая статистика по использованию CPU за последние 24 часа.
[**driveDailyStat**](StatisticsApi.md#driveDailyStat) | **GET** /v2/stat/drive/daily/{virtual_server_id} | Ежедневная статистика по основному диску за последние 14 дней.
[**driveHourlyStat**](StatisticsApi.md#driveHourlyStat) | **GET** /v2/stat/drive/hourly/{virtual_server_id} | Почасовая статистика по основному диску за последние 24 часа.
[**networkDailyStat**](StatisticsApi.md#networkDailyStat) | **GET** /v2/stat/network/daily/{virtual_server_id} | Ежедневная статистика по использованию сети за последние 14 дней.
[**networkHourlyStat**](StatisticsApi.md#networkHourlyStat) | **GET** /v2/stat/network/hourly/{virtual_server_id} | Почасовая статистика по использованию сети за последние 24 часа.



## cpuDailyStat

> CpuDailyStatResponse cpuDailyStat(virtualServerId, opts)

Ежедневная статистика CPU за последние 14 дней.

Для получения ежедневной статистики по использованию CPU отправьте GET запрос по адресу &#x60;/v2/stat/cpu/daily/$VIRTUAL_SERVER_ID&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.StatisticsApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let opts = {
  'sort': "add_dt", // String | * `add_dt` - Сортировка по полю `add_dt`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.cpuDailyStat(virtualServerId, opts, (error, data, response) => {
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
 **sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &#39;add_dt&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**CpuDailyStatResponse**](CpuDailyStatResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cpuHourlyStat

> CpuHourlyStatResponse cpuHourlyStat(virtualServerId, opts)

Почасовая статистика по использованию CPU за последние 24 часа.

Для получения почасовой статистики по использованию CPU отправьте GET запрос по адресу &#x60;/v2/stat/cpu/hourly/$VIRTUAL_SERVER_ID&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.StatisticsApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let opts = {
  'sort': "add_dt", // String | * `add_dt` - Сортировка по полю `add_dt`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.cpuHourlyStat(virtualServerId, opts, (error, data, response) => {
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
 **sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &#39;add_dt&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**CpuHourlyStatResponse**](CpuHourlyStatResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## driveDailyStat

> DriveDailyStatResponse driveDailyStat(virtualServerId, opts)

Ежедневная статистика по основному диску за последние 14 дней.

Для получения ежедневной статистики по основному диску отправьте GET запрос по адресу &#x60;/v2/stat/drive/daily/$VIRTUAL_SERVER_ID&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.StatisticsApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let opts = {
  'sort': "add_dt", // String | * `add_dt` - Сортировка по полю `add_dt`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.driveDailyStat(virtualServerId, opts, (error, data, response) => {
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
 **sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &#39;add_dt&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**DriveDailyStatResponse**](DriveDailyStatResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## driveHourlyStat

> DriveHourlyStatResponse driveHourlyStat(virtualServerId, opts)

Почасовая статистика по основному диску за последние 24 часа.

Для получения почасовой статистики по основному диску отправьте GET запрос по адресу &#x60;/v2/stat/drive/hourly/$VIRTUAL_SERVER_ID&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.StatisticsApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let opts = {
  'sort': "add_dt", // String | * `add_dt` - Сортировка по полю `add_dt`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.driveHourlyStat(virtualServerId, opts, (error, data, response) => {
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
 **sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &#39;add_dt&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**DriveHourlyStatResponse**](DriveHourlyStatResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## networkDailyStat

> NetworkDailyStatResponse networkDailyStat(virtualServerId, opts)

Ежедневная статистика по использованию сети за последние 14 дней.

Для получения ежедневной статистики по использованию сети отправьте GET запрос по адресу &#x60;/v2/stat/network/daily/$VIRTUAL_SERVER_ID&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.StatisticsApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let opts = {
  'sort': "add_dt", // String | * `add_dt` - Сортировка по полю `add_dt`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.networkDailyStat(virtualServerId, opts, (error, data, response) => {
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
 **sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &#39;add_dt&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**NetworkDailyStatResponse**](NetworkDailyStatResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## networkHourlyStat

> NetworkHourlyStatResponse networkHourlyStat(virtualServerId, opts)

Почасовая статистика по использованию сети за последние 24 часа.

Для получения почасовой статистики по использованию сети отправьте GET запрос по адресу &#x60;/v2/stat/network/hourly/$VIRTUAL_SERVER_ID&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.StatisticsApi();
let virtualServerId = 1023; // Number | Уникальный ID виртуального сервера.
let opts = {
  'sort': "add_dt", // String | * `add_dt` - Сортировка по полю `add_dt`. 
  'order': "asc" // String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию. 
};
apiInstance.networkHourlyStat(virtualServerId, opts, (error, data, response) => {
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
 **sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &#39;add_dt&#39;]
 **order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &#39;asc&#39;]

### Return type

[**NetworkHourlyStatResponse**](NetworkHourlyStatResponse.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

