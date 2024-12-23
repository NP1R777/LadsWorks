# RuvdsApi.ApiAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Уникальный ID действия. | 
**type** | **String** | * &#x60;server_create&#x60; - Действие создается при отправке запроса через API на создание виртуального сервера. * &#x60;server_change&#x60; - Действие создается при отправке запроса через API на изменение конфигурации виртуального сервера. * &#x60;server_remove&#x60; - Действие создается при отправке запроса через API на удаление виртуального сервера. * &#x60;power_on&#x60; - Действие создается при отправке запроса через API на включение виртуального сервера. * &#x60;power_off&#x60; - Действие создается при отправке запроса через API на отключение питания виртуального сервера. * &#x60;shutdown&#x60; - Действие создается при отправке запроса через API на выключение виртуального сервера посредством отправки команды гостевой ОС. * &#x60;reboot&#x60; - Действие создается при отправке запроса через API на перезагрузку виртуального сервера. * &#x60;unknown&#x60; - Неизвестное действие, например, созданное не через API. | 
**status** | **String** | * &#x60;running&#x60; - Действие в процессе выполнения. * &#x60;success&#x60; - Действие успешно завершилось. * &#x60;error&#x60; - Действие завершилось с ошибкой. * &#x60;wait_user_action&#x60; - Для продолжения выполнения необходимо действие со стороны пользователя. Например, внесение оплаты. | 
**progress** | **Number** | Прогресс действия в процентах. У завершенных действий значение 100. | 
**started** | **Date** | Время начала действия. | 
**finished** | **Date** | Время окончания действия. | [optional] 
**resourceId** | **Number** | ID ресурса к которому относится данное действие. | 
**resourceType** | **String** | * &#x60;server&#x60; - Действие посредством API над виртуальным сервером. Поле &#x60;resource_id&#x60; содержит ID сервера. | 
**actionError** | [**ActionError**](ActionError.md) |  | [optional] 



## Enum: TypeEnum


* `server_create` (value: `"server_create"`)

* `server_change` (value: `"server_change"`)

* `server_remove` (value: `"server_remove"`)

* `power_on` (value: `"power_on"`)

* `power_off` (value: `"power_off"`)

* `shutdown` (value: `"shutdown"`)

* `reboot` (value: `"reboot"`)

* `unknown` (value: `"unknown"`)





## Enum: StatusEnum


* `running` (value: `"running"`)

* `success` (value: `"success"`)

* `error` (value: `"error"`)

* `wait_user_action` (value: `"wait_user_action"`)





## Enum: ResourceTypeEnum


* `server` (value: `"server"`)




