# NotificationChange
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **String** | Изменить статус оповещения: * &#x60;read&#x60; - Оповещение прочитано. * &#x60;unread&#x60; - Оповещение не прочитано. | 

## Examples

- Prepare the resource
```powershell
$NotificationChange = Initialize-PSOpenAPIToolsNotificationChange  -Status null
```

- Convert the resource to JSON
```powershell
$NotificationChange | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

