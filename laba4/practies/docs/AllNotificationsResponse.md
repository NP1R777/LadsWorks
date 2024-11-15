# AllNotificationsResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Notifications** | [**Notification[]**](Notification.md) |  | 
**Pagination** | [**Pagination**](Pagination.md) |  | 

## Examples

- Prepare the resource
```powershell
$AllNotificationsResponse = Initialize-PSOpenAPIToolsAllNotificationsResponse  -Notifications null `
 -Pagination null
```

- Convert the resource to JSON
```powershell
$AllNotificationsResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

