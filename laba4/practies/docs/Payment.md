# Payment
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Dt** | **System.DateTime** | Дата и время транзакции. | 
**Direction** | **Int32** | * &#x60;1&#x60; - поступление средств * &#x60;2&#x60; - списание | 
**PaySource** | **String** | Дополнительная информация от платежной системы. | [optional] 
**Amount** | **Double** | Сумма в валюте пополнения &#x60;currency&#x60;. | 
**Currency** | [**Currency**](Currency.md) |  | 
**Type** | [**Type**](Type.md) |  | 

## Examples

- Prepare the resource
```powershell
$Payment = Initialize-PSOpenAPIToolsPayment  -Dt null `
 -Direction null `
 -PaySource null `
 -Amount null `
 -Currency null `
 -Type null
```

- Convert the resource to JSON
```powershell
$Payment | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

