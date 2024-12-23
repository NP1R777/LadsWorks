# PSOpenAPITools.PSOpenAPITools\Api.NotificationsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-NotificationsGet**](NotificationsApi.md#Invoke-NotificationsGet) | **GET** /v2/notifications/{notification_id} | Получение информации об оповещении.
[**Invoke-NotificationsList**](NotificationsApi.md#Invoke-NotificationsList) | **GET** /v2/notifications | Список всех оповещений
[**Invoke-NotificationsPut**](NotificationsApi.md#Invoke-NotificationsPut) | **PUT** /v2/notifications/{notification_id} | Изменение статуса оповещения.


<a id="Invoke-NotificationsGet"></a>
# **Invoke-NotificationsGet**
> Notification Invoke-NotificationsGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-NotificationId] <String><br>

Получение информации об оповещении.

Для получения информации об оповещении отправьте GET запрос по адресу `/v2/notifications/$NOTIFICATION_ID`.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$NotificationId = "38400000-8cf0-11bd-b23e-10b96e4ef00d" # String | Уникальный ID оповещения.

# Получение информации об оповещении.
try {
    $Result = Invoke-NotificationsGet -NotificationId $NotificationId
} catch {
    Write-Host ("Exception occurred when calling Invoke-NotificationsGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **NotificationId** | **String**| Уникальный ID оповещения. | 

### Return type

[**Notification**](Notification.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-NotificationsList"></a>
# **Invoke-NotificationsList**
> AllNotificationsResponse Invoke-NotificationsList<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Status] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-PerPage] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Page] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Список всех оповещений

Чтобы получить список всех оповещений отправьте GET запрос по адресу `/v2/notifications`.  В ответе будет JSON объект с ключом `notifications`. Он будет содержать массив оповещений. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$Status = "all" # String | Статус оповещения. * `all` - Все оповещения. * `read` - Все прочитанные оповещения. * `unread` - Все непрочитанные оповещения. (optional) (default to "all")
$PerPage = 2 # Int32 | Количество элементов на одной странице (optional) (default to 25)
$Page = 1 # Int32 | Номер страницы в результате (optional) (default to 1)
$Sort = "add_dt" # String | * `add_dt` - Сортировка по полю `add_dt`.  (optional) (default to "add_dt")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Список всех оповещений
try {
    $Result = Invoke-NotificationsList -Status $Status -PerPage $PerPage -Page $Page -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-NotificationsList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Status** | **String**| Статус оповещения. * &#x60;all&#x60; - Все оповещения. * &#x60;read&#x60; - Все прочитанные оповещения. * &#x60;unread&#x60; - Все непрочитанные оповещения. | [optional] [default to &quot;all&quot;]
 **PerPage** | **Int32**| Количество элементов на одной странице | [optional] [default to 25]
 **Page** | **Int32**| Номер страницы в результате | [optional] [default to 1]
 **Sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &quot;add_dt&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**AllNotificationsResponse**](AllNotificationsResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-NotificationsPut"></a>
# **Invoke-NotificationsPut**
> void Invoke-NotificationsPut<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-NotificationId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-NotificationChange] <PSCustomObject><br>

Изменение статуса оповещения.

Для изменения статуса оповещения отправьте PUT запрос по адресу `/v2/notifications/$NOTIFICATION_ID`.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$NotificationId = "38400000-8cf0-11bd-b23e-10b96e4ef00d" # String | Уникальный ID оповещения.
$NotificationChange = Initialize-NotificationChange -Status "read" # NotificationChange |  (optional)

# Изменение статуса оповещения.
try {
    $Result = Invoke-NotificationsPut -NotificationId $NotificationId -NotificationChange $NotificationChange
} catch {
    Write-Host ("Exception occurred when calling Invoke-NotificationsPut: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **NotificationId** | **String**| Уникальный ID оповещения. | 
 **NotificationChange** | [**NotificationChange**](NotificationChange.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

