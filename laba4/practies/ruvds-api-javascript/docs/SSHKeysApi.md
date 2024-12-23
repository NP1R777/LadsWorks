# RuvdsApi.SSHKeysApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sshKeysCreate**](SSHKeysApi.md#sshKeysCreate) | **POST** /v2/ssh_keys | Добавление публичного SSH ключа.
[**sshKeysDelete**](SSHKeysApi.md#sshKeysDelete) | **DELETE** /v2/ssh_keys/{ssh_key_id} | Удаление SSH ключа.
[**sshKeysGet**](SSHKeysApi.md#sshKeysGet) | **GET** /v2/ssh_keys/{ssh_key_id} | Получение SSH ключа по ID.
[**sshKeysList**](SSHKeysApi.md#sshKeysList) | **GET** /v2/ssh_keys | Список SSH ключей загруженных в личный кабинет пользователя.



## sshKeysCreate

> SshKey sshKeysCreate(opts)

Добавление публичного SSH ключа.

Для добавления публичного SSH ключа отправьте POST пост запрос по адресу &#x60;/v2/ssh_keys&#x60;. В теле запроса передаются необходимые параметры. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.SSHKeysApi();
let opts = {
  'sshKeyCreate': new RuvdsApi.SshKeyCreate() // SshKeyCreate | 
};
apiInstance.sshKeysCreate(opts, (error, data, response) => {
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
 **sshKeyCreate** | [**SshKeyCreate**](SshKeyCreate.md)|  | [optional] 

### Return type

[**SshKey**](SshKey.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sshKeysDelete

> sshKeysDelete(sshKeyId)

Удаление SSH ключа.

Для удаления SSH ключа отправьте DELETE запрос по адресу &#x60;/v2/ssh_keys/$SSH_KEY_ID&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.SSHKeysApi();
let sshKeyId = "sshKeyId_example"; // String | Уникальный ID SSH ключа.
apiInstance.sshKeysDelete(sshKeyId, (error, data, response) => {
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
 **sshKeyId** | **String**| Уникальный ID SSH ключа. | 

### Return type

null (empty response body)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sshKeysGet

> SshKey sshKeysGet(sshKeyId)

Получение SSH ключа по ID.

Для получения SSH ключа по ID отправьте GET запрос по адресу &#x60;/v2/ssh_keys/$SSH_KEY_ID&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.SSHKeysApi();
let sshKeyId = "sshKeyId_example"; // String | Уникальный ID SSH ключа.
apiInstance.sshKeysGet(sshKeyId, (error, data, response) => {
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
 **sshKeyId** | **String**| Уникальный ID SSH ключа. | 

### Return type

[**SshKey**](SshKey.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sshKeysList

> AllSshKeys sshKeysList()

Список SSH ключей загруженных в личный кабинет пользователя.

Для получения списка SSH ключей отправьте GET запрос по адресу &#x60;/v2/ssh_keys&#x60;. 

### Example

```javascript
import RuvdsApi from 'ruvds_api';
let defaultClient = RuvdsApi.ApiClient.instance;
// Configure Bearer access token for authorization: bearer_auth
let bearer_auth = defaultClient.authentications['bearer_auth'];
bearer_auth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new RuvdsApi.SSHKeysApi();
apiInstance.sshKeysList((error, data, response) => {
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

[**AllSshKeys**](AllSshKeys.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

