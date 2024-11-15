# AllTariffsResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Vps** | [**VpsTariff[]**](VpsTariff.md) |  | 
**Drive** | [**DriveTariff[]**](DriveTariff.md) |  | 
**AdditionalDrive** | [**AdditionalDriveTariff[]**](AdditionalDriveTariff.md) |  | 
**AdditionalService** | [**AdditionalServiceTariff[]**](AdditionalServiceTariff.md) |  | 

## Examples

- Prepare the resource
```powershell
$AllTariffsResponse = Initialize-PSOpenAPIToolsAllTariffsResponse  -Vps null `
 -Drive null `
 -AdditionalDrive null `
 -AdditionalService null
```

- Convert the resource to JSON
```powershell
$AllTariffsResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

