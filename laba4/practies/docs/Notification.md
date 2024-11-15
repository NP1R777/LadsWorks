# Notification
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NotificationId** | **String** | Уникальный ID оповещения. | 
**Status** | **String** | * &#x60;read&#x60; - Нотификация прочитана. * &#x60;unread&#x60; - Нотификация непрочитана. | 
**VirtualServerId** | **Int32** | ID сервера в системе. | 
**AddDt** | **System.DateTime** | Дата и время добавления оповещения | 
**StatusUpdateDt** | **System.DateTime** | Дата и время изменения статуса | 
**Type** | **String** | * &#x60;custom_notification&#x60; - оповещение общего вида * &#x60;server_banned_by_admin&#x60; - сервер был заблокирован администратором * &#x60;server_blocked&#x60; - сервер был заблокирован * &#x60;payment_period_ending&#x60; - оплаченный период подходит к концу * &#x60;promo_ending&#x60; - промо период подходит к концу * &#x60;server_started&#x60; - сервер был разблокирован * &#x60;server_removed&#x60; - сервер был удален * &#x60;violation_smtp&#x60; - сервер был заблокирован за анонимный smtp * &#x60;cloud_short_of_money&#x60; - недостаточно средств для оплаты сервера за ресурсы * &#x60;violation_dns&#x60; - небезопасный dns * &#x60;net_outgoing_violation&#x60; - заблокирован за большой исходящий трафик * &#x60;net_outgoing_warning&#x60; - предупреждение о большом исходящем трафике * &#x60;violation_firewall&#x60; - на виртуалке неактивен firewall * &#x60;info_firewall_activated&#x60;- на виртуалке активирован firewall * &#x60;violation_app&#x60; - сервер заблокирован за вредоносное ПО | 
**NotificationData** | [**NotificationData**](NotificationData.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Notification = Initialize-PSOpenAPIToolsNotification  -NotificationId null `
 -Status null `
 -VirtualServerId null `
 -AddDt null `
 -StatusUpdateDt null `
 -Type null `
 -NotificationData null
```

- Convert the resource to JSON
```powershell
$Notification | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

