# PSOpenAPITools.PSOpenAPITools\Api.ActionsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-ActionsGet**](ActionsApi.md#Invoke-ActionsGet) | **GET** /v2/actions/{action_id} | Получение информации по действию.
[**Invoke-ActionsList**](ActionsApi.md#Invoke-ActionsList) | **GET** /v2/actions | Информация о действиях пользователя, созданных через API.


<a id="Invoke-ActionsGet"></a>
# **Invoke-ActionsGet**
> ApiAction Invoke-ActionsGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ActionId] <Int32><br>

Получение информации по действию.

Для получения конкретного действия отправьте GET запрос по адресу `/v2/actions/$ACTION_ID`.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$ActionId = 2024 # Int32 | Уникальный ID действия.

# Получение информации по действию.
try {
    $Result = Invoke-ActionsGet -ActionId $ActionId
} catch {
    Write-Host ("Exception occurred when calling Invoke-ActionsGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ActionId** | **Int32**| Уникальный ID действия. | 

### Return type

[**ApiAction**](ApiAction.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ActionsList"></a>
# **Invoke-ActionsList**
> AllActionsResponse Invoke-ActionsList<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-PerPage] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Page] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Информация о действиях пользователя, созданных через API.

Чтобы получить список всех действий пользователя отправьте GET запрос по адресу `/v2/actions`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$PerPage = 2 # Int32 | Количество элементов на одной странице (optional) (default to 25)
$Page = 1 # Int32 | Номер страницы в результате (optional) (default to 1)
$Sort = "id" # String | * `id` - Сортировка по полю `id`.  (optional) (default to "id")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Информация о действиях пользователя, созданных через API.
try {
    $Result = Invoke-ActionsList -PerPage $PerPage -Page $Page -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-ActionsList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **PerPage** | **Int32**| Количество элементов на одной странице | [optional] [default to 25]
 **Page** | **Int32**| Номер страницы в результате | [optional] [default to 1]
 **Sort** | **String**| * &#x60;id&#x60; - Сортировка по полю &#x60;id&#x60;.  | [optional] [default to &quot;id&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**AllActionsResponse**](AllActionsResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

