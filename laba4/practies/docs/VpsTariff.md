# VpsTariff
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int32** | ID тарифного плана виртуального сервера. | 
**Name** | **String** | Название тарифа. | 
**Cpu** | **Double** | Цена RUB за виртуальное ядро CPU. | 
**Ram** | **Double** | Цена RUB за 1 Гб оперативной памяти. | 
**Vram** | **Double** | Цена RUB за 1 Мб видео памяти. | 
**Ip** | **Double** | Цена за 1 дополнительный IP адрес. | 
**IsActive** | **Boolean** | Тариф активен. | 

## Examples

- Prepare the resource
```powershell
$VpsTariff = Initialize-PSOpenAPIToolsVpsTariff  -Id 14 `
 -Name Regular `
 -Cpu 79 `
 -Ram 195 `
 -Vram 1.953125 `
 -Ip 100 `
 -IsActive true
```

- Convert the resource to JSON
```powershell
$VpsTariff | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

