# RuvdsApi.Server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**virtualServerId** | **Number** | ID сервера в системе. | 
**status** | **String** | Одно из возможных значений статуса сервера. | 
**createProgress** | **Number** | Прогресс создания сервера. Для созданного сервера это значение 100. | 
**datacenter** | **Number** | ID дата-центра. Сответствует полю &#x60;id&#x60; объекта &#x60;datacenter&#x60;. Информацию о дата-центрах можно получить в разделе &#x60;Datacenters&#x60;. | 
**tariffId** | **Number** | Тарифный план | 
**paymentPeriod** | [**PaymentPeriod**](PaymentPeriod.md) |  | 
**osId** | **Number** | Id операционной системы. Может быть null для несозданного сервера. | 
**templateId** | **String** | Шаблон, который использовался при создании сервера. Может быть null если при создании не использовался шаблон. | 
**cpu** | **Number** | Количество ядер CPU. | 
**ram** | **Number** | RAM в GB. | 
**vram** | **Number** | Объем видеопамяти в Мегабайтах. | [optional] 
**drive** | **Number** | Размер основного диска в GB | 
**driveTariffId** | **Number** | Тарифный план определяющий типа диска из массива drive на котором установлена ОС | 
**additionalDrive** | **Number** | Размер дополнительного диска в GB. В данный момент возможно только подключение Большого диска. &#x60;null&#x60; если без дополнительного диска | [optional] 
**additionalDriveTariffId** | **Number** | Тарифный план дополнительного диска из массива additional_drive. &#x60;null&#x60;&#x60; если без дополнительного диска | [optional] 
**ip** | **Number** | Количество IP адресов | 
**ddosProtection** | **Number** | Объем полосы для входящего легитимного трафика, кратный 0.5 Мбит/с. 0.0 если DDoS защита не подключена. | [optional] 
**userComment** | **String** | Пользовательский комментарий в ЛК RUVDS. Пустая строка в случае отсутствия | [optional] 



## Enum: StatusEnum


* `initializing` (value: `"initializing"`)

* `active` (value: `"active"`)

* `notpaid` (value: `"notpaid"`)

* `blocked` (value: `"blocked"`)

* `deleted` (value: `"deleted"`)





## Enum: VramEnum


* `0` (value: `0`)

* `64` (value: `64`)

* `128` (value: `128`)

* `256` (value: `256`)

* `512` (value: `512`)

* `1024` (value: `1024`)




