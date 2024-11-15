# ServerPowerState
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VirtualServerId** | **Int32** | ID сервера в системе. | 
**PowerState** | **String** | Состояние питания виртуального сервера.   * &#x60;running&#x60; - Виртуальный сервер запущен.   * &#x60;off&#x60; - Виртуальный сервер выключен.   * &#x60;starting&#x60; - Виртуальный сервер запускается.   * &#x60;stopping&#x60; - Виртуальный сервер останавливается.  | 

## Examples

- Prepare the resource
```powershell
$ServerPowerState = Initialize-PSOpenAPIToolsServerPowerState  -VirtualServerId 6935 `
 -PowerState running
```

- Convert the resource to JSON
```powershell
$ServerPowerState | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

