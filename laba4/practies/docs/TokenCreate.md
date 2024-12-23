# TokenCreate
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TokenName** | **String** | Произвольное имя токена. Задается для удобства, чтобы можно было отличать токены между собой. | 
**TokenRole** | **String** | Роль токена. Через API можно получать токен только для чтения и записи.  Если требуются права на удаление, то токен можно выпустить в личном кабинете RUVDS по адресу [https://ruvds.com/my/settings/api](https://ruvds.com/my/settings/api).  | 
**TokenExpiry** | **System.DateTime** | Дата экспирации токена. Можно не задавать - в этому случае токен будет все время валидным вплоть до его удаления.  | [optional] 

## Examples

- Prepare the resource
```powershell
$TokenCreate = Initialize-PSOpenAPIToolsTokenCreate  -TokenName my-api-token `
 -TokenRole read `
 -TokenExpiry null
```

- Convert the resource to JSON
```powershell
$TokenCreate | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

