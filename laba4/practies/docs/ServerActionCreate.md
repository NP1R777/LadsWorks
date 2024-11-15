# ServerActionCreate
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | * &#x60;power_on&#x60; - включение виртуального сервера * &#x60;power_off&#x60; - выключение питания виртуального сервера (жесткое) * &#x60;shutdown&#x60; - отправка гостевой операционной системе команды на выключение * &#x60;reboot&#x60; - перезагрузка сервера | 

## Examples

- Prepare the resource
```powershell
$ServerActionCreate = Initialize-PSOpenAPIToolsServerActionCreate  -Type null
```

- Convert the resource to JSON
```powershell
$ServerActionCreate | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

