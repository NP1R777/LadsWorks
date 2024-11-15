# RuvdsApi.StartPassword

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountPassword** | **String** | Пароль от личного кабинете ruvds.com в формате *base64* либо *base64url*. Примеры: * &#x60;MTIzYWJjIUAkJV4mKigpe318Pz48XCI6O9Cw0Y8&#x60; -&gt; &#x60;123abc!@$%^&amp;*(){}|?&gt;&lt;\\\&quot;:;ая&#x60; * &#x60;MTIzYWJjIUAkJV4mKigpe318Pz48XCI6O9Cw0Y8&#x3D;&#x60; -&gt; &#x60;123abc!@$%^&amp;*(){}|?&gt;&lt;\\\&quot;:;ая&#x60; | 
**responseFormat** | **String** | В каком формате будут в ответе представлены байты строки с паролем. По-умолчанию, *base64*. Перевод в байты необходим по той причине, что пароль может содержать специальные симоволы. | [optional] [default to &#39;base64&#39;]



## Enum: ResponseFormatEnum


* `base64` (value: `"base64"`)

* `base64url` (value: `"base64url"`)




