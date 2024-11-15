# AllServersResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Servers** | [**Server[]**](Server.md) |  | 
**Pagination** | [**Pagination**](Pagination.md) |  | 

## Examples

- Prepare the resource
```powershell
$AllServersResponse = Initialize-PSOpenAPIToolsAllServersResponse  -Servers null `
 -Pagination null
```

- Convert the resource to JSON
```powershell
$AllServersResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

