# NetworkStat
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddDt** | **System.DateTime** | Время формирования статистики. | 
**InboundPps** | **Double** | Средний входящий трафик в пакетах в секунду. | 
**OutboundPps** | **Double** | Средний исходящий трафик в пакетах в секунду. | 
**InboundBps** | **Double** | Средний входящий трафик в байтах в секунду. | 
**OutboundBps** | **Double** | Средний исходящий трафик в байтах в секунду. | 

## Examples

- Prepare the resource
```powershell
$NetworkStat = Initialize-PSOpenAPIToolsNetworkStat  -AddDt null `
 -InboundPps null `
 -OutboundPps null `
 -InboundBps null `
 -OutboundBps null
```

- Convert the resource to JSON
```powershell
$NetworkStat | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

