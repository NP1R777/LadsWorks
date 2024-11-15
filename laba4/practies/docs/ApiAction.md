# ApiAction
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int32** | Уникальный ID действия. | 
**Type** | **String** | * &#x60;server_create&#x60; - Действие создается при отправке запроса через API на создание виртуального сервера. * &#x60;server_change&#x60; - Действие создается при отправке запроса через API на изменение конфигурации виртуального сервера. * &#x60;server_remove&#x60; - Действие создается при отправке запроса через API на удаление виртуального сервера. * &#x60;power_on&#x60; - Действие создается при отправке запроса через API на включение виртуального сервера. * &#x60;power_off&#x60; - Действие создается при отправке запроса через API на отключение питания виртуального сервера. * &#x60;shutdown&#x60; - Действие создается при отправке запроса через API на выключение виртуального сервера посредством отправки команды гостевой ОС. * &#x60;reboot&#x60; - Действие создается при отправке запроса через API на перезагрузку виртуального сервера. * &#x60;unknown&#x60; - Неизвестное действие, например, созданное не через API. | 
**Status** | **String** | * &#x60;running&#x60; - Действие в процессе выполнения. * &#x60;success&#x60; - Действие успешно завершилось. * &#x60;error&#x60; - Действие завершилось с ошибкой. * &#x60;wait_user_action&#x60; - Для продолжения выполнения необходимо действие со стороны пользователя. Например, внесение оплаты. | 
**Progress** | **Int32** | Прогресс действия в процентах. У завершенных действий значение 100. | 
**Started** | **System.DateTime** | Время начала действия. | 
**Finished** | **System.DateTime** | Время окончания действия. | [optional] 
**ResourceId** | **Int32** | ID ресурса к которому относится данное действие. | 
**ResourceType** | **String** | * &#x60;server&#x60; - Действие посредством API над виртуальным сервером. Поле &#x60;resource_id&#x60; содержит ID сервера. | 
**ActionError** | [**ActionError**](ActionError.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApiAction = Initialize-PSOpenAPIToolsApiAction  -Id null `
 -Type null `
 -Status null `
 -Progress 72 `
 -Started null `
 -Finished null `
 -ResourceId null `
 -ResourceType null `
 -ActionError null
```

- Convert the resource to JSON
```powershell
$ApiAction | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

