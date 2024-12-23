# RuvdsApi.Notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notificationId** | **String** | Уникальный ID оповещения. | 
**status** | **String** | * &#x60;read&#x60; - Нотификация прочитана. * &#x60;unread&#x60; - Нотификация непрочитана. | 
**virtualServerId** | **Number** | ID сервера в системе. | 
**addDt** | **Date** | Дата и время добавления оповещения | 
**statusUpdateDt** | **Date** | Дата и время изменения статуса | 
**type** | **String** | * &#x60;custom_notification&#x60; - оповещение общего вида * &#x60;server_banned_by_admin&#x60; - сервер был заблокирован администратором * &#x60;server_blocked&#x60; - сервер был заблокирован * &#x60;payment_period_ending&#x60; - оплаченный период подходит к концу * &#x60;promo_ending&#x60; - промо период подходит к концу * &#x60;server_started&#x60; - сервер был разблокирован * &#x60;server_removed&#x60; - сервер был удален * &#x60;violation_smtp&#x60; - сервер был заблокирован за анонимный smtp * &#x60;cloud_short_of_money&#x60; - недостаточно средств для оплаты сервера за ресурсы * &#x60;violation_dns&#x60; - небезопасный dns * &#x60;net_outgoing_violation&#x60; - заблокирован за большой исходящий трафик * &#x60;net_outgoing_warning&#x60; - предупреждение о большом исходящем трафике * &#x60;violation_firewall&#x60; - на виртуалке неактивен firewall * &#x60;info_firewall_activated&#x60;- на виртуалке активирован firewall * &#x60;violation_app&#x60; - сервер заблокирован за вредоносное ПО | 
**notificationData** | [**NotificationData**](NotificationData.md) |  | [optional] 



## Enum: StatusEnum


* `read` (value: `"read"`)

* `unread` (value: `"unread"`)





## Enum: TypeEnum


* `custom_notification` (value: `"custom_notification"`)

* `server_banned_by_admin` (value: `"server_banned_by_admin"`)

* `server_blocked` (value: `"server_blocked"`)

* `payment_period_ending` (value: `"payment_period_ending"`)

* `promo_ending` (value: `"promo_ending"`)

* `server_started` (value: `"server_started"`)

* `server_removed` (value: `"server_removed"`)

* `violation_smtp` (value: `"violation_smtp"`)

* `cloud_short_of_money` (value: `"cloud_short_of_money"`)

* `violation_dns` (value: `"violation_dns"`)

* `net_outgoing_violation` (value: `"net_outgoing_violation"`)

* `net_outgoing_warning` (value: `"net_outgoing_warning"`)

* `violation_firewall` (value: `"violation_firewall"`)

* `info_firewall_activated` (value: `"info_firewall_activated"`)

* `violation_app` (value: `"violation_app"`)




