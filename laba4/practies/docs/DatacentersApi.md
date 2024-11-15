# PSOpenAPITools.PSOpenAPITools\Api.DatacentersApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-DatacentersList**](DatacentersApi.md#Invoke-DatacentersList) | **GET** /v2/datacenters | Информация о доступных дата-центрах


<a id="Invoke-DatacentersList"></a>
# **Invoke-DatacentersList**
> AllDatacentersResponse Invoke-DatacentersList<br>

Информация о доступных дата-центрах

Чтобы получить список всех доступных дата-центров отправьте GET запрос по адресу `/v2/datacenters`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration


# Информация о доступных дата-центрах
try {
    $Result = Invoke-DatacentersList
} catch {
    Write-Host ("Exception occurred when calling Invoke-DatacentersList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AllDatacentersResponse**](AllDatacentersResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

