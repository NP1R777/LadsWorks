# Os
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int32** | ID операционной системы. | 
**Name** | **String** | Название операционной системы. | 
**IsActive** | **Boolean** | Операционная система доступна для создания. | 

## Examples

- Prepare the resource
```powershell
$Os = Initialize-PSOpenAPIToolsOs  -Id 14 `
 -Name Windows Server 2016 (ENG) `
 -IsActive true
```

- Convert the resource to JSON
```powershell
$Os | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

