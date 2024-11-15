# AllActionsResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Actions** | [**ApiAction[]**](ApiAction.md) |  | 
**Pagination** | [**Pagination**](Pagination.md) |  | 

## Examples

- Prepare the resource
```powershell
$AllActionsResponse = Initialize-PSOpenAPIToolsAllActionsResponse  -Actions null `
 -Pagination null
```

- Convert the resource to JSON
```powershell
$AllActionsResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

