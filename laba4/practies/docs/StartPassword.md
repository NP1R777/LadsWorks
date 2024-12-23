# StartPassword
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountPassword** | **String** | Пароль от личного кабинете ruvds.com в формате *base64* либо *base64url*. Примеры: * &#x60;MTIzYWJjIUAkJV4mKigpe318Pz48XCI6O9Cw0Y8&#x60; -&gt; &#x60;123abc!@$%^&amp;*(){}|?&gt;&lt;\&quot;&quot;:;ая&#x60; * &#x60;MTIzYWJjIUAkJV4mKigpe318Pz48XCI6O9Cw0Y8&#x3D;&#x60; -&gt; &#x60;123abc!@$%^&amp;*(){}|?&gt;&lt;\&quot;&quot;:;ая&#x60; | 
**ResponseFormat** | **String** | В каком формате будут в ответе представлены байты строки с паролем. По-умолчанию, *base64*. Перевод в байты необходим по той причине, что пароль может содержать специальные симоволы. | [optional] [default to "base64"]

## Examples

- Prepare the resource
```powershell
$StartPassword = Initialize-PSOpenAPIToolsStartPassword  -AccountPassword MTIzYWJjIUAkJV4mKigpe318Pz48XCI6O9Cw0Y8 `
 -ResponseFormat null
```

- Convert the resource to JSON
```powershell
$StartPassword | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

