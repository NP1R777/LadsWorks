# SshKey
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SshKeyId** | **String** | Уникальный ID SSH ключа. | 
**PublicKey** | **String** | Публичный ключ SSH. | 
**Name** | **String** | Произвольное имя ключа указанное при создании. | 
**Md5Fingerprint** | **String** | Уникальная подпись ключа в формате MD5. Это значение является выводом команды:  &#x60;ssh-keygen -E md5 -lvf mykey.pub&#x60;  | 
**Sha256Fingerprint** | **String** | Уникальная подпись ключа в формате SHA256. Это значение является выводом команды:  &#x60;ssh-keygen -E sha256 -lvf mykey.pub&#x60;  Обратите внимание, что специальные символы (такие как &#39;\\&#39; и &#39;/&#39;) могут быть экранированы в соответствии с требованиями к формату JSON.  | 

## Examples

- Prepare the resource
```powershell
$SshKey = Initialize-PSOpenAPIToolsSshKey  -SshKeyId 153e8ffa-6b69-47b5-933f-ce632471b06c `
 -PublicKey ssh-rsa SIMPLEEXAMPLEEAAAABIwAAAQEAklOUpkDHrfHY1 simple@example.local `
 -Name my key `
 -Md5Fingerprint MD5:6c:88:d3:d8:3a:be:70:55:4d:84:9d:fc:53:7c:ab:b2 `
 -Sha256Fingerprint SHA256:T6sYV2AeCpJWnz23xwRwjn6naFf/++lmsNPMPPmOWS0
```

- Convert the resource to JSON
```powershell
$SshKey | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

