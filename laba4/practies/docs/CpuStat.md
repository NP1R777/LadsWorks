# CpuStat
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddDt** | **System.DateTime** | Время формирования статистики. | 
**CpuUsage** | **Double** | Среднее использование CPU в процентах. | 

## Examples

- Prepare the resource
```powershell
$CpuStat = Initialize-PSOpenAPIToolsCpuStat  -AddDt null `
 -CpuUsage null
```

- Convert the resource to JSON
```powershell
$CpuStat | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

