# PSOpenAPITools.PSOpenAPITools\Api.TemplatesApi

All URIs are relative to *https://api.ruvds.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-TemplatesList**](TemplatesApi.md#Invoke-TemplatesList) | **GET** /v2/templates | Список всех шаблонов


<a id="Invoke-TemplatesList"></a>
# **Invoke-TemplatesList**
> AllTemplatesResponse Invoke-TemplatesList<br>

Список всех шаблонов

Шаблоны виртуальных серверов позволяют создавать сервера с дополнительным установленным и настроенным программным обеспечением.  Данный запрос возвращает шаблоны Маркетплейса [](), также данный список будет содержать Снапшоты виртуальных серверов, созданные в личном кабинете.  Чтобы получить список всех шаблонов отправьте GET запрос по адресу `/v2/templates`.  В ответе будет JSON объект с ключом `templates`. Он будет содержать массив шаблонов. 

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration


# Список всех шаблонов
try {
    $Result = Invoke-TemplatesList
} catch {
    Write-Host ("Exception occurred when calling Invoke-TemplatesList: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AllTemplatesResponse**](AllTemplatesResponse.md) (PSCustomObject)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

