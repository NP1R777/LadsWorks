# AdditionalServiceTariff
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int32** | ID дополнительного сервиса. | 
**Name** | **String** | Название дополнительного сервиса. | 
**Price** | **Double** | Цена за единицу. Единица зависит от типа сервиса. | 
**IsActive** | **Boolean** | Тариф активен. | 

## Examples

- Prepare the resource
```powershell
$AdditionalServiceTariff = Initialize-PSOpenAPIToolsAdditionalServiceTariff  -Id 4 `
 -Name DDoS Protection (ip) `
 -Price 400 `
 -IsActive null
```

- Convert the resource to JSON
```powershell
$AdditionalServiceTariff | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

