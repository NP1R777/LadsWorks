# NetworkV4
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IpAddress** | **String** | IPv4 адрес виртуального сервера. | 
**Netmask** | **String** | Сетевая маска IPv4 адреса. | 
**Gateway** | **String** | Основной шлюз IPv4 адреса. | 

## Examples

- Prepare the resource
```powershell
$NetworkV4 = Initialize-PSOpenAPIToolsNetworkV4  -IpAddress 186.2.163.33 `
 -Netmask 255.255.255.0 `
 -Gateway 186.2.163.33
```

- Convert the resource to JSON
```powershell
$NetworkV4 | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

