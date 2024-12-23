# DriveStat
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddDt** | **System.DateTime** | Время формирования статистики. | 
**ReadIops** | **Double** | Среднее чтение с диска в IOPS. | 
**WriteIops** | **Double** | Средняя запись на диск в IOPS. | 

## Examples

- Prepare the resource
```powershell
$DriveStat = Initialize-PSOpenAPIToolsDriveStat  -AddDt null `
 -ReadIops null `
 -WriteIops null
```

- Convert the resource to JSON
```powershell
$DriveStat | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

