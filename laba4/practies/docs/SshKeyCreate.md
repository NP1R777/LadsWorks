# SshKeyCreate
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicKey** | **String** | Публичный ключ SSH.  Часто этот ключ находится в файле с расширением &#x60;pub&#x60;, например, &#x60;id_ed25519.pub&#x60;.  | 
**Name** | **String** | Произвольное имя ключа, придуманное пользователем. Используется как комментарий.  | 

## Examples

- Prepare the resource
```powershell
$SshKeyCreate = Initialize-PSOpenAPIToolsSshKeyCreate  -PublicKey ssh-rsa SIMPLEEXAMPLEEAAAABIwAAAQEAklOUpkDHrfHY1 simple@example.local `
 -Name my key
```

- Convert the resource to JSON
```powershell
$SshKeyCreate | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

