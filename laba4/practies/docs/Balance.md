# Balance
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **Double** | Баланс в валюте, указанной в поле &#x60;currency&#x60;. | 
**Currency** | [**Currency**](Currency.md) |  | 
**Type** | [**Type**](Type.md) |  | 

## Examples

- Prepare the resource
```powershell
$Balance = Initialize-PSOpenAPIToolsBalance  -Amount 102 `
 -Currency null `
 -Type null
```

- Convert the resource to JSON
```powershell
$Balance | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

