# Token
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TokenId** | **String** | Уникальный ID токена. | 
**Name** | **String** | Произвольное имя токена, которое задается при создании. | 
**Role** | **String** | * &#x60;read&#x60; - Токен только для чтения. Позволяет выполнять практически все HTTP GET запросы к API.   Т. е. получать список серверов, платежей и. т. д.  * &#x60;write&#x60; - Все права &#x60;read&#x60; и дополнительно позволяет создавать и изменять новые объект.   Т. е. HTTP методы POST и PUT. Например, создавать новые сервера и изменять конфигурацию сервера.  * &#x60;remove&#x60; - Все права &#x60;read&#x60; и &#x60;write&#x60; и дополнительно позволяет удалять виртуальные сервера.   Т. е. HTTP метод DELETE.  | 
**Expiry** | **System.DateTime** | Дата экспирации токена. Если не задана, то токен работает все время, пока не будет удален из личного кабинета [https://ruvds.com/my/settings/api](https://ruvds.com/my/settings/api).  | [optional] 

## Examples

- Prepare the resource
```powershell
$Token = Initialize-PSOpenAPIToolsToken  -TokenId null `
 -Name null `
 -Role null `
 -Expiry null
```

- Convert the resource to JSON
```powershell
$Token | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

