# ApiForbiddenError
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Короткий идентификатор, соответствующий возвращаемому коду. | 
**UserId** | **String** | Guid пользователя в базе. Может быть использован при дальнейшей отправки запроса для получения разрешения.  | 
**Message** | **String** | Дополнительная информация об ошибке. | 

## Examples

- Prepare the resource
```powershell
$ApiForbiddenError = Initialize-PSOpenAPIToolsApiForbiddenError  -Id email_not_confirmed `
 -UserId 08a4ee34-0b63-4516-a2e6-b8405fa1ab2f `
 -Message The user is not allowed to create a server.
```

- Convert the resource to JSON
```powershell
$ApiForbiddenError | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

