# PSOpenAPITools.PSOpenAPITools\Api.SSHKeysApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-SshKeysCreate**](SSHKeysApi.md#Invoke-SshKeysCreate) | **POST** /v2/ssh_keys | Добавление публичного SSH ключа.
[**Invoke-SshKeysDelete**](SSHKeysApi.md#Invoke-SshKeysDelete) | **DELETE** /v2/ssh_keys/{ssh_key_id} | Удаление SSH ключа.
[**Invoke-SshKeysGet**](SSHKeysApi.md#Invoke-SshKeysGet) | **GET** /v2/ssh_keys/{ssh_key_id} | Получение SSH ключа по ID.
[**Invoke-SshKeysList**](SSHKeysApi.md#Invoke-SshKeysList) | **GET** /v2/ssh_keys | Список SSH ключей загруженных в личный кабинет пользователя.


<a id="Invoke-SshKeysCreate"></a>
# **Invoke-SshKeysCreate**
> SshKey Invoke-SshKeysCreate<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-SshKeyCreate] <PSCustomObject><br>

Добавление публичного SSH ключа.

Для добавления публичного SSH ключа отправьте POST пост запрос по адресу `/v2/ssh_keys`. В теле запроса передаются необходимые параметры. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$SshKeyCreate = Initialize-SshKeyCreate -PublicKey "ssh-rsa SIMPLEEXAMPLEEAAAABIwAAAQEAklOUpkDHrfHY1 simple@example.local" -Name "my key" # SshKeyCreate |  (optional)

# Добавление публичного SSH ключа.
try {
    $Result = Invoke-SshKeysCreate -SshKeyCreate $SshKeyCreate
} catch {
    Write-Host ("Exception occurred when calling Invoke-SshKeysCreate: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SshKeyCreate** | [**SshKeyCreate**](SshKeyCreate.md)|  | [optional] 

### Return type

[**SshKey**](SshKey.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-SshKeysDelete"></a>
# **Invoke-SshKeysDelete**
> void Invoke-SshKeysDelete<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-SshKeyId] <String><br>

Удаление SSH ключа.

Для удаления SSH ключа отправьте DELETE запрос по адресу `/v2/ssh_keys/$SSH_KEY_ID`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$SshKeyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d" # String | Уникальный ID SSH ключа.

# Удаление SSH ключа.
try {
    $Result = Invoke-SshKeysDelete -SshKeyId $SshKeyId
} catch {
    Write-Host ("Exception occurred when calling Invoke-SshKeysDelete: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SshKeyId** | **String**| Уникальный ID SSH ключа. | 

### Return type

void (empty response body)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-SshKeysGet"></a>
# **Invoke-SshKeysGet**
> SshKey Invoke-SshKeysGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-SshKeyId] <String><br>

Получение SSH ключа по ID.

Для получения SSH ключа по ID отправьте GET запрос по адресу `/v2/ssh_keys/$SSH_KEY_ID`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$SshKeyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d" # String | Уникальный ID SSH ключа.

# Получение SSH ключа по ID.
try {
    $Result = Invoke-SshKeysGet -SshKeyId $SshKeyId
} catch {
    Write-Host ("Exception occurred when calling Invoke-SshKeysGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SshKeyId** | **String**| Уникальный ID SSH ключа. | 

### Return type

[**SshKey**](SshKey.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-SshKeysList"></a>
# **Invoke-SshKeysList**
> AllSshKeys Invoke-SshKeysList<br>

Список SSH ключей загруженных в личный кабинет пользователя.

Для получения списка SSH ключей отправьте GET запрос по адресу `/v2/ssh_keys`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration


# Список SSH ключей загруженных в личный кабинет пользователя.
try {
    $Result = Invoke-SshKeysList
} catch {
    Write-Host ("Exception occurred when calling Invoke-SshKeysList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AllSshKeys**](AllSshKeys.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

