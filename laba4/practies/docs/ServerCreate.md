# ServerCreate
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Datacenter** | **Int32** | ID дата-центра. Сответствует полю &#x60;id&#x60; объекта &#x60;datacenter&#x60;. Информацию о дата-центрах можно получить в разделе &#x60;Datacenters&#x60;. | 
**TariffId** | **Int32** | ID тарифного плана виртуального сервера. Сответствует полю &#x60;id&#x60; объекта &#x60;vps_tariff&#x60;. Информацию о тарифах можно получить в разделе &#x60;Tariffs&#x60;. | 
**OsId** | **Int32** | ID операционной системы. Сответствует полю &#x60;id&#x60; объекта &#x60;os&#x60;. Информацию об операционных системах можно получить в разделе &#x60;OS&#x60;. Взаимоисключающий параметр с &#x60;template_id&#x60;. Необходимо присутствие поля &#x60;os_id&#x60; либо &#x60;template_id&#x60;.  | [optional] 
**TemplateId** | **String** | Guid шаблона. Взаимоисключающий параметр с &#x60;os_id&#x60;. Необходимо присутствие поля &#x60;os_id&#x60; либо &#x60;template_id&#x60;.  | [optional] 
**PaymentPeriod** | [**PaymentPeriod**](PaymentPeriod.md) |  | 
**Cpu** | **Int32** | Количество ядер CPU. | 
**Ram** | **Double** | RAM в GB. | 
**Vram** | **Int32** | Объем видеопамяти в Мегабайтах. | [optional] 
**Drive** | **Int32** | Размер основного диска в GB | 
**DriveTariffId** | **Int32** | ID тарифного плана, определяющего типа диска котором установлена ОС. Сответствует полю &#x60;id&#x60; объекта &#x60;drive_tariff&#x60;. Информацию о тарифах можно получить в разделе &#x60;Tariffs&#x60;. | 
**AdditionalDrive** | **Int32** | Размер дополнительного диска в GB. В данный момент возможно только подключение Большого диска. Значение &#x60;null&#x60; если без дополнительного диска. | [optional] 
**AdditionalDriveTariffId** | **Int32** | ID тарифного плана дополнительного диска. Сответствует полю &#x60;id&#x60; объекта &#x60;additional_drive_tariff&#x60;. Информацию о тарифах можно получить в разделе &#x60;Tariffs&#x60;. Значение &#x60;null&#x60; если без дополнительного диска. | [optional] 
**Ip** | **Int32** | Количество IP адресов | 
**DdosProtection** | **Double** | Объем полосы для входящего легитимного трафика, кратный 0.5 Мбит/с. 0.0 если DDoS защита не подключена. | [optional] 
**Promocode** | **String** | Промокод для получения постоянной скидки | [optional] 
**SshKeyId** | **String** | Уникальный ID SSH ключа. Соответствует полю &#x60;ssh_key_id&#x60; в модели &#x60;ssh_key&#x60;. Управление SSH ключами осуществляется в разделе &#x60;SSH Keys&#x60;. | [optional] 
**ComputerName** | **String** | Имя компьютера создаваемого виртуального сервера | [optional] 
**UserComment** | **String** | Пользовательский комментарий в ЛК RUVDS | [optional] 

## Examples

- Prepare the resource
```powershell
$ServerCreate = Initialize-PSOpenAPIToolsServerCreate  -Datacenter 1 `
 -TariffId 14 `
 -OsId 52 `
 -TemplateId 08a4ee34-0b63-4516-a2e6-b8405fa1ab2f `
 -PaymentPeriod null `
 -Cpu 2 `
 -Ram 2 `
 -Vram 0 `
 -Drive 20 `
 -DriveTariffId 1 `
 -AdditionalDrive null `
 -AdditionalDriveTariffId null `
 -Ip 1 `
 -DdosProtection 0 `
 -Promocode AXF-SDF-324 `
 -SshKeyId 153e8ffa-6b69-47b5-933f-ce632471b06c `
 -ComputerName SQLSRV-01 `
 -UserComment Server created via API.
```

- Convert the resource to JSON
```powershell
$ServerCreate | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

