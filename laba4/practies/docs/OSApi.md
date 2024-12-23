# PSOpenAPITools.PSOpenAPITools\Api.OSApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-OsList**](OSApi.md#Invoke-OsList) | **GET** /v2/os | Информация о доступных операционных системах


<a id="Invoke-OsList"></a>
# **Invoke-OsList**
> AllOsResponse Invoke-OsList<br>

Информация о доступных операционных системах

Для получения списка операционных систем отправьте GET запрос по адресу `/v2/os`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration


# Информация о доступных операционных системах
try {
    $Result = Invoke-OsList
} catch {
    Write-Host ("Exception occurred when calling Invoke-OsList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AllOsResponse**](AllOsResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

