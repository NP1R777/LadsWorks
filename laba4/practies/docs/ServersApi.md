# PSOpenAPITools.PSOpenAPITools\Api.ServersApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-ServersActionCreate**](ServersApi.md#Invoke-ServersActionCreate) | **PUT** /v2/servers/{virtual_server_id}/actions | Отправка команды виртуальному серверу
[**Invoke-ServersChange**](ServersApi.md#Invoke-ServersChange) | **PUT** /v2/servers | Изменение виртуального сервера
[**Invoke-ServersCostGet**](ServersApi.md#Invoke-ServersCostGet) | **GET** /v2/servers/{virtual_server_id}/cost | Получение информации о стоимости виртуального сервера.
[**Invoke-ServersCreate**](ServersApi.md#Invoke-ServersCreate) | **POST** /v2/servers | Создание виртуального сервера
[**Invoke-ServersDelete**](ServersApi.md#Invoke-ServersDelete) | **DELETE** /v2/servers/{virtual_server_id} | Удаление виртуального сервера
[**Invoke-ServersGet**](ServersApi.md#Invoke-ServersGet) | **GET** /v2/servers/{virtual_server_id} | Получение информации о виртуальном сервере.
[**Invoke-ServersList**](ServersApi.md#Invoke-ServersList) | **GET** /v2/servers | Список всех виртуальных серверов
[**Invoke-ServersNetworkGet**](ServersApi.md#Invoke-ServersNetworkGet) | **GET** /v2/servers/{virtual_server_id}/networks | Получение информации об IP адресах виртуального сервера.
[**Invoke-ServersPaidTillGet**](ServersApi.md#Invoke-ServersPaidTillGet) | **GET** /v2/servers/{virtual_server_id}/paid_till | Получение даты и времени до которого оплачен сервера.
[**Invoke-ServersPowerStateGet**](ServersApi.md#Invoke-ServersPowerStateGet) | **GET** /v2/servers/{virtual_server_id}/power_state | Получение состояния питания виртуального сервера.
[**Invoke-ServersScreenshot**](ServersApi.md#Invoke-ServersScreenshot) | **GET** /v2/servers/{virtual_server_id}/screenshot | Получение снимка экрана виртуального сервера.
[**Invoke-ServersStartPassword**](ServersApi.md#Invoke-ServersStartPassword) | **POST** /v2/servers/{virtual_server_id}/start_password | Получение пароля для доступа к виртуальному серверу.
[**Invoke-ServersStartPasswordGet**](ServersApi.md#Invoke-ServersStartPasswordGet) | **GET** /v2/servers/{virtual_server_id}/start_password | Получение пароля для доступа к виртуальному серверу.


<a id="Invoke-ServersActionCreate"></a>
# **Invoke-ServersActionCreate**
> ApiAction Invoke-ServersActionCreate<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ServerActionCreate] <PSCustomObject><br>

Отправка команды виртуальному серверу

Для отправки команды виртуальному серверу отправьте PUT пост запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/actions` установив необходимые параметры.  Возвращаемый код 200 Accepted говорит об успешной постановки задачи в очередь. Результат выполения можно получить из статуса соответствующего действия. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$ServerActionCreate = Initialize-ServerActionCreate -Type "power_on" # ServerActionCreate | 

# Отправка команды виртуальному серверу
try {
    $Result = Invoke-ServersActionCreate -VirtualServerId $VirtualServerId -ServerActionCreate $ServerActionCreate
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersActionCreate: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **ServerActionCreate** | [**ServerActionCreate**](ServerActionCreate.md)|  | 

### Return type

[**ApiAction**](ApiAction.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersChange"></a>
# **Invoke-ServersChange**
> ServerChangeResponse Invoke-ServersChange<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ServerChange] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-GetPriceOnly] <System.Nullable[Boolean]><br>

Изменение виртуального сервера

Для изменения виртуального сервера отправьте PUT запрос по адресу `/v2/servers` установив необходимые параметры.  Необходимые параметры передаются в теле JSON. Нужно передать хотя бы один из необязательных параметров. Возвращаемый код 200 Accepted говорит об успешной постановки задачи в очередь. Это не гарантирует успешное изменение сервера. В ответ приходит JSON объект `action`. Информация о получении статуса действия в разделе `Actions`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$ServerChange = Initialize-ServerChange -VirtualServerId 2343 -Cpu 2 -Ram 2 -Vram "0" -Drive 40 -Ip 2 # ServerChange | 
$GetPriceOnly = $true # Boolean | Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера. (optional) (default to $false)

# Изменение виртуального сервера
try {
    $Result = Invoke-ServersChange -ServerChange $ServerChange -GetPriceOnly $GetPriceOnly
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersChange: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerChange** | [**ServerChange**](ServerChange.md)|  | 
 **GetPriceOnly** | **Boolean**| Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера. | [optional] [default to $false]

### Return type

[**ServerChangeResponse**](ServerChangeResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersCostGet"></a>
# **Invoke-ServersCostGet**
> ServerCost Invoke-ServersCostGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>

Получение информации о стоимости виртуального сервера.

Для получения информации о стоимости виртуального сервера отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/cost`.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.

# Получение информации о стоимости виртуального сервера.
try {
    $Result = Invoke-ServersCostGet -VirtualServerId $VirtualServerId
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersCostGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 

### Return type

[**ServerCost**](ServerCost.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersCreate"></a>
# **Invoke-ServersCreate**
> ServerCreateResponse Invoke-ServersCreate<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ServerCreate] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-GetPriceOnly] <System.Nullable[Boolean]><br>

Создание виртуального сервера

Для создания нового сервера отправьте POST пост запрос по адресу `/v2/servers` установив необходимые параметры.  Необходимые параметры передаются в теле JSON. Возвращаемый код 200 Accepted говорит об успешной постановки задачи в очередь. Это не гарантирует успешное создание сервера. Прогресс создания можно получить из статуса соответствующего действия. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$ServerCreate = Initialize-ServerCreate -Datacenter 1 -TariffId 14 -OsId 52 -TemplateId "08a4ee34-0b63-4516-a2e6-b8405fa1ab2f" -PaymentPeriod "1" -Cpu 2 -Ram 2 -Vram "0" -Drive 20 -DriveTariffId 1 -AdditionalDrive 0 -AdditionalDriveTariffId 0 -Ip 1 -DdosProtection 0 -Promocode "AXF-SDF-324" -SshKeyId "153e8ffa-6b69-47b5-933f-ce632471b06c" -ComputerName "SQLSRV-01" -UserComment "Server created via API." # ServerCreate | 
$GetPriceOnly = $true # Boolean | Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера. (optional) (default to $false)

# Создание виртуального сервера
try {
    $Result = Invoke-ServersCreate -ServerCreate $ServerCreate -GetPriceOnly $GetPriceOnly
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersCreate: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServerCreate** | [**ServerCreate**](ServerCreate.md)|  | 
 **GetPriceOnly** | **Boolean**| Позволяет получить цену данной конфигурации без реального создания сервера. При рассчете цены учитываются все промокоды и скидки. При изменении сервера возвращается стоимость без реального изменения сервера. | [optional] [default to $false]

### Return type

[**ServerCreateResponse**](ServerCreateResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersDelete"></a>
# **Invoke-ServersDelete**
> ApiAction Invoke-ServersDelete<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>

Удаление виртуального сервера

Для удаления виртуального сервера отправьте DELETE запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.

# Удаление виртуального сервера
try {
    $Result = Invoke-ServersDelete -VirtualServerId $VirtualServerId
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersDelete: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 

### Return type

[**ApiAction**](ApiAction.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersGet"></a>
# **Invoke-ServersGet**
> Server Invoke-ServersGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>

Получение информации о виртуальном сервере.

Для получения информации о виртуальном сервере отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID`.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.

# Получение информации о виртуальном сервере.
try {
    $Result = Invoke-ServersGet -VirtualServerId $VirtualServerId
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 

### Return type

[**Server**](Server.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersList"></a>
# **Invoke-ServersList**
> AllServersResponse Invoke-ServersList<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-PerPage] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Page] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Список всех виртуальных серверов

Чтобы получить список всех виртуальных серверов в аккаунте отправьте GET запрос по адресу `/v2/servers`.  В ответе будет JSON объект с ключом `servers`. Он будет содержать массив статусов виртуальных серверов. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$PerPage = 2 # Int32 | Количество элементов на одной странице (optional) (default to 25)
$Page = 1 # Int32 | Номер страницы в результате (optional) (default to 1)
$Sort = "virtual_server_id" # String | * `virtual_server_id` - Сортировка по полю `virtual_server_id`.  (optional) (default to "virtual_server_id")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Список всех виртуальных серверов
try {
    $Result = Invoke-ServersList -PerPage $PerPage -Page $Page -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **PerPage** | **Int32**| Количество элементов на одной странице | [optional] [default to 25]
 **Page** | **Int32**| Номер страницы в результате | [optional] [default to 1]
 **Sort** | **String**| * &#x60;virtual_server_id&#x60; - Сортировка по полю &#x60;virtual_server_id&#x60;.  | [optional] [default to &quot;virtual_server_id&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**AllServersResponse**](AllServersResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersNetworkGet"></a>
# **Invoke-ServersNetworkGet**
> ServerNetworksResponse Invoke-ServersNetworkGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>

Получение информации об IP адресах виртуального сервера.

Для получения информации об IP адресах виртуального сервера отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/networks`.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.

# Получение информации об IP адресах виртуального сервера.
try {
    $Result = Invoke-ServersNetworkGet -VirtualServerId $VirtualServerId
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersNetworkGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 

### Return type

[**ServerNetworksResponse**](ServerNetworksResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersPaidTillGet"></a>
# **Invoke-ServersPaidTillGet**
> ServerPaidTill Invoke-ServersPaidTillGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>

Получение даты и времени до которого оплачен сервера.

Для получения даты и времени, до которого оплачен виртуальныq сервер, отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/paid_till`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.

# Получение даты и времени до которого оплачен сервера.
try {
    $Result = Invoke-ServersPaidTillGet -VirtualServerId $VirtualServerId
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersPaidTillGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 

### Return type

[**ServerPaidTill**](ServerPaidTill.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersPowerStateGet"></a>
# **Invoke-ServersPowerStateGet**
> ServerPowerState Invoke-ServersPowerStateGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>

Получение состояния питания виртуального сервера.

Для получения состояния питания виртуального сервера отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/power_state`.  Данный вызов непосредственно опрашивает физическую машину о состоянии виртуального сервера и является блокирующим. Таймаут вызова 10 сек. Если в данный момент статус сервера получить не удаётся, то возвращается ошибка с кодом `500`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.

# Получение состояния питания виртуального сервера.
try {
    $Result = Invoke-ServersPowerStateGet -VirtualServerId $VirtualServerId
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersPowerStateGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 

### Return type

[**ServerPowerState**](ServerPowerState.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersScreenshot"></a>
# **Invoke-ServersScreenshot**
> System.IO.FileInfo Invoke-ServersScreenshot<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ScreenSize] <String><br>

Получение снимка экрана виртуального сервера.

Для получения снимка экрана виртуального сервера отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/screenshot`.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: basic_auth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"


$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$ScreenSize = "64x48" # String |  (default to "300x225")

# Получение снимка экрана виртуального сервера.
try {
    $Result = Invoke-ServersScreenshot -VirtualServerId $VirtualServerId -ScreenSize $ScreenSize
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersScreenshot: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **ScreenSize** | **String**|  | [default to &quot;300x225&quot;]

### Return type

**System.IO.FileInfo**

### Authorization

[basic_auth](../README.md#basic_auth), [bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersStartPassword"></a>
# **Invoke-ServersStartPassword**
> StartPasswordResponse Invoke-ServersStartPassword<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-StartPassword] <PSCustomObject><br>

Получение пароля для доступа к виртуальному серверу.

Для получение пароля для доступа к виртуальному серверу отправьте POST пост запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/start_password`. В теле запроса передается пароль от личного кабинета ruvds.com  Обратите внимание, что в целях безопасности пароль доступа к серверу рекомендуется сменить при первом заходе на сервер. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$StartPassword = Initialize-StartPassword -AccountPassword "MTIzYWJjIUAkJV4mKigpe318Pz48XCI6O9Cw0Y8" -ResponseFormat "base64" # StartPassword | 

# Получение пароля для доступа к виртуальному серверу.
try {
    $Result = Invoke-ServersStartPassword -VirtualServerId $VirtualServerId -StartPassword $StartPassword
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersStartPassword: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **StartPassword** | [**StartPassword**](StartPassword.md)|  | 

### Return type

[**StartPasswordResponse**](StartPasswordResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="Invoke-ServersStartPasswordGet"></a>
# **Invoke-ServersStartPasswordGet**
> StartPasswordResponse Invoke-ServersStartPasswordGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-VirtualServerId] <Int32><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ResponseFormat] <String><br>

Получение пароля для доступа к виртуальному серверу.

Для получение пароля для доступа к виртуальному серверу отправьте GET запрос по адресу `/v2/servers/$VIRTUAL_SERVER_ID/start_password`. Для вызова данного метода необходим токен с правами `remove`.   Обратите внимание, что в целях безопасности пароль доступа к серверу **рекомендуется сменить** при первом заходе на сервер. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$VirtualServerId = 1023 # Int32 | Уникальный ID виртуального сервера.
$ResponseFormat = "base64" # String | В каком формате будут в ответе представлены байты строки с паролем. По-умолчанию, *base64*. Перевод в байты необходим по той причине, что пароль может содержать специальные симоволы. (optional) (default to "base64")

# Получение пароля для доступа к виртуальному серверу.
try {
    $Result = Invoke-ServersStartPasswordGet -VirtualServerId $VirtualServerId -ResponseFormat $ResponseFormat
} catch {
    Write-Host ("Exception occurred when calling Invoke-ServersStartPasswordGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **VirtualServerId** | **Int32**| Уникальный ID виртуального сервера. | 
 **ResponseFormat** | **String**| В каком формате будут в ответе представлены байты строки с паролем. По-умолчанию, *base64*. Перевод в байты необходим по той причине, что пароль может содержать специальные симоволы. | [optional] [default to &quot;base64&quot;]

### Return type

[**StartPasswordResponse**](StartPasswordResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

