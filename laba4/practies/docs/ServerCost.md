# ServerCost
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CostRub** | **Double** | Стоимость сервера в рублях за указанный &#x60;payment_period&#x60; | 
**PaymentPeriod** | [**PaymentPeriod**](PaymentPeriod.md) |  | 

## Examples

- Prepare the resource
```powershell
$ServerCost = Initialize-PSOpenAPIToolsServerCost  -CostRub 320 `
 -PaymentPeriod null
```

- Convert the resource to JSON
```powershell
$ServerCost | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

