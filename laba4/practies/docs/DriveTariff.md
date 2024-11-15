# DriveTariff
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int32** | ID тарифа диска. | 
**Name** | **String** | Название тарифа | 
**Price** | **Double** | цена RUB за 1 Гб | 
**IsActive** | **Boolean** | Тариф активен. | 

## Examples

- Prepare the resource
```powershell
$DriveTariff = Initialize-PSOpenAPIToolsDriveTariff  -Id 1 `
 -Name HDD `
 -Price 5.5 `
 -IsActive true
```

- Convert the resource to JSON
```powershell
$DriveTariff | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

