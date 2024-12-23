# ServerPaidTill
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VirtualServerId** | **Int32** | ID сервера в системе. | [optional] 
**PaidTill** | **System.DateTime** | Дата и время UTC до которой оплачен сервер. | [optional] 

## Examples

- Prepare the resource
```powershell
$ServerPaidTill = Initialize-PSOpenAPIToolsServerPaidTill  -VirtualServerId 6935 `
 -PaidTill null
```

- Convert the resource to JSON
```powershell
$ServerPaidTill | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

