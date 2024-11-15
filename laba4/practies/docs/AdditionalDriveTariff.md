# AdditionalDriveTariff
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int32** | ID тарифа дополнительного диска. | 
**Name** | **String** | Название тарифа | 
**Price** | **Double** | цена RUB за 1 Гб | 
**IsActive** | **Boolean** | Тариф активен. | 

## Examples

- Prepare the resource
```powershell
$AdditionalDriveTariff = Initialize-PSOpenAPIToolsAdditionalDriveTariff  -Id 4 `
 -Name Huge HDD `
 -Price 0.48828125 `
 -IsActive true
```

- Convert the resource to JSON
```powershell
$AdditionalDriveTariff | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

