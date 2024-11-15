# NotificationData
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | Текст оповещения. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;custom_notification&#x60;  * &#x60;server_banned_by_admin&#x60;  | [optional] 
**Amount** | **Double** | Необходимый объем пополнения средств в валюте RUB. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;server_blocked&#x60;  * &#x60;payment_period_ending&#x60;  | [optional] 
**MustPayTill** | **System.DateTime** | Время до которого необходимо оплатить. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;server_blocked&#x60;  * &#x60;payment_period_ending&#x60;  | [optional] 
**CostOld** | **Double** | Старая цена виртуального сервера в валюте RUB. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;promo_ending&#x60;  | [optional] 
**CostNew** | **Double** | Новая цена виртуального сервера в валюте RUB. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;promo_ending&#x60;  | [optional] 

## Examples

- Prepare the resource
```powershell
$NotificationData = Initialize-PSOpenAPIToolsNotificationData  -Message null `
 -Amount null `
 -MustPayTill null `
 -CostOld null `
 -CostNew null
```

- Convert the resource to JSON
```powershell
$NotificationData | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

