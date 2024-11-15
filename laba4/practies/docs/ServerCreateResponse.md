# ServerCreateResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VirtualServerId** | **Int32** | id виртуального сервера. Используется при получении статуса сервера. | [optional] 
**PaymentPeriod** | [**PaymentPeriod**](PaymentPeriod.md) |  | [optional] 
**CostRub** | **Double** | Стоимость сервера в рублях за указанный &#x60;payment_period&#x60; | [optional] 
**Password** | **String** | Пароль для подключения сервера. | [optional] 
**Action** | [**ApiAction**](ApiAction.md) |  | [optional] 
**Status** | [**Server**](Server.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ServerCreateResponse = Initialize-PSOpenAPIToolsServerCreateResponse  -VirtualServerId 6732 `
 -PaymentPeriod null `
 -CostRub 320 `
 -Password abs123 `
 -Action null `
 -Status null
```

- Convert the resource to JSON
```powershell
$ServerCreateResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

