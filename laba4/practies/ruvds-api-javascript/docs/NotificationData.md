# RuvdsApi.NotificationData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **String** | Текст оповещения. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;custom_notification&#x60;  * &#x60;server_banned_by_admin&#x60;  | [optional] 
**amount** | **Number** | Необходимый объем пополнения средств в валюте RUB. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;server_blocked&#x60;  * &#x60;payment_period_ending&#x60;  | [optional] 
**mustPayTill** | **Date** | Время до которого необходимо оплатить. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;server_blocked&#x60;  * &#x60;payment_period_ending&#x60;  | [optional] 
**costOld** | **Number** | Старая цена виртуального сервера в валюте RUB. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;promo_ending&#x60;  | [optional] 
**costNew** | **Number** | Новая цена виртуального сервера в валюте RUB. Необязательное поле. Заполняется для оповещений с полем &#x60;type&#x60;:  * &#x60;promo_ending&#x60;  | [optional] 


