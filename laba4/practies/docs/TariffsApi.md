# PSOpenAPITools.PSOpenAPITools\Api.TariffsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-TariffsList**](TariffsApi.md#Invoke-TariffsList) | **GET** /v2/tariffs | Информация о доступных тарифах


<a id="Invoke-TariffsList"></a>
# **Invoke-TariffsList**
> AllTariffsResponse Invoke-TariffsList<br>

Информация о доступных тарифах

Чтобы получить список всех доступных тарифов отправьте GET запрос по адресу `/v2/tariffs`. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration


# Информация о доступных тарифах
try {
    $Result = Invoke-TariffsList
} catch {
    Write-Host ("Exception occurred when calling Invoke-TariffsList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AllTariffsResponse**](AllTariffsResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

