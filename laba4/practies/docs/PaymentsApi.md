# PSOpenAPITools.PSOpenAPITools\Api.PaymentsApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-PaymentsList**](PaymentsApi.md#Invoke-PaymentsList) | **GET** /v2/payments | Список всех платежей


<a id="Invoke-PaymentsList"></a>
# **Invoke-PaymentsList**
> AllPaymentsResponse Invoke-PaymentsList<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Type] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-PerPage] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Page] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Sort] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Order] <String><br>

Список всех платежей

Чтобы получить список всех платежей отправьте GET запрос по адресу `/v2/payments`.  В ответе будет JSON объект с ключом `payments`. Он будет содержать массив платежей. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration

$Type = "default" # String | Тип запрашиваемого баланса. * `default` - Денежный баланс. * `bonus` - Количество бонусных баллов. * `partner` - Партнерские начисления. (optional) (default to "default")
$PerPage = 2 # Int32 | Количество элементов на одной странице (optional) (default to 25)
$Page = 1 # Int32 | Номер страницы в результате (optional) (default to 1)
$Sort = "dt" # String | * `dt` - Сортировка по полю `dt`.  (optional) (default to "dt")
$Order = "asc" # String | * `asc` - Сортировка по возрастанию.  * `desc` - Сортировка по убыванию.  (optional) (default to "asc")

# Список всех платежей
try {
    $Result = Invoke-PaymentsList -Type $Type -PerPage $PerPage -Page $Page -Sort $Sort -Order $Order
} catch {
    Write-Host ("Exception occurred when calling Invoke-PaymentsList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Type** | **String**| Тип запрашиваемого баланса. * &#x60;default&#x60; - Денежный баланс. * &#x60;bonus&#x60; - Количество бонусных баллов. * &#x60;partner&#x60; - Партнерские начисления. | [optional] [default to &quot;default&quot;]
 **PerPage** | **Int32**| Количество элементов на одной странице | [optional] [default to 25]
 **Page** | **Int32**| Номер страницы в результате | [optional] [default to 1]
 **Sort** | **String**| * &#x60;dt&#x60; - Сортировка по полю &#x60;dt&#x60;.  | [optional] [default to &quot;dt&quot;]
 **Order** | **String**| * &#x60;asc&#x60; - Сортировка по возрастанию.  * &#x60;desc&#x60; - Сортировка по убыванию.  | [optional] [default to &quot;asc&quot;]

### Return type

[**AllPaymentsResponse**](AllPaymentsResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

