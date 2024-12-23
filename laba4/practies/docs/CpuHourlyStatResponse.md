# CpuHourlyStatResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CpuStat** | [**CpuStat[]**](CpuStat.md) |  | 

## Examples

- Prepare the resource
```powershell
$CpuHourlyStatResponse = Initialize-PSOpenAPIToolsCpuHourlyStatResponse  -CpuStat null
```

- Convert the resource to JSON
```powershell
$CpuHourlyStatResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

