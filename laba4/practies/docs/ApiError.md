# ApiError
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Короткий идентификатор, соответствующий возвращаемому коду. Например, для запроса, вернувшего код 404 значение будет &quot;&quot;not_found&quot;&quot;. | 
**Message** | **String** | Дополнительная информация об ошибке. | 

## Examples

- Prepare the resource
```powershell
$ApiError = Initialize-PSOpenAPIToolsApiError  -Id not_found `
 -Message Virtual server with id 3200 is not found.
```

- Convert the resource to JSON
```powershell
$ApiError | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

