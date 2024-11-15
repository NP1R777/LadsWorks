# PSOpenAPITools.PSOpenAPITools\Api.StatisticsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-CpuDailyStat**](StatisticsApi.md#Invoke-CpuDailyStat) | **GET** /v2/stat/cpu/daily/{virtual_server_id} | Ежедневная статистика CPU за последние 14 дней.
[**Invoke-CpuHourlyStat**](StatisticsApi.md#Invoke-CpuHourlyStat) | **GET** /v2/stat/cpu/hourly/{virtual_server_id} | Почасовая статистика по использованию CPU за последние 24 часа.
[**Invoke-DriveDailyStat**](StatisticsApi.md#Invoke-DriveDailyStat) | **GET** /v2/stat/drive/daily/{virtual_server_id} | Ежедневная статистика по основному диску за последние 14 дней.
[**Invoke-DriveHourlyStat**](StatisticsApi.md#Invoke-DriveHourlyStat) | **GET** /v2/stat/drive/hourly/{virtual_server_id} | Почасовая статистика по основному диску за последние 24 часа.
[**Invoke-NetworkDailyStat**](StatisticsApi.md#Invoke-NetworkDailyStat) | **GET** /v2/stat/network/daily/{virtual_server_id} | Ежедневная статистика по использованию сети за последние 14 дней.
[**Invoke-NetworkHourlyStat**](StatisticsApi.md#Invoke-NetworkHourlyStat) | **GET** /v2/stat/network/hourly/{virtual_server_id} | Почасовая статистика по использованию сети за последние 24 часа.


<a id="Invoke-CpuDailyStat"></a>
# **Invoke-CpuDailyStat**
> CpuDailyStatResponse Invoke-CpuDailyStat<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Ежедневная статистика CPU за последние 14 дней.

Для получения ежедневной статистики по использованию CPU отправьте GET запрос по адресу `/v2/stat/cpu/daily/$VIRTUAL_SERVER_ID`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$Sort = "add_dt" # String | * `add_dt` - Сортировка по полю `add_dt`.  (optional) (default to "add_dt")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Ежедневная статистика CPU за последние 14 дней.
try {
    $Result = Invoke-CpuDailyStat -VirtualServerId $VirtualServerId -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-CpuDailyStat: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **Sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &quot;add_dt&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**CpuDailyStatResponse**](CpuDailyStatResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-CpuHourlyStat"></a>
# **Invoke-CpuHourlyStat**
> CpuHourlyStatResponse Invoke-CpuHourlyStat<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Почасовая статистика по использованию CPU за последние 24 часа.

Для получения почасовой статистики по использованию CPU отправьте GET запрос по адресу `/v2/stat/cpu/hourly/$VIRTUAL_SERVER_ID`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$Sort = "add_dt" # String | * `add_dt` - Сортировка по полю `add_dt`.  (optional) (default to "add_dt")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Почасовая статистика по использованию CPU за последние 24 часа.
try {
    $Result = Invoke-CpuHourlyStat -VirtualServerId $VirtualServerId -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-CpuHourlyStat: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **Sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &quot;add_dt&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**CpuHourlyStatResponse**](CpuHourlyStatResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-DriveDailyStat"></a>
# **Invoke-DriveDailyStat**
> DriveDailyStatResponse Invoke-DriveDailyStat<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Ежедневная статистика по основному диску за последние 14 дней.

Для получения ежедневной статистики по основному диску отправьте GET запрос по адресу `/v2/stat/drive/daily/$VIRTUAL_SERVER_ID`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$Sort = "add_dt" # String | * `add_dt` - Сортировка по полю `add_dt`.  (optional) (default to "add_dt")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Ежедневная статистика по основному диску за последние 14 дней.
try {
    $Result = Invoke-DriveDailyStat -VirtualServerId $VirtualServerId -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-DriveDailyStat: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **Sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &quot;add_dt&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**DriveDailyStatResponse**](DriveDailyStatResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-DriveHourlyStat"></a>
# **Invoke-DriveHourlyStat**
> DriveHourlyStatResponse Invoke-DriveHourlyStat<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Почасовая статистика по основному диску за последние 24 часа.

Для получения почасовой статистики по основному диску отправьте GET запрос по адресу `/v2/stat/drive/hourly/$VIRTUAL_SERVER_ID`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$Sort = "add_dt" # String | * `add_dt` - Сортировка по полю `add_dt`.  (optional) (default to "add_dt")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Почасовая статистика по основному диску за последние 24 часа.
try {
    $Result = Invoke-DriveHourlyStat -VirtualServerId $VirtualServerId -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-DriveHourlyStat: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **Sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &quot;add_dt&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**DriveHourlyStatResponse**](DriveHourlyStatResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-NetworkDailyStat"></a>
# **Invoke-NetworkDailyStat**
> NetworkDailyStatResponse Invoke-NetworkDailyStat<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Ежедневная статистика по использованию сети за последние 14 дней.

Для получения ежедневной статистики по использованию сети отправьте GET запрос по адресу `/v2/stat/network/daily/$VIRTUAL_SERVER_ID`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$Sort = "add_dt" # String | * `add_dt` - Сортировка по полю `add_dt`.  (optional) (default to "add_dt")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Ежедневная статистика по использованию сети за последние 14 дней.
try {
    $Result = Invoke-NetworkDailyStat -VirtualServerId $VirtualServerId -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-NetworkDailyStat: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **Sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &quot;add_dt&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**NetworkDailyStatResponse**](NetworkDailyStatResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-NetworkHourlyStat"></a>
# **Invoke-NetworkHourlyStat**
> NetworkHourlyStatResponse Invoke-NetworkHourlyStat<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Почасовая статистика по использованию сети за последние 24 часа.

Для получения почасовой статистики по использованию сети отправьте GET запрос по адресу `/v2/stat/network/hourly/$VIRTUAL_SERVER_ID`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$Sort = "add_dt" # String | * `add_dt` - Сортировка по полю `add_dt`.  (optional) (default to "add_dt")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Почасовая статистика по использованию сети за последние 24 часа.
try {
    $Result = Invoke-NetworkHourlyStat -VirtualServerId $VirtualServerId -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-NetworkHourlyStat: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **Sort** | **String**| * &#x60;add_dt&#x60; - Сортировка по полю &#x60;add_dt&#x60;.  | [optional] [default to &quot;add_dt&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**NetworkHourlyStatResponse**](NetworkHourlyStatResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

