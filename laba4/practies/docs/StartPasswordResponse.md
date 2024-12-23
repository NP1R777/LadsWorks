# StartPasswordResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Login** | **String** | Логин для доступа к серверу.  Обратите внимание, что для Linux серверов, рекомендуется при первом заходе создать другого пользователя с правами &#x60;sudo&#x60; и запретить ssh логин под &#x60;root&#x60; пользователем. Дополнительно рекомендуется настроить Firewall.  Для Windows серверов при первом заходе рекомендуется настроить Firewall c целью предотвращения брутфорса. | [optional] 
**LoginType** | **String** | Тип подключения к серверу. Зависит от Операционной системы, установленной на сервере.  * &#x60;rdp&#x60; - Подключение к Windows серверу по протоколу *RDP*.  * &#x60;ssh&#x60; - Подключение к Linux серверу по протоколу *SSH*. | [optional] 
**Password** | **String** | Байтовое представление &#x60;UTF-8&#x60; строки с паролем в &#x60;base64&#x60; либо &#x60;base64url&#x60; формате. Формат зависит от поля &#x60;response_format&#x60; в запросе.  Обратите внимание, что в целях безопасности этот пароль *рекомендуется сменить* при первом заходе на сервер.  Во избежание брутфорса пароля рекомендуется настроить Firewall. | [optional] 
**PasswordFormat** | **String** | В каком формате представлены байты строки с паролем. Формат зависит от поля &#x60;response_format&#x60; в запросе. | [optional] 

## Examples

- Prepare the resource
```powershell
$StartPasswordResponse = Initialize-PSOpenAPIToolsStartPasswordResponse  -Login root `
 -LoginType null `
 -Password MTIzYWJjIUAkJV4mKigpe318Pz48XCI6O9Cw0Y8&#x3D; `
 -PasswordFormat null
```

- Convert the resource to JSON
```powershell
$StartPasswordResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

