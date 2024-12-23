# Template
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateId** | **String** | ID шаблона виртуального сервера. | 
**Name** | **String** | Имя шаблона. | 

## Examples

- Prepare the resource
```powershell
$Template = Initialize-PSOpenAPIToolsTemplate  -TemplateId ec406caa-3583-eb11-80f0-00155d008702 `
 -Name NodeJS - Ubuntu 20.04 LTS
```

- Convert the resource to JSON
```powershell
$Template | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

