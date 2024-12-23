# ServerChangeResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CostRub** | **Double** | Количество рублей которое спишется или вернется на баланс после изменения конфигурации. Знак &quot;&quot;-&quot;&quot; означает, что средства вернутся на баланс. | [optional] 
**Action** | [**ApiAction**](ApiAction.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ServerChangeResponse = Initialize-PSOpenAPIToolsServerChangeResponse  -CostRub 22 `
 -Action null
```

- Convert the resource to JSON
```powershell
$ServerChangeResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

