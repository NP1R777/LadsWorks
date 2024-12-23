# ServerChange
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VirtualServerId** | **Int32** | ID виртуального сервера. | 
**Cpu** | **Int32** | Новое количество ядер CPU. | [optional] 
**Ram** | **Double** | Новое количество RAM в GB. | [optional] 
**Vram** | **Int32** | Новое количество VRAM в Мегабайтах. | [optional] 
**Drive** | **Int32** | Новый размер диска в GB. | [optional] 
**Ip** | **Int32** | Новое количество IP адресов. | [optional] 

## Examples

- Prepare the resource
```powershell
$ServerChange = Initialize-PSOpenAPIToolsServerChange  -VirtualServerId 2343 `
 -Cpu 2 `
 -Ram 2 `
 -Vram 64 `
 -Drive 40 `
 -Ip 2
```

- Convert the resource to JSON
```powershell
$ServerChange | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

