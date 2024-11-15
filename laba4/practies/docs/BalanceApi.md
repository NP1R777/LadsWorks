# PSOpenAPITools.PSOpenAPITools\Api.BalanceApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-BalanceGet**](BalanceApi.md#Invoke-BalanceGet) | **GET** /v2/balance | Получение информации об актуальном балансе.


<a id="Invoke-BalanceGet"></a>
# **Invoke-BalanceGet**
> Balance Invoke-BalanceGet<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Type] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-CurrencyId] <System.Nullable[Int32]><br>

Получение информации об актуальном балансе.

Для получения баланса отправьте GET запрос по адресу `/v2/balance`.

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$Type = "default" # String | Тип запрашиваемого баланса. * `default` - Денежный баланс. * `bonus` - Количество бонусных баллов. * `partner` - Партнерские начисления. (optional) (default to "default")
$CurrencyId = "1" # Int32 | В какой валюте получить значение баланса. * `1` - RUB * `3` - USD * `4` - EUR (optional) (default to 1)

# Получение информации об актуальном балансе.
try {
    $Result = Invoke-BalanceGet -Type $Type -CurrencyId $CurrencyId
} catch {
    Write-Host ("Exception occurred when calling Invoke-BalanceGet: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Type** | **String**| Тип запрашиваемого баланса. * &#x60;default&#x60; - Денежный баланс. * &#x60;bonus&#x60; - Количество бонусных баллов. * &#x60;partner&#x60; - Партнерские начисления. | [optional] [default to &quot;default&quot;]
 **CurrencyId** | **Int32**| В какой валюте получить значение баланса. * &#x60;1&#x60; - RUB * &#x60;3&#x60; - USD * &#x60;4&#x60; - EUR | [optional] [default to 1]

### Return type

[**Balance**](Balance.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

