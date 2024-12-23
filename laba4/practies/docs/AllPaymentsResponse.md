# AllPaymentsResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Payments** | [**Payment[]**](Payment.md) |  | 
**Pagination** | [**Pagination**](Pagination.md) |  | 

## Examples

- Prepare the resource
```powershell
$AllPaymentsResponse = Initialize-PSOpenAPIToolsAllPaymentsResponse  -Payments null `
 -Pagination null
```

- Convert the resource to JSON
```powershell
$AllPaymentsResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

