# PSOpenAPITools.PSOpenAPITools\Api.TokensApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-TokensCreate**](TokensApi.md#Invoke-TokensCreate) | **POST** /v2/tokens | Создание токена
[**Invoke-TokensGet**](TokensApi.md#Invoke-TokensGet) | **GET** /v2/tokens/{token_id} | Получение информации о токене доступа к API.
[**Invoke-TokensList**](TokensApi.md#Invoke-TokensList) | **GET** /v2/tokens | Список всех токенов авторизации API V2
[**Invoke-TokensPut**](TokensApi.md#Invoke-TokensPut) | **PUT** /v2/tokens/{token_id} | Пересоздание токена доступа к API.


<a id="Invoke-TokensCreate"></a>
# **Invoke-TokensCreate**
> TokenData Invoke-TokensCreate<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TokenCreate] <PSCustomObject><br>

Создание токена

Для создания токена отправьте POST пост запрос по адресу `/v2/tokens` установив необходимые параметры. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: basic_auth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"


$TokenCreate = Initialize-TokenCreate -TokenName "my-api-token" -TokenRole "read" -TokenExpiry (Get-Date) # TokenCreate |  (optional)

# Создание токена
try {
    $Result = Invoke-TokensCreate -TokenCreate $TokenCreate
} catch {
    Write-Host ("Exception occurred when calling Invoke-TokensCreate: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TokenCreate** | [**TokenCreate**](TokenCreate.md)|  | [optional] 

### Return type

[**TokenData**](TokenData.md) (PSCustomObject)

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-TokensGet"></a>
# **Invoke-TokensGet**
> Token Invoke-TokensGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TokenId] <String><br>

Получение информации о токене доступа к API.

Для получения информации о токене доступа отправьте GET запрос по адресу `/v2/tokens/$TOKEN_ID`.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: basic_auth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"


$TokenId = "38400000-8cf0-11bd-b23e-10b96e4ef00d" # String | Уникальный ID токена.

# Получение информации о токене доступа к API.
try {
    $Result = Invoke-TokensGet -TokenId $TokenId
} catch {
    Write-Host ("Exception occurred when calling Invoke-TokensGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TokenId** | **String**| Уникальный ID токена. | 

### Return type

[**Token**](Token.md) (PSCustomObject)

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-TokensList"></a>
# **Invoke-TokensList**
> AllTokensResponse Invoke-TokensList<br>

Список всех токенов авторизации API V2

Чтобы получить список всех окенов авторизации API V2 отправьте GET запрос по адресу `/v2/tokens`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: basic_auth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"



# Список всех токенов авторизации API V2
try {
    $Result = Invoke-TokensList
} catch {
    Write-Host ("Exception occurred when calling Invoke-TokensList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AllTokensResponse**](AllTokensResponse.md) (PSCustomObject)

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-TokensPut"></a>
# **Invoke-TokensPut**
> TokenData Invoke-TokensPut<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-TokenId] <String><br>

Пересоздание токена доступа к API.

Для пересоздания токена доступа отправьте PUT запрос по адресу `/v2/tokens/$TOKEN_ID`. Старое значение токена станет невалидным. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: basic_auth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"


$TokenId = "38400000-8cf0-11bd-b23e-10b96e4ef00d" # String | Уникальный ID токена.

# Пересоздание токена доступа к API.
try {
    $Result = Invoke-TokensPut -TokenId $TokenId
} catch {
    Write-Host ("Exception occurred when calling Invoke-TokensPut: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **TokenId** | **String**| Уникальный ID токена. | 

### Return type

[**TokenData**](TokenData.md) (PSCustomObject)

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

