# Datacenter
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int32** | ID дата-центра. | 
**Name** | **String** | Название дата-центра. | 
**VpsTariffs** | **Int32[]** | Доступные в данном дата-центре IDs тарифных планов виртуальных серверов. Сответствует полю &#x60;id&#x60; объекта &#x60;vps_tariff&#x60;. Информацию о тарифах можно получить в разделе &#x60;Tariffs&#x60;. | 
**DriveTariffs** | **Int32[]** | Доступные в данном дата-центре IDs тарифных планов, определяющих типа диска котором установлена ОС. Сответствует полю &#x60;id&#x60; объекта &#x60;drive_tariff&#x60;. Информацию о тарифах можно получить в разделе &#x60;Tariffs&#x60;. | 
**AdditionalDriveTariffs** | **Int32[]** | Доступные в данном дата-центре IDs тарифных планов дополнительного диска. Сответствует полю &#x60;id&#x60; объекта &#x60;additional_drive_tariff&#x60;. Информацию о тарифах можно получить в разделе &#x60;Tariffs&#x60;. | 
**AdditionalServiceTariffs** | **Int32[]** | Доступные в данном дата-центре IDs тарифных планов дополнительных сервисов. Сответствует полю &#x60;id&#x60; объекта &#x60;additional_service_tariff&#x60;. Информацию о тарифах можно получить в разделе &#x60;Tariffs&#x60;. | 

## Examples

- Prepare the resource
```powershell
$Datacenter = Initialize-PSOpenAPIToolsDatacenter  -Id 1 `
 -Name Rucloud: Россия, Королёв `
 -VpsTariffs [14,15,21,22] `
 -DriveTariffs [1,3] `
 -AdditionalDriveTariffs [4] `
 -AdditionalServiceTariffs [4]
```

- Convert the resource to JSON
```powershell
$Datacenter | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

