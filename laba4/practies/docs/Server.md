# Server
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VirtualServerId** | **Int32** | ID сервера в системе. | 
**Status** | **String** | Одно из возможных значений статуса сервера. | 
**CreateProgress** | **Int32** | Прогресс создания сервера. Для созданного сервера это значение 100. | 
**Datacenter** | **Int32** | ID дата-центра. Сответствует полю &#x60;id&#x60; объекта &#x60;datacenter&#x60;. Информацию о дата-центрах можно получить в разделе &#x60;Datacenters&#x60;. | 
**TariffId** | **Int32** | Тарифный план | 
**PaymentPeriod** | [**PaymentPeriod**](PaymentPeriod.md) |  | 
**OsId** | **Int32** | Id операционной системы. Может быть null для несозданного сервера. | 
**TemplateId** | **String** | Шаблон, который использовался при создании сервера. Может быть null если при создании не использовался шаблон. | 
**Cpu** | **Int32** | Количество ядер CPU. | 
**Ram** | **Double** | RAM в GB. | 
**Vram** | **Int32** | Объем видеопамяти в Мегабайтах. | [optional] 
**Drive** | **Int32** | Размер основного диска в GB | 
**DriveTariffId** | **Int32** | Тарифный план определяющий типа диска из массива drive на котором установлена ОС | 
**AdditionalDrive** | **Int32** | Размер дополнительного диска в GB. В данный момент возможно только подключение Большого диска. &#x60;null&#x60; если без дополнительного диска | [optional] 
**AdditionalDriveTariffId** | **Int32** | Тарифный план дополнительного диска из массива additional_drive. &#x60;null&#x60;&#x60; если без дополнительного диска | [optional] 
**Ip** | **Int32** | Количество IP адресов | 
**DdosProtection** | **Double** | Объем полосы для входящего легитимного трафика, кратный 0.5 Мбит/с. 0.0 если DDoS защита не подключена. | [optional] 
**UserComment** | **String** | Пользовательский комментарий в ЛК RUVDS. Пустая строка в случае отсутствия | [optional] 

## Examples

- Prepare the resource
```powershell
$Server = Initialize-PSOpenAPIToolsServer  -VirtualServerId 6935 `
 -Status active `
 -CreateProgress 74 `
 -Datacenter 1 `
 -TariffId 14 `
 -PaymentPeriod null `
 -OsId 1 `
 -TemplateId a0f1b086-5a53-4dfe-aa14-f4a924b16fac `
 -Cpu 2 `
 -Ram 0.5 `
 -Vram 64 `
 -Drive 20 `
 -DriveTariffId 14 `
 -AdditionalDrive null `
 -AdditionalDriveTariffId null `
 -Ip 1 `
 -DdosProtection 0 `
 -UserComment My fancy server with SQL
```

- Convert the resource to JSON
```powershell
$Server | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

