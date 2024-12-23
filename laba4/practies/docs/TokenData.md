# TokenData
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TokenId** | **String** | Уникальный ID токена. | 
**TokenSecret** | **String** | Секретное значение токена. В целях безопасности показывается только один раз при создании. В случае его утери потребуется выпустить новый токен.  | 

## Examples

- Prepare the resource
```powershell
$TokenData = Initialize-PSOpenAPIToolsTokenData  -TokenId null `
 -TokenSecret null
```

- Convert the resource to JSON
```powershell
$TokenData | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

