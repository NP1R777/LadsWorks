# RuvdsApi.Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dt** | **Date** | Дата и время транзакции. | 
**direction** | **Number** | * &#x60;1&#x60; - поступление средств * &#x60;2&#x60; - списание | 
**paySource** | **String** | Дополнительная информация от платежной системы. | [optional] 
**amount** | **Number** | Сумма в валюте пополнения &#x60;currency&#x60;. | 
**currency** | [**Currency**](Currency.md) |  | 
**type** | [**Type**](Type.md) |  | 



## Enum: DirectionEnum


* `1` (value: `1`)

* `2` (value: `2`)




